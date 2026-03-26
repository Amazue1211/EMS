
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";
import userModel from "../modules/usermodules.js"
import transporter from "../config/nodeMailer.js"
export const register = async (req, res)=>{

   const{name, email, password}  = req.body
   if(!name || !email || !password){
    return res.json({success: false, message:"missing details"})
   }
   try{
    const existingUser = await userModel.findOne({email})
    if(existingUser){
        return res.json({sucess:false, message: "user already exists"})
    }
const hashedPassword =await bcrypt.hash(password, 10);
const user = new userModel({name,email,password: hashedPassword})
await user.save();

const token = jwt.sign({id: user._id}, process.env.JWT_SECRET,{ expiresIn: '7d' } )

res.cookie('token', token, {
    httpOnly: true,
    secure:process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
    maxAge: 7 * 24 * 60* 60 * 1000, // 7 days
});
// sending welcome email
const mailOptions ={
    from: process.env.SENDER_EMAIL,
    to: email,
    subject: 'welcome to our EMS',
    text:`welcome to our EMS your account has been created with email id:${email}`
}


console.log("Reached email section");   // 👈 ADD HERE
console.log("Mail options:", mailOptions); // 👈 ADD THIS TOO
try {
  const info = await transporter.sendMail(mailOptions)
  console.log("Email sent:", info.response)
} catch (error) {
  console.log("Email failed:", error)
}
// await transporter.sendMail(mailOptions)
return res.json({sucess:true,})
   } catch(error){
    res.json({success: false, message: error.message})
   }
}

export const login = async (req , res) =>{
    const {email, password} = req.body;

    if(!email || !password){
        return res.json({success: false, message: "email and password are required"})
    }

    try {
const user = await userModel.findOne({email});

if(!user){
    return res.json({success: false, message: 'invalid email'})

}
const isMatch = await bcrypt.compare(password, user.password);
if(!isMatch){    return res.json({success: false, message: 'invalid password'})
}
const token = jwt.sign({id: user._id}, process.env.JWT_SECRET,{ expiresIn: '7d' } )

res.cookie('token', token, {
    httpOnly: true,
    secure:process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
    maxAge: 7 * 24 * 60* 60 * 1000, // 7 days
})
return res.json({sucess:true,})
    }catch(error){
        return res.json({success: false, message: error.message})
    }
}
export const logout = (req, res)=>{
    try{
         res.clearCookie('token',{
             httpOnly: true,
    secure:process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
    maxAge: 7 * 24 * 60* 60 * 1000, // 7 days
         })
         return res.json({success: true, message:"Logged out"})
    }catch (error){
         return res.json({success: false, message: error.message})
    }
}
// send verification email to user
export const sendVerifyOtp = async (req, res) =>{
    try{
const {userid} = req.body
const user = await userModel.findById(userid)
if(user.isAccountVerified){
    return res.json({success: false, message: "account already verified"})
}
const otp = String(Math.floor(100000 + Math.random() * 900000));

user.verifyOtp = otp;
user.verifyOtpExpireTime = Date.now() + 24 * 60 * 1000; // 10 minutes
await user.save();

const mailOption = {
    from: process.env.SENDER_EMAIL,
    to: user.email,
    subject: 'Account verification OTP',
    text:`Your verification OTP is: ${otp}. verify your account.
    `
}
await transporter.sendMail(mailOption)
return res.json({success: true, message: "otp sent to your email"})
    } catch(error){
 return res.json({success: false, message: error.message})
    
    }
}

export const verifyEmail = async (req, res) => {
    const {userid, otp} = req.body
    if(!userid || !otp){
        return res.json({success: false, message: "missing details"})
    }
    try{
const user = await userModel.findById(userid)
if(!user){
    return res.json({success: false, message: "user not found"})
}
if(user.verifyOtp === ' ' || user.verifyOtp !== otp ){
    return res.json({success: false, message: "invalid otp"})
}

if(user.verifyOtpExpireTime < Date.now()){
    return res.json({success: false, message: "otp expired"})
}
user.isAccountVerified = true;
user.verifyOtp = ' ';
user.verifyOtpExpireTime = 0;
await user.save();
return res.json({success: true, message: "account verified successfully"})
    }catch(error){
        return res.json({success: false, message: error.message})
    }
}
