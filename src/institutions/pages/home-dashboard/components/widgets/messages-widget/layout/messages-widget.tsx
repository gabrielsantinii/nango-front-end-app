import faker from "faker";
import { MessageCard } from "../components";

import { MessagesWidgetContainer } from "./styles";

export function MessagesWidget(): JSX.Element {
    return (
        <MessagesWidgetContainer>
            {Array.from({ length: 8 }).map((_, i) => (
                <MessageCard
                    sentAt="2:30pm"
                    sentBy={{
                        email: "gabrielgsantini@gmail.com.br",
                        name: faker.name.findName() + " " + faker.name.lastName(),
                        photoUrl: faker.image.cats(),
                    }}
                    messageContent="Olá, tudo bem? preciso verificar alguns pontos com você."
                    key={i}
                />
            ))}
        </MessagesWidgetContainer>
    );
}
