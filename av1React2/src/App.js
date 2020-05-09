import React, {Component} from 'react';
import Routes from "./routes.js";
import Header from "./components/header/Header"

class App extends Component {

    render() {


        return (
            <div>
                <Header />
                <Routes> </Routes>
            </div>
        );
    }
}

export default App;
