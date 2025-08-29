import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Login from './pages/Login'
import Root from './utils/Root'
import './App.css'
import ProtectedRoutes from './utils/ProtectedRoutes.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Categories from './components/Categories.jsx'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Root/>} />
        <Route path="/admin-dashboard" element={
          <ProtectedRoutes requiredRole={["admin"]}>
          <Dashboard/>
        </ProtectedRoutes>
      }>
        <Route
          index
          element={<h1 >Summary of Dashboard</h1>}
          />
        <Route path="/admin-dashboard/categories" 
        element={<Categories/>} 
        />
        <Route path="/admin-dashboard/products" 
        element={<h1>Products</h1>} 
        />
        <Route path="/admin-dashboard/suppliers" 
        element={<h1>Suppliers</h1>} 
        />
        <Route path="/admin-dashboard/orders" 
        element={<h1>Orders</h1>} 
        />
        <Route path="/admin-dashboard/users" 
        element={<h1>Users</h1>} 
        />
        <Route path="/admin-dashboard/profile" 
        element={<h1>Profile</h1>} 
        />
        <Route path="/admin-dashboard/logout" 
        element={<h1>Logout</h1>} 
        />
        </Route>
        <Route path="/login" element={<Login/>} />
        <Route path="/customer/dashboard" element={<h1>Customer</h1>} />
        <Route path="/unauthorized" element={<h1>Unauthorized</h1>} />
      </Routes>
      </Router>
  )
}

export default App
