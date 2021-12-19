import React from "react";
import { AuthContextProvider } from "./auth/contexts/auth.context";
import { Routes } from "./routes";
import { Notification } from "./shared/components";
import { GlobalStyles } from "./shared/styles";

function App() {
    return (
        <AuthContextProvider>
            <Routes />
            <Notification />
            <GlobalStyles />
        </AuthContextProvider>
    );
}

export default App;
