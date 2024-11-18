import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --bg-color: rgb(245, 245, 240);
    --text-color: #2c2c2c;
    --accent-color: #1a365d;
    --secondary-color: #4a5568;
    --header-bg: #EAEAE5;  /* Newspaper grey for header */
    /* Monospace Web Variables */
    --monospace-font: "SF Mono", Monaco, Menlo, Consolas, "Liberation Mono", "Courier New", monospace;
    --monospace-line-height: 1.5;
    --monospace-font-size: 16px;
    --monospace-box-padding: 1rem;
    --monospace-box-border: 1px solid #ccc;
    --monospace-box-border-radius: 4px;
    --monospace-box-background: #F5F5F0;  /* Newspaper grey */
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: var(--monospace-font);
    background-color: var(--bg-color);
    color: var(--text-color);
    line-height: var(--monospace-line-height);
    font-size: var(--monospace-font-size);
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

  /* Apply monospace box styling to all sections and content containers */
  section, 
  .content-container,
  .project-card,
  .cv-section,
  .about-section,
  .header-content {
    padding: var(--monospace-box-padding);
    border: var(--monospace-box-border);
    border-radius: var(--monospace-box-border-radius);
    background-color: var(--monospace-box-background);
    font-family: var(--monospace-font);
    margin: 1rem 0;
  }

  /* Style footer */
  footer {
    padding: var(--monospace-box-padding);
    border-top: var(--monospace-box-border);
    background-color: var(--header-bg);
    font-family: var(--monospace-font);
    width: 100%;
    position: fixed;
    bottom: 0;
    z-index: 1000;
  }

  /* Style all pre and code elements */
  pre, code {
    font-family: var(--monospace-font);
    background-color: var(--monospace-box-background);
    padding: 0.2em 0.4em;
    border-radius: 3px;
  }

  pre {
    padding: var(--monospace-box-padding);
    border: var(--monospace-box-border);
    border-radius: var(--monospace-box-border-radius);
    overflow-x: auto;
  }

  pre code {
    padding: 0;
    background-color: transparent;
  }

  /* Style links in footer */
  footer a {
    color: var(--text-color);
    text-decoration: none;
    padding: 0.5rem;
    border-radius: 3px;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: var(--monospace-box-background);
    }
  }
`;
