import React from "react";
import { withTheme } from 'styled-components';

function TestStyledComponents (props) {
    return (
        <p> The primary color is : { props.theme.colors.primary} </p>
    );
}
export default withTheme(TestStyledComponents);
