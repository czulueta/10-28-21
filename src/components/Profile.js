import React, {useContext} from "react"
import TodoForm from "./TodoForm.js"
import { UserContext } from "../context/UserProvider.js"

const { user: {username} } = useContext(UserContext)

export default function Profile(){
    return(
        <div className="profile">
            <h1>Welcome {username}</h1>
            <h3>Add a Todo</h3>
            <TodoForm />
            <h3>Your Todos</h3>
        </div>
    )
}