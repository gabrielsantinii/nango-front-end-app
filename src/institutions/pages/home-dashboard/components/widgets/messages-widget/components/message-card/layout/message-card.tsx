import { Avatar } from "../../../../../../../../../shared/components";
import { MessageCardProps } from "../interfaces";

import {
    MessageCardContainer,
    MessageHeader,
    SentByDetails,
    SentByName,
    SentByEmail,
    SentAt,
    MessageContent,
} from "./styles";

export function MessageCard({ sentBy, sentAt, messageContent }: MessageCardProps): JSX.Element {
    return (
        <MessageCardContainer className="message-card">
            <MessageHeader>
                <Avatar src={sentBy.photoUrl} />
                <SentByDetails>
                    <SentByName>{sentBy.name}</SentByName>
                    <SentByEmail>{sentBy.email}</SentByEmail>
                </SentByDetails>
                <SentAt>{sentAt}</SentAt>
            </MessageHeader>
            <MessageContent>{messageContent}</MessageContent>
        </MessageCardContainer>
    );
}
