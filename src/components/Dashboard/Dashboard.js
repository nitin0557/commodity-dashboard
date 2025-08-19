import React from "react";
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import SideNav from "./components/SideNav";
import Footer from "./components/Footer";
import { Link, useNavigate } from "react-router-dom";
import ThemeToggle from "../ThemeToggle";

const barData = [
  { name: "Jan", sales: 400 },
  { name: "Feb", sales: 300 },
  { name: "Mar", sales: 600 },
  { name: "Apr", sales: 200 },
  { name: "May", sales: 500 },
];

const pieData = [
  { name: "Electronics", value: 400 },
  { name: "Clothes", value: 300 },
  { name: "Groceries", value: 300 },
  { name: "Toys", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];


export default function Dashboard() {
  const navigate = useNavigate()

  const handleLogout = () => {
     navigate('/commodity-dashboard')
  };

  return (
    <>
      <div className="flex min-h-screen bg-gray-100 bg-customLight dark:bg-customDark">
        <SideNav />

        <div className="flex-1 p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Dashboard</h2>

            <div className="flex items-center space-x-4">
        
              <ThemeToggle/>
              <select className="border rounded-lg px-3 py-1">
                <option>Admin</option>
                <option>User</option>
                <option>Manager</option>
              </select>

              <button className="p-2 rounded-lg hover:bg-gray-200">
                <span className="material-icons">grid_view</span>
              </button>

              <button className="p-2 rounded-lg hover:bg-gray-200">
                <span className="material-icons">notifications</span>
              </button>

              <Link to="/commodity-dashboard">
              <button onClick={handleLogout} className="w-10 h-10 rounded-full overflow-hidden border">
                <img
                  src="https://i.pravatar.cc/100" 
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </button>
              </Link>
            </div>
          </div>

    
          <div className="grid grid-cols-4 gap-6 mb-6">
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-lg font-semibold">Total Sales</h3>
              <p className="text-2xl font-bold">$12,340</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-lg font-semibold">Orders</h3>
              <p className="text-2xl font-bold">1,230</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-lg font-semibold">Customers</h3>
              <p className="text-2xl font-bold">3,450</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-lg font-semibold">Revenue</h3>
              <p className="text-2xl font-bold">$45,200</p>
            </div>
          </div>

    
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-lg font-semibold mb-4">Monthly Sales</h3>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={barData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="sales" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-lg font-semibold mb-4">Category Distribution</h3>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

      
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold mb-4">Recent Orders</h3>
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-3 border">Order ID</th>
                  <th className="p-3 border">Customer</th>
                  <th className="p-3 border">Amount</th>
                  <th className="p-3 border">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center">
                  <td className="p-3 border">#1001</td>
                  <td className="p-3 border">John Doe</td>
                  <td className="p-3 border">$250</td>
                  <td className="p-3 border text-green-600">Completed</td>
                </tr>
                <tr className="text-center">
                  <td className="p-3 border">#1002</td>
                  <td className="p-3 border">Jane Smith</td>
                  <td className="p-3 border">$180</td>
                  <td className="p-3 border text-yellow-600">Pending</td>
                </tr>
                <tr className="text-center">
                  <td className="p-3 border">#1003</td>
                  <td className="p-3 border">Michael Brown</td>
                  <td className="p-3 border">$320</td>
                  <td className="p-3 border text-red-600">Cancelled</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
