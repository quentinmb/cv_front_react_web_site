import React from 'react';
import {ThemeProvider} from 'styled-components';
import Routes from './Routes';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";


function App() {


    const theme = {
        colors: {
            primary: 'blue'
        },
        spaces: {
            s0: '8px'
        }
    }

    return (
        <Router>
            <Routes></Routes>
        </Router>
    );
}

export default App;
