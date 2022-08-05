import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`   

    html, body {
        height:100%;
        background:#fff;
        color:#000;
        overflow:hidden;
        position:relative;
        margin:0;
        padding:0;
        user-select:none;
    }
    * {
        box-sizing: border-box;
        font-family: var(--font-primary);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    h1 {
        font-size: 44px;
        font-weight: 300;
        line-height: 44px;
        letter-spacing: 3px;
    }
    h2 {
        font-weight: 400;
        font-size: 24px;
    }
    h3 {
        font-weight: 500;
        font-size: 20px;
        line-height: 20px;
    }
    h4 {
        font-size: 28px;
    }
    h5 {
        font-size: 40px;
        line-height: 52px;
        font-weight: 300;
    }
    h6 {
        font-size: 21px;
        font-weight: 200;
        margin: 0px;
        line-height: 25px;
    }
    p {
        font-size: 24px;
        line-height: 32px;
        font-weight: 300;
    }
    ul,
        
    ol {
        
    }
    li {
       
    }

    table {
    }
    input {
        min-height: auto;
        line-height: 1;
        border: none;
        outline: none;
        box-shadow: none;
        background-color: transparent;
    }
    input:focus,
    select:focus,
    textarea:focus,
    button:focus {
        outline: none;
        box-shadow: none;
    }
    #__next {
        height:100%;
        overflow:hidden;
        position:relative;
    }
`
export default GlobalStyles
