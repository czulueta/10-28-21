import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter as Router} from "react-router-dom"
import App from "./App.js"
import UserProvider from "./contex/UserProvider.js"

ReactDOM.render(
    <Router>
        <UserProvider>
            <App />
        </UserProvider>
    </Router>
    ,
    document.getElementById("root")
)