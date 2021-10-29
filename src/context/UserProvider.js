import React, {useState} from "react"
import axios from "axios"

const UserContext = React.createContext()

export default function UserProvider(props){
    const initState = { 
        user: JSON.parse(localStorage.getItem("user")) || "", 
        token: localStorage.getItem("token") || "", 
        todos: []
    }

    const [userState, setUserState] = useState(initState)

    function signup(credentials){
        axios.post("/auth/signup", credentials)
         .then(res => {
            const { user, token } = res.data
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
             setUserState(prevUserState => ({
                 ...prevUserState,
                 user,
                 token
             }))
         })
         .catch(err => console.log(err.response.data.errMsg))
    }

    function login(credentials){
        axios.post("/auth/login", credentials)
         .then(res => {
             const { user, token } = res.data 
             localStorage.setItem("token", token)
             localStorage.setItem("user", JSON.stringify(user))
             setUserState(prevUserState => ({
                 ...prevUserState,
                 user,
                 token
             }))
         })
         .catch(err => console.log(err.response.data.errMsg))
    }

    function logout(){
        localStorage.removeItem("token")
        localStorage.remvoeItem("user")
        setUserState({
            user: "",
            token: "",
            todos: []
        })

    }

    return (
        <UserContext.Provider value={{
            ...userState,
            signup,
            login,
            logout
        }}>
            {props.children}
        </UserContext.Provider>
    )
}