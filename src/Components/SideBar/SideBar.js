import React from "react";
import { isMobile } from "react-device-detect";
import { DrawerStyled, IconButtonStyled, ListStyled } from "./Style";

import {withRouter} from "react-router";

import {
    ListItem,
    ListItemIcon,
    ListItemText,
} from "@material-ui/core";
import {
    Home as HomeIcon,
} from '@material-ui/icons';

class SideBar extends React.Component {

    home = () => {
        this.props.history.push('/');
    };

    render() {
        let sideBarButton = null;

        return (
            <DrawerStyled
                anchor={isMobile ? 'bottom': 'left'}
                variant={'permanent'}
                open={true}
            >
                <ListStyled>
                    <ListItem button key={'home'} onClick={this.home}>
                        <ListItemIcon children={<HomeIcon/>} />
                        <ListItemText primary={'home'}/>
                    </ListItem>
                    <ListItem button key={'Not home'} onClick={this.home}>
                        <ListItemIcon children={<HomeIcon/>} />
                        <ListItemText primary={'not Home'}/>
                    </ListItem>
                </ListStyled>
            </DrawerStyled>
        );
    }
}

SideBar = withRouter(SideBar);

export default SideBar;