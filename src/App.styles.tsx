import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --primary-color: #1f6feb;
        --secondary-color: #24292e;
        --text-color: #c9d1d9;
        --bg-color: #0d1117;
    }

    body {
        background-color: var(--bg-color);
        color: var(--text-color);
        font-family: 'Helvetica Neue', sans-serif;
    }
`;
