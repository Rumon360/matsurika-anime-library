import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        &::-webkit-scrollbar{
            width: 0.5rem;
        }
        &::-webkit-scrollbar-thumb {
            background-color: darkgrey;
        }
        &::-webkit-scrollbar-track {
        background-color: white;
        }
    }
    }
    body {
        font-family: 'Montserrat', sans-serif;
        background: #333;
    }
    h2 {
        font-size: 2.5rem;
        font-weight: lighter;
        color: black;
    }
    h3 {
        font-size: 1.2rem;
        color: black;
        padding: 1.5rem 2rem;
    }
    p {
        font-size: 1.2rem;
        line-height: 200%;
        color: #696969;
    }
    img {
        display: block;
    }
`;

export default GlobalStyles;
