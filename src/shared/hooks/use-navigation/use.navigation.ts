import { useNavigate as useReactNavigate } from "react-router-dom";
import { UseNavigation } from "./interfaces";

export function useNavigation(): UseNavigation {
    const reactNavigate = useReactNavigate();

    function goToHomePage() {
        reactNavigate("/");
    }
    function goToLoginPage() {
        reactNavigate("/login");
    }
    function goToSignupPage() {
        reactNavigate("/sign-up");
    }

    return {
        goToHomePage,
        goToLoginPage,
        goToSignupPage,
    };
}
