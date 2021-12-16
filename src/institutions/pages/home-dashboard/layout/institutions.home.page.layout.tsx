import React from "react";
import faker from "faker";
import { PageContainer } from "../../../../shared/components";

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
import { ClassCard } from "../components";
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
                            <ClassCard
                                educators={["Gabriel Santini"]}
                                name="Turma de Informática"
                                studentsCount={10}
                                trailsCount={8}
                            />
                            <ClassCard
                                educators={["Gabriel Santini"]}
                                name="Turma de Informática"
                                studentsCount={10}
                                trailsCount={8}
                            />

                            <ClassCard
                                educators={["Gabriel Santini"]}
                                name="Turma de Informática"
                                studentsCount={10}
                                trailsCount={8}
                            />
                            <ClassCard
                                educators={["Gabriel Santini"]}
                                name="Turma de Informática"
                                studentsCount={10}
                                trailsCount={8}
                            />
                            <ClassCard
                                educators={["Gabriel Santini"]}
                                name="Turma de Informática"
                                studentsCount={10}
                                trailsCount={8}
                            />
                            <ClassCard
                                educators={["Gabriel Santini"]}
                                name="Turma de Informática"
                                studentsCount={10}
                                trailsCount={8}
                            />
                            <ClassCard
                                educators={["Gabriel Santini"]}
                                name="Turma de Informática"
                                studentsCount={10}
                                trailsCount={8}
                            />
                            <ClassCard
                                educators={["Gabriel Santini"]}
                                name="Turma de Informática"
                                studentsCount={10}
                                trailsCount={8}
                            />
                            <ClassCard
                                educators={["Gabriel Santini"]}
                                name="Turma de Informática"
                                studentsCount={10}
                                trailsCount={8}
                            />
                            <ClassCard
                                educators={["Gabriel Santini"]}
                                name="Turma de Informática"
                                studentsCount={10}
                                trailsCount={8}
                            />
                        </ClassesContent>
                    </Section>
                    <Section className="section">
                        <SectionHeader>
                            <SectionTitle>Colaboradores</SectionTitle>
                        </SectionHeader>
                        <EmployeesContent></EmployeesContent>
                    </Section>
                </Column>

                <Column className="column">
                    <Section className="section">
                        <SectionHeader>
                            <SectionTitle>Calendário</SectionTitle>
                        </SectionHeader>
                        <CalendarContent></CalendarContent>
                    </Section>
                    <Section className="section">
                        <SectionHeader>
                            <SectionTitle>Alunos</SectionTitle>
                        </SectionHeader>
                        <StudentsContent></StudentsContent>
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
                        </SectionHeader>
                        <MessagesContent></MessagesContent>
                    </Section>
                </Column>
            </Main>
        </PageContainer>
    );
}
