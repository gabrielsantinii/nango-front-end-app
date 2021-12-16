export interface MessageCardProps {
    messageContent: string;
    sentBy: {
        name: string;
        email: string;
        photoUrl: string;
    };
    sentAt: string;
}
