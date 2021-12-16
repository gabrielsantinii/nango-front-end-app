import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

@font-face {
  font-family: "Metropolis";
  src: url("../assets/fonts/Metropolis-Thin.otf");
  font-weight: 200;
}
@font-face {
  font-family: "Metropolis";
  src: url("../assets/fonts/Metropolis-Light.otf");
  font-weight: 300;
}
@font-face {
  font-family: "Metropolis";
  src: url("../assets/fonts/Metropolis-Regular.otf");
  font-weight: 500;
}
@font-face {
  font-family: "Metropolis";
  src: url("../assets/fonts/Metropolis-Medium.otf");
  font-weight: 500;
}
@font-face {
  font-family: "Metropolis";
  src: url("../assets/fonts/Metropolis-SemiBold.otf");
  font-weight: 600;
}
@font-face {
  font-family: "Metropolis";
  src: url("../assets/fonts/Metropolis-Bold.otf");
  font-weight: 700;
}
@font-face {
  font-family: "Metropolis";
  src: url("../assets/fonts/Metropolis-ExtraBold.otf");
  font-weight: 800;
}
@font-face {
  font-family: "Metropolis";
  src: url("../assets/fonts/Metropolis-Black.otf");
  font-weight: 900;
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: 'Metropolis', sans-serif;
/*     
    ::-webkit-scrollbar {
      background-color: #fff;
      width: 16px;
    }

    ::-webkit-scrollbar-track {
    background-color: #fff;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #babac0;
      border-radius: 16px;
      border: 4px solid #fff;
    }

    ::-webkit-scrollbar-button {
      display: none;
    } */
    ::-webkit-scrollbar {
      display: none;
    }
}

body, #root {
  min-height: 100vh;
  min-width: 100vw;
  max-width: 100vw;
  background-color: rgba(255, 255, 255, 1);
  overflow-x: hidden;
}

:root {
    --primary-red: rgba(255, 75, 75, 1);
    --primary-green: rgba(0, 255, 10, 1);
    --primary-blue: rgba(36, 97, 255, 1);


    --primary-gray: rgba(91, 91, 91, 1);
    --secondary-gray: rgba(130, 130, 130, 1);
    --terceary-gray: rgba(160, 160, 160, 1);
    --quaternary-gray: rgba(189, 189, 189, 1);
    --quinquennial-gray: rgba(208, 208, 208, 1);

    --primary-white: rgba(255, 255, 255, 1);
    --secondary-white: rgba(247, 247, 247, 1);
    --terceary-white: rgba(242, 242, 242, 1);

    --default-font: 14.71px;

}

button {
    outline: 0;
    border: none;
    display: block;
}

input {
  outline: 0;
  border: none;
  padding-left: 23px;
  color: var(--primary-gray);
  font-size: var(--default-font);
  &::placeholder {
    color: var(--terceary-gray);
  }
}

a, label, p, button, input, span {
  font-weight: 500;
  font-size: var(--default-font);
  line-height: var(--default-font);
}

h1, h2, h3, h4 {
  margin: 0;
  padding: 0;
  font-weight: 700;
}

h1, h2 {
  color: var(--primary-gray);
}

h1 {
  
  font-size: 42px;
  line-height: 42px;

  @media (min-width: 1150px) {
    font-size: 58px;
    line-height: 58px;
  }
}

h2 {
  font-size: 36px;
  line-height: 36px;
}

h3 {
  color: var(--secondary-gray);
  font-size: 18px;
  line-height: 18px;
  font-weight: 700;
}

h4 {
  font-size: var(--default-font);
  line-height: var(--default-font);
  color: var(--secondary-gray);
}

p {
  font-size: var(--default-font);
  line-height: var(--default-font);
  color: var(--primary-gray);
}

span {
  color: var(--quaternary-gray);
}

a {
  text-decoration: none;
  cursor: pointer;
  transition: 180ms all;
  &:hover {
    transform: scale(1.06);
     filter: brightness(0.2);
  }
}
`;
