import logo from "../logo.svg";
import {Counter} from "../features/counter/Counter";
import React from "react";
import '../App.css';
import styled from "styled-components";

export default function DefaultApp () {
    // Create a Title component that'll render an <h1> tag with some styles
    const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
    const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;
    return (
        <Wrapper className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Title>
                    Hello World!
                </Title>
                <Counter />
                <span>
            <span>Learn </span>
            <a
                className="App-link"
                href="https://reactjs.org/"
                target="_blank"
                rel="noopener noreferrer"
            >
              React
            </a>
            <span>, </span>
            <a
                className="App-link"
                href="https://redux.js.org/"
                target="_blank"
                rel="noopener noreferrer"
            >
              Redux
            </a>
            <span>, </span>
            <a
                className="App-link"
                href="https://redux-toolkit.js.org/"
                target="_blank"
                rel="noopener noreferrer"
            >
              Redux Toolkit
            </a>
            ,<span> and </span>
            <a
                className="App-link"
                href="https://react-redux.js.org/"
                target="_blank"
                rel="noopener noreferrer"
            >
              React Redux
            </a>
          </span>
            </header>
        </Wrapper>
    );
}