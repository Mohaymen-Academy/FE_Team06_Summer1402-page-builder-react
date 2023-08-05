import {  Navigate} from 'react-router-dom';
import { useEffect, useState  } from "react";

const Protect  = ({children , ...restProps}) => {
    const [isLoge , setisLoge] = useState(false);
    const [token  , setToken] = useState();

    useEffect (()  =>{
        setToken(localStorage.getItem('login'));
        isAuth();
    } , []);
    const isAuth= async() => {
        if(token === null)
        {
            console.log("token null");
            return;
        }
        if (token === true) 
        {
            setisLoge(true);
        }
        
    }
        return (
            isLoge ? <> {children}</>: <Navigate to ="/login" />
        )
    }

export default Protect;





