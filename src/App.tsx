import React from "react";
import { Routes } from "./routes";
import { Notification } from "./shared/components";
import { GlobalStyles } from "./shared/styles";

function App() {
    return (
        <>
            <Routes />
            <Notification />
            <GlobalStyles />
        </>
    );
}

export default App;
