import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --bg-color: rgb(245, 245, 240);
    --text-color: #2c2c2c;
    --accent-color: #1a365d;
    --secondary-color: #4a5568;
    --header-bg: rgb(245, 245, 240);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Courier New', Courier, monospace;
    background-color: var(--bg-color);
    color: var(--text-color);
    line-height: 1.6;
    position: relative;
    min-height: 100vh;
    overflow-x: hidden;
  }

  #matrix-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
  }

  #root {
    position: relative;
    z-index: 1;
    min-height: 100vh;
  }

  .content-wrapper {
    position: relative;
    z-index: 2;
  }

  section {
    background-color: var(--header-bg);
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
    padding: 2rem;
    margin-bottom: 2rem;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Times New Roman', Times, serif;
    font-weight: 700;
    margin: 1.5rem 0;
    letter-spacing: -0.5px;
    color: var(--accent-color);
  }

  p {
    margin-bottom: 1rem;
    font-size: 1rem;
    font-family: 'Courier New', Courier, monospace;
  }

  a {
    color: var(--accent-color);
    text-decoration: none;
    border-bottom: 1px solid transparent;
    transition: border-bottom-color 0.3s ease;

    &:hover {
      border-bottom-color: var(--accent-color);
    }
  }

  .content-container {
    padding-bottom: 4rem;
  }
`;
