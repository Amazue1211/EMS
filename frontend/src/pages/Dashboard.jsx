import { Home, Users, Settings } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-purple-600 to-purple-400 text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-black/20 backdrop-blur-md p-6 flex flex-col gap-6">
        <h1 className="text-2xl font-bold tracking-tight">EMS</h1>

        <nav className="flex flex-col gap-4">
          <a className="flex items-center cursor-pointer gap-3 hover:text-pink-300">
            <Home size={20} /> Dashboard
          </a>
          <a className="flex items-center cursor-pointer gap-3 hover:text-pink-300">
            <Users size={20} /> Tenants
          </a>
          <a className="flex items-center cursor-pointer gap-3 hover:text-pink-300">
            <Settings size={20} /> Settings
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h2 className="text-3xl font-semibold mb-6">Dashboard Overview</h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/10 p-6 rounded-2xl shadow-lg">
            <h3 className="text-lg">Total Tenants</h3>
            <p className="text-2xl font-bold mt-2">120</p>
          </div>

          <div className="bg-white/10 p-6 rounded-2xl shadow-lg">
            <h3 className="text-lg">Available Rooms</h3>
            <p className="text-2xl font-bold mt-2">15</p>
          </div>

          <div className="bg-white/10 p-6 rounded-2xl shadow-lg">
            <h3 className="text-lg">Revenue</h3>
            <p className="text-2xl font-bold mt-2">₦2.4M</p>
          </div>
        </div>
      </main>
    </div>
  );
}
