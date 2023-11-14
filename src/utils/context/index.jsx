import { createContext, useEffect, useState } from "react";

export const UserDataContext = createContext();

export const UserProvider = ({ children }) => {
    const [ id , setId] = useState("")
    const [userData, setUserData] = useState({})

    const updateId = (newId) => {
        setId(newId)
    }
    
    useEffect(() => {
        if (id){
            async function fetchUser() {
                try {
                  const response = await fetch(`http://127.0.0.1:8000/v1/user/${id}/`)
                  const userData = await response.json()
                  setUserData(userData)
                } catch (err) {
                    setUserData([])
                }
            }
            fetchUser();
        }
    }, [id])

    return (
        <UserDataContext.Provider value={{ userData, updateId }}>
            { children }
        </UserDataContext.Provider>
    )
}
