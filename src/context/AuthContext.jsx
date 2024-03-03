/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useCallback, useState } from "react";
import { baseURL, postRequest } from "../utils/service";

export const AuthContext = createContext();

export const AuthContextProvider =({children}) =>{

    const [user , setUser] = useState(null);
    const [registerError , setregisterError] = useState(null);
    const [isRegisterLoading , setisRegisterLoading] = useState(false);
    const [registerInfo , setRegisterInfo] = useState({
        name : '',
        email : '',
        password : "",
    });

    console.log(registerInfo);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const updateRegisterInfo = useCallback((info)=>{
            setRegisterInfo(info);
    })

     const registerUser = useCallback(async (e)=>{
        e.preventDefault();

        // setisRegisterLoading(true);
        setRegisterInfo(null);

        const response = await postRequest(`${baseURL}/users/register` , JSON.stringify(registerInfo));
        setisRegisterLoading(false);

        

        if(response?.error){
            return setregisterError(response);
        }
        localStorage.setItem("User" ,JSON.stringify(registerInfo));
        setUser(response);
    
    }, [registerInfo]);

    return ( 
        <AuthContext.Provider
        
        value={{
            user,
            registerInfo,
            updateRegisterInfo,
            registerUser,
            registerError,
            isRegisterLoading
        }}

        >
            {children}
        </AuthContext.Provider>
    )

} 