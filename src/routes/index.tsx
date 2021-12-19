import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import { AuthContextProvider } from "../auth/contexts/auth.context";
import { LoginPageLayout, SignupPageLayout } from "../auth/pages";
import { InstitutionsHomePageLayout } from "../institutions/pages";
import { useWindowSize } from "../shared/hooks";
import { MobileNotReadyLayout } from "../shared/pages/mobile-not-ready";
import { ProtectAuthRoute } from "./protect-auth-route";
import { RedirectIfAuthed } from "./redirect-if-authed";

export function Routes(): JSX.Element {
    const windowSize = useWindowSize();
    if (windowSize.width && windowSize.width < 1150) {
        return <MobileNotReadyLayout />;
    }

    return (
        <AuthContextProvider>
            <BrowserRouter>
                <Switch>
                    <Route
                        path="/login"
                        caseSensitive={false}
                        element={
                            <RedirectIfAuthed>
                                <LoginPageLayout />
                            </RedirectIfAuthed>
                        } 
                    />
                    <Route
                        path="/sign-up"
                        caseSensitive={false}
                        element={
                            <RedirectIfAuthed>
                                <SignupPageLayout />
                            </RedirectIfAuthed>
                        }
                    />
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
