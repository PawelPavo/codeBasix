import { createGlobalStyle } from 'styled-components';

// creates style for the whole website
export const GlobalStyles = createGlobalStyle`
    body, html {
        overflow-x: hidden;
        scroll-behavior: smooth;
        margin: 0;
        padding: 0;
    }
`;