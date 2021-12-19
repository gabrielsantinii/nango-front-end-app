import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import { AuthContextProvider } from "../auth/contexts/auth.context";
import { LoginPageLayout, SignupPageLayout } from "../auth/pages";
import { InstitutionsHomePageLayout } from "../institutions/pages";
import { ProtectAuthRoute } from "./protect-auth-route";

export function Routes(): JSX.Element {
    return (
        <AuthContextProvider>
            <BrowserRouter>
                <Switch>
                    <Route path="/login" caseSensitive={false} element={<LoginPageLayout />} />
                    <Route path="/sign-up" caseSensitive={false} element={<SignupPageLayout />} />
                    <Route
                        path="/"
                        caseSensitive={false}
                        element={
                            <ProtectAuthRoute>
                                <InstitutionsHomePageLayout />
                            </ProtectAuthRoute>
                        }
                    />
                </Switch>
            </BrowserRouter>
        </AuthContextProvider>
    );
}
