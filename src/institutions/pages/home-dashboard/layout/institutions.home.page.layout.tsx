import faker from "faker";
import { PageContainer } from "../../../../shared/components";
import {
    ClassesWidget,
    StudentsWidget,
    EmployeesWidget,
    CalendarWidget,
    MessagesWidget,
    ProgressWidget,
} from "../components";

import {
    Header,
    InstitutionLogo,
    InstitutionName,
    Main,
    SectionTitle,
    Column,
    SectionHeader,
    Section,
    ClassesContent,
    EmployeesContent,
    CalendarContent,
    StudentsContent,
    ProgressContent,
    MessagesContent,
} from "./styles";

import { AddCircleButton } from "../../../../shared/components/buttons";

export function InstitutionsHomePageLayout(): JSX.Element {
    return (
        <PageContainer>
            <Header>
                <InstitutionLogo src={faker.image.business()} />
                <InstitutionName>Colégio Verista</InstitutionName>
            </Header>
            <Main>
                <Column className="column">
                    <Section className="section">
                        <SectionHeader>
                            <SectionTitle>Classes</SectionTitle>
                            <AddCircleButton />
                        </SectionHeader>
                        <ClassesContent>
                            <ClassesWidget />
                        </ClassesContent>
                    </Section>
                    <Section className="section">
                        <SectionHeader>
                            <SectionTitle>Colaboradores</SectionTitle>
                            <AddCircleButton />
                        </SectionHeader>
                        <EmployeesContent>
                            <EmployeesWidget />
                        </EmployeesContent>
                    </Section>
                </Column>

                <Column className="column">
                    <Section className="section">
                        <SectionHeader>
                            <SectionTitle>Calendário</SectionTitle>
                        </SectionHeader>
                        <CalendarContent>
                            <CalendarWidget />
                        </CalendarContent>
                    </Section>
                    <Section className="section">
                        <SectionHeader>
                            <SectionTitle>Alunos</SectionTitle>
                            <AddCircleButton />
                        </SectionHeader>
                        <StudentsContent>
                            <StudentsWidget />
                        </StudentsContent>
                    </Section>
                </Column>
                <Column className="column">
                    <Section className="section">
                        <SectionHeader>
                            <SectionTitle>Progresso do Semestre</SectionTitle>
                        </SectionHeader>
                        <ProgressContent>
                            <ProgressWidget />
                        </ProgressContent>
                    </Section>
                    <Section className="section">
                        <SectionHeader>
                            <SectionTitle>Mensagens</SectionTitle>
                            <AddCircleButton />
                        </SectionHeader>
                        <MessagesContent>
                            <MessagesWidget />
                        </MessagesContent>
                    </Section>
                </Column>
            </Main>
        </PageContainer>
    );
}
