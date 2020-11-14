import styled from 'styled-components';
import {AppBar} from "@material-ui/core";
export const DivRoot = styled.div`
  display: flex
`;

export const Toolbar = styled.div`
        display: flex;
        align-items: center;
        justify-content: flex-end;
`;

export const AppBarStyled = styled(AppBar)`
  position: fixed;
  background-color: #1976d2;
`;
