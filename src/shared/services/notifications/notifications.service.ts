import { toast } from "react-hot-toast";

interface PromiseProps {
    error?: string;
    success?: string;
    loading?: string;
}

const defaultPromiseProps = {
    error: "",
    success: "",
    loading: "",
};

class NotificationsService {
    error(message: string) {
        toast.error(message);
    }
    success(message: string) {
        toast.success(message);
    }
    promise(promise: any, messages: PromiseProps) {
        const formattedMessages = { ...defaultPromiseProps, ...messages };
        toast.promise(promise, formattedMessages);
    }
    resourceNotAvailable() {
        toast.error("Este recurso ainda não está disponível.");
    }
}
export const notificationsService = new NotificationsService();
