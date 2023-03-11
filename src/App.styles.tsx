import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --primary-color: #1f6feb;
    --secondary-color: #24292e;
    --text-color: #c9d1d9;
    --bg-color: #0d1117;
    --bg-card-color: rgba(255, 255, 255, 0.05);
  }

  body {
    background-color: var(--bg-color);
    color: var(--text-color);
    font-family: "Helvetica Neue", sans-serif;
    margin-bottom: 4rem;
  }
`;
