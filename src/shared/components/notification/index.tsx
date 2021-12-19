import { Toaster, ToastOptions } from "react-hot-toast";

const notificationPreferences: ToastOptions = {
    style: {
        borderRadius: "10px",
    },
    duration: 1000,
};

export function Notification(): JSX.Element {
    return <Toaster toastOptions={notificationPreferences} />;
}
