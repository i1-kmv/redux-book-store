import React from "react"
import './app.css'
import {Route, Switch} from "react-router-dom";
import HomePage from "../pages/home-page";
import CartPage from "../pages/card-page";



const App = () => {
    return (
        <Switch>
            <Route path="/" component={HomePage} exact/>
            <Route path="/cart" component={CartPage} />
        </Switch>
    )
}

export default App