import React from "react"

export default function AuthForm(){
    return(
        <form>
            <input 
                type="text"
                value={username}
                name="username"
                onChange={}
                placeholder="Username"
            />
            <input 
                type="text"
                value={password}
                name="password"
                onChange={}
                placeholder="Password"
            />
            <button>{ btnText }</button>
        </form>
    )
}