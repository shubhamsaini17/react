import React from "react"
import UserContext from "./UserContext"


 const UserContextProvider = ({children})=>{  // jo bhe prop yaha aa raha ha {children} ma like div , usa asitis pass kar do
    const[user,setUser] = React.useState(null)
    return(
        <UserContext.Provider value ={{user,setUser}}>
            {children}      
            {/* yaha pa pass kar do */}
        </UserContext.Provider>
    )
 }

 export default UserContextProvider