import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {DivRoot, AppBarStyled} from "./Style";
import SideBar from "../SideBar/SideBar";
class Home extends React.Component {
    state = {
        sideBar: '',
    };

    componentDidMount() {
        let sideBar =  <SideBar />
        this.setState({sideBar});
    }

    render() {
        let content = this.props.content;
        let sideBar = this.state.sideBar;
        return (
            <DivRoot>
                <CssBaseline/>
                <AppBarStyled>
                    Bar de nav du haut
                </AppBarStyled>
                {sideBar}
                <main>
                    {content}
                </main>
            </DivRoot>
        );
    };
}

export default Home;