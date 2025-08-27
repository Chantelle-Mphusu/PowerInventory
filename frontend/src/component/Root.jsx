import { useEffect, useNavigate } from "react";
import { useAuth } from "../context/useAuth.jsx";


const Root = () => {
    const {user} = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
       if(user){
        if(user.role === 'admin'){
            navigate('/admin/dashboard');
        }else if (user.role === 'customer'){
            navigate('/staff/dashboard');
       }
}, [user,navigate]);
}