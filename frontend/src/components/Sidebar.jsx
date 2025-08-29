import React from 'react'
import { FaBox, FaHome, FaShoppingCart, FaTable, FaTruck, FaUsers, FaCog, FaSignOutAlt } from 'react-icons/fa'
import { NavLink } from 'react-router'

const Sidebar = () => {

    const menuItems = [
        {
            name: "Dashboard",
            icon:<FaHome/>,
            path:"/admin-dashboard",
            isParent:true
        },
        {
            name:"Categories",
            icon:<FaTable/>,
            path:"/admin-dashboard/categories",
            isParent:false
        },
        {
            name:"Products",
            icon:<FaBox/>,
            path:"/admin-dashboard/products",
            isParent:false
        },
        {
            name:"Suppliers",
            icon:<FaTruck/>,
            path:"/admin-dashboard/suppliers",
            isParent:false
        },
        {
            name:"Orders",
            icon:<FaShoppingCart/>,
            path:"/admin-dashboard/orders",
            isParent:false
        },
        {
            name:"Users",
            icon:<FaUsers/>,
            path:"/admin-dashboard/users",
            isParent:false
        },
        {
            name:"Profile",
            icon:<FaCog/>,
            path:"/admin-dashboard/profile",
            isParent:false
        },
        {
            name:"Logout",
            icon:<FaSignOutAlt/>,
            path:"/admin-dashboard/logout",
            isParent:false
        }
    ]
  return (
    <div className='flex flex-col h-screen  bg-black text-white w-16  md:w-64 fixed'>
         <div className='h-16 flex flex-items justify-center md:justify-start'>
           <span className='hidden md:block text-xl font-bold'>Smart Inventory</span>
           <span className='md:hidden text-xl font-bold'>SIMS</span>
        </div>
        <div>
            <ul className='space-y-2 p-2'>
                {menuItems.map((item)=>(
                    <li key={item.name}>
                        <NavLink 
                        end={item.isParent}
                        className={({isActive})=> isActive ? "flex items-center p-2 text-base font-normal text-white bg-gray-700 rounded-lg" : "flex items-center p-2 text-base font-normal text-white hover:bg-gray-700 rounded-lg"} 
                        to={item.path}>
                            <span className='text-xl'>{item.icon}</span>
                            <span className='ml-4 hidden md:block'>{item.name}</span>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    </div>
   
  )
}

export default Sidebar