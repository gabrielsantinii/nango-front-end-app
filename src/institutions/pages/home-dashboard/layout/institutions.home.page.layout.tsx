import React from "react";
import faker from "faker";
import { Calendar, PageContainer } from "../../../../shared/components";

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
import { ClassCard, EmployeeCard } from "../components";
import { AddCircleButton } from "../../../../shared/components/buttons";
import { StudentsWidget } from "../components/widgets";

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
                            {Array.from({ length: 8 }).map((_, i) => (
                                <ClassCard
                                    educators={["Gabriel Santini"]}
                                    name="Turma de Informática"
                                    studentsCount={10}
                                    trailsCount={8}
                                    key={i}
                                />
                            ))}
                        </ClassesContent>
                    </Section>
                    <Section className="section">
                        <SectionHeader>
                            <SectionTitle>Colaboradores</SectionTitle>
                            <AddCircleButton />
                        </SectionHeader>
                        <EmployeesContent>
                            {Array.from({ length: 8 }).map((_, i) => (
                                <EmployeeCard
                                    active={true}
                                    firstName={faker.name.firstName()}
                                    lastName={faker.name.lastName()}
                                    photoUrl={faker.image.cats()}
                                    role="Educador"
                                    key={i}
                                />
                            ))}
                        </EmployeesContent>
                    </Section>
                </Column>

                <Column className="column">
                    <Section className="section">
                        <SectionHeader>
                            <SectionTitle>Calendário</SectionTitle>
                        </SectionHeader>
                        <CalendarContent>
                            <Calendar />
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
                            <SectionTitle>Performance</SectionTitle>
                        </SectionHeader>
                        <ProgressContent></ProgressContent>
                    </Section>
                    <Section className="section">
                        <SectionHeader>
                            <SectionTitle>Mensagens</SectionTitle>
                            <AddCircleButton />
                        </SectionHeader>
                        <MessagesContent></MessagesContent>
                    </Section>
                </Column>
            </Main>
        </PageContainer>
    );
}
