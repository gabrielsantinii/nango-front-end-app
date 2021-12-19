import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import { AuthContextProvider } from "../auth/contexts/auth.context";
import { useAuthContext } from "../auth/hooks/contexts";
import { LoginPageLayout, SignupPageLayout } from "../auth/pages";
import { InstitutionsHomePageLayout } from "../institutions/pages";
import { useWindowSize } from "../shared/hooks";
import { MobileNotReadyLayout } from "../shared/pages/mobile-not-ready";
import { SplashScreen } from "../shared/pages/splash-screen";
import { AnimRoute } from "./anim-route";
import { ProtectAuthRoute } from "./protect-auth-route";
import { RedirectIfAuthed } from "./redirect-if-authed";

export function Routes(): JSX.Element {
    const windowSize = useWindowSize();
    const { isFetchingAuth } = useAuthContext();
    if (isFetchingAuth) {
        return <SplashScreen />;
    }
    if (windowSize.width && windowSize.width < 1150) {
        return <MobileNotReadyLayout />;
    }

    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route
                        path="/login"
                        caseSensitive={false}
                        element={
                            <RedirectIfAuthed>
                                <AnimRoute>
                                    <LoginPageLayout />
                                </AnimRoute>
                            </RedirectIfAuthed>
                        }
                    />
                    <Route
                        path="/sign-up"
                        caseSensitive={false}
                        element={
                            <RedirectIfAuthed>
                                <AnimRoute>
                                    <SignupPageLayout />
                                </AnimRoute>
                            </RedirectIfAuthed>
                        }
                    />
                    <Route
                        path="/"
                        caseSensitive={false}
                        element={
                            <ProtectAuthRoute>
                                <AnimRoute>
                                    <InstitutionsHomePageLayout />
                                </AnimRoute>
                            </ProtectAuthRoute>
                        }
                    />
                </Switch>
            </BrowserRouter>
        </>
    );
}
