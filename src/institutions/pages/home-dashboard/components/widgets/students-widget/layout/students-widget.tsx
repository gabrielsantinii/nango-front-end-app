import faker from "faker";

import { SearchInput } from "../../../../../../../shared/components/inputs";
import { StudentCard } from "../components";

import { Header, Main, StudentsContainer, StudentsWidgetContainer } from "./styles";

export function StudentsWidget(): JSX.Element {
    return (
        <StudentsWidgetContainer>
            <Header>
                <SearchInput />
            </Header>
            <Main>
                <StudentsContainer>
                    {Array.from({ length: 8 }).map((_, i) => (
                        <StudentCard
                            email="gabrielgsantini@gmail.com.br"
                            photoUrl={faker.image.cats()}
                            name={faker.name.findName() + " " + faker.name.lastName()}
                            key={i}
                        />
                    ))}
                </StudentsContainer>
            </Main>
        </StudentsWidgetContainer>
    );
}
