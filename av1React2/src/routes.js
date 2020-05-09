import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./pages/Main";
import AddProduct from "./pages/AddProduct";

function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main}/>
                <Route path="/addproduct" component={AddProduct}/>
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;