import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import { SignupPageLayout } from "../auth/pages";

export function Routes(): JSX.Element {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path="/sign-up" caseSensitive={false} element={<SignupPageLayout />} />
                </Switch>
            </BrowserRouter>
        </>
    );
}
