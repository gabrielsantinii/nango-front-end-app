import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import { AuthContextProvider } from "../auth/contexts/auth.context";
import { LoginPageLayout, SignupPageLayout } from "../auth/pages";
import { InstitutionsHomePageLayout } from "../institutions/pages";

export function Routes(): JSX.Element {
    return (
        <AuthContextProvider>
            <BrowserRouter>
                <Switch>
                    <Route path="/login" caseSensitive={false} element={<LoginPageLayout />} />
                    <Route path="/sign-up" caseSensitive={false} element={<SignupPageLayout />} />
                    <Route path="/home" caseSensitive={false} element={<InstitutionsHomePageLayout />} />
                    <Route path="/" caseSensitive={false} element={<InstitutionsHomePageLayout />} />
                </Switch>
            </BrowserRouter>
        </AuthContextProvider>
    );
}
