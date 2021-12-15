import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import { LoginPageLayout, SignupPageLayout } from "../auth/pages";

export function Routes(): JSX.Element {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path="/login" caseSensitive={false} element={<LoginPageLayout />} />
                    <Route path="/sign-up" caseSensitive={false} element={<SignupPageLayout />} />
                </Switch>
            </BrowserRouter>
        </>
    );
}
