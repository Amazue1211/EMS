import React from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'

const initialValues = {
  email: "",
  password: ""
}

const user = {
  email: "amazue@gmail.com",
  password: "chima12345"
}

const validate = values => {
  const errors = {}

  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email format'
  }

  if (!values.password) {
    errors.password = 'Required'
  } else if (values.password.length < 8) {
    errors.password = 'Password must be at least 8 characters'
  }

  return errors
}

function Login() {
  const formik = useFormik({
    initialValues,
    validate,
    onSubmit: values => {
      if (values.email === user.email && values.password === user.password) {
        alert("Welcome!")
      } else {
        alert("Invalid credentials")
      }
    }
  })

  return (
    <div className='flex justify-center flex-wrap bg-[#efeaeaec] h-[1000px]'>
      <form 
        onSubmit={formik.handleSubmit} 
        className='bg-[#d9d9e7dc] w-[400px] p-[40px] rounded-[10px] shadow-2xl mt-[100px] h-[400px]'
      >
        <label htmlFor="email">Email</label><br />
        <input
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          className='bg-[#3566bb50] w-[320px] h-[50px] rounded-[10px] mb-[20px] outline-none p-[10px] mt-[20px]'
          placeholder='Input Email/Phone number'
          autoComplete='on'
        />
        {formik.touched.email && formik.errors.email ? (
          <div className='text-red-600'>{formik.errors.email}</div>
        ) : null}
        <br />

        <label htmlFor="password">Password</label><br />
        <input
          type="password"
          id="password"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          className='bg-[#3566bb50] w-[320px] h-[50px] rounded-[10px] mt-[20px] outline-none p-[10px]'
          placeholder='Password'
        />
        {formik.touched.password && formik.errors.password ? (
          <div className='text-red-600'>{formik.errors.password}</div>
        ) : null}
        <br />

        <button 
          type='submit' 
          className='mt-[30px] text-[25px] bg-[#3566bb50] w-[320px] rounded-[20px] h-[50px] cursor-pointer mb-[20px]'
        >
          Login
        </button>

        <div className='gap-[40px] justify-between flex list-none'>
          <li><Link to='/sign'>Sign up</Link></li>
          <li><Link>Forgot password</Link></li>
        </div>
      </form>
    </div>
  )
}

export default Login