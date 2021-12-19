import { useRef } from "react";
import { PageContainer } from "../../../../shared/components";
import { AddCircleButton } from "../../../../shared/components/buttons";
import {
    ClassesWidget,
    StudentsWidget,
    EmployeesWidget,
    CalendarWidget,
    MessagesWidget,
    ProgressWidget,
    AddEmployeeModal,
} from "../components";
import { AddEmployeeModalHandles } from "../components/modals/add-employee-modal/interfaces";

import { HomeDashboardContextProvider } from "../contexts";

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
import fakeLogo from '../assets/fake-logo.png'

export function InstitutionsHomePageLayout(): JSX.Element {
    const addEmployeeModalRef = useRef<AddEmployeeModalHandles>(null);
    return (
        <>
            <AddEmployeeModal ref={addEmployeeModalRef} />
            <PageContainer>
                <HomeDashboardContextProvider>
                    <Header>
                        <InstitutionLogo src={fakeLogo} alt="Logo" />
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
                                    <AddCircleButton onClick={() => addEmployeeModalRef.current?.openModal()} />
                                </SectionHeader>
                                <EmployeesContent>
                                    <EmployeesWidget />
                                </EmployeesContent>
                            </Section>
                        </Column>

                        <Column className="column">
                            <Section className="section">
                                <SectionHeader>
                                    <SectionTitle>Dezembro, 2021</SectionTitle>
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
                                </SectionHeader>
                                <MessagesContent>
                                    <MessagesWidget />
                                </MessagesContent>
                            </Section>
                        </Column>
                    </Main>
                </HomeDashboardContextProvider>
            </PageContainer>
        </>
    );
}
