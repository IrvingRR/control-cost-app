import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

/* Variables */
:root {

    /* Colors */
    --background-primary-color: rgb(244,249,253);
    --background-secondary-color: rgb(255,255,255);
    --gray-color: rgb(201,201,201);
    --border-color: rgb(201,201,201);
    --white-color: rgb(255,255,255);
    
    --primary-color: rgb(99,131,249);
    --primary-color-hover: rgb(70, 91, 170);
    --primary-color-disabled: rgba(99, 132, 249, 0.442);

    --success-color: rgb(117,213,143);
    --success-color-hover: rgb(81, 143, 97);
    --success-color-disabled: rgba(81, 143, 97, 0.442);

    --danger-color: rgb(255,137,143);
    --danger-color-hover: rgb(151, 79, 83);
    --danger-color-disabled: rgba(151, 79, 83, 0.442);


    /* Font */
    --font-color: rgb(41,45,49);
    --font: 'PT Sans', sans-serif;
    --fs-xs: 10px;
    --fs-s: 12px;
    --fs-m: 14px;
    --fs-l: 20px;
    --fs-xl: 30px;
    --fs-xxl: 40px;

    /* Other variables */
    --transition: 0.3s ease;
    --radius: 10px;
    --initial-border: 1px solid transparent;
    --shadow: 0px 0px 5px 0px rgba(201,201,201,0.75);

    /* Reset Styles */

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: var(--background-primary-color);
        color: var(--font-color);
        font-size: var(--fs-m);
        font-family: var(--font);
        min-height: 100vh;
    }

    button,
    input,
    select {
        border: var(--initial-border);
        outline: none;
        transition: var(--transition);
    }

    button {
        cursor: pointer;
    }

    ul, li {
        list-style: none;
    }

    /* Scrollbar */

    /* width */
    ::-webkit-scrollbar {
        width: 2px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
    background: #f1f1f1;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
    background: #888;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
    background: #555;
    }
}

`;