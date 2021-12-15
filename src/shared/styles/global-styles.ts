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
  font-weight: 400;
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

    --primary-gray: rgba(91, 91, 91, 1);
    --secondary-gray: rgba(130, 130, 130, 1);
    --terceary-gray: rgba(160, 160, 160, 1);
    --quaternary-gray: rgba(189, 189, 189, 1);

    --primary-white: rgba(255, 255, 255, 1);
    --secondary-white: rgba(247, 247, 247, 1);

}

button {
    outline: 0;
    border: none;
}

h1 {
  font-size: 36px;
  line-height: 36px;
  font-weight: 700;
  color: var(--primary-gray);
}

p {
  font-size: 14px;
  line-height: 14px;
  font-weight: 400;
  color: var(--primary-gray);
}
`;
