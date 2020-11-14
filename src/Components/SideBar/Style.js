import styled from 'styled-components';
import { isMobile } from "react-device-detect";


import {
    Drawer,
    List,
    IconButton,
} from "@material-ui/core";

export const DrawerStyled = styled(Drawer)`
  background-color: beige;
`;

export const IconButtonStyled = styled(IconButton)``;

export const ListStyled = styled(List)`
  display: ${isMobile ? 'flex': 'block'};
`;


