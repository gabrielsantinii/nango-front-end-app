import { useEffect, useRef } from "react";
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
    AddStudentModal,
} from "../components";
import { AddEmployeeModalHandles } from "../components/modals/add-employee-modal/interfaces";
import { AddStudentModalHandles } from "../components/modals/add-student-modal/interfaces";

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
import fakeLogo from "../assets/fake-logo.png";
import { notificationsService } from "../../../../shared/services/notifications";
import { useHomeDataContext } from "../hooks";

export function InstitutionsHomePageLayout(): JSX.Element {
    const addEmployeeModalRef = useRef<AddEmployeeModalHandles>(null);
    const addStudentModalRef = useRef<AddStudentModalHandles>(null);
    const { institution } = useHomeDataContext();
    console.log("Institution> ", institution)
    return (
        <>
            <AddEmployeeModal ref={addEmployeeModalRef} />
            <AddStudentModal ref={addStudentModalRef} />
            <PageContainer>
                <HomeDashboardContextProvider>
                    <Header>
                        <InstitutionLogo src={fakeLogo} alt="Logo" />
                        <InstitutionName>{institution?.name || "..."}</InstitutionName>
                    </Header>
                    <Main>
                        <Column className="column">
                            <Section className="section">
                                <SectionHeader>
                                    <SectionTitle>Classes</SectionTitle>
                                    <AddCircleButton onClick={notificationsService.resourceNotAvailable} />
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
                                    <AddCircleButton onClick={() => addStudentModalRef.current?.openModal()} />
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
                                    <AddCircleButton onClick={notificationsService.resourceNotAvailable} />
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
