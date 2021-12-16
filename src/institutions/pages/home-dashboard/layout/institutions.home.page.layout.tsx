import React from "react";
import faker from "faker";
import { PageContainer } from "../../../../shared/components";

import {
    Header,
    InstitutionLogo,
    InstitutionName,
    Main,
    ClassesSection,
    CalendarSection,
    MessagesSection,
    ClassesSectionContent,
    ProgressSection,
    StudentsSection,
    SectionTitle,
    Column,
    SectionHeader,
    EmployeesSection,
} from "./styles";

export function InstitutionsHomePageLayout(): JSX.Element {
    return (
        <PageContainer>
            <Header>
                <InstitutionLogo src={faker.image.business()} />
                <InstitutionName>Colégio Verista</InstitutionName>
            </Header>
            <Main>
                <Column className="column">
                    <ClassesSection className="section">
                        <SectionHeader>
                            <SectionTitle>Classes</SectionTitle>
                        </SectionHeader>
                    </ClassesSection>
                    <EmployeesSection className="section">
                        <SectionHeader>
                            <SectionTitle>Colaboradores</SectionTitle>
                        </SectionHeader>
                    </EmployeesSection>
                </Column>

                <Column className="column">
                    <CalendarSection className="section">
                        <SectionHeader>
                            <SectionTitle>Classes</SectionTitle>
                        </SectionHeader>
                    </CalendarSection>
                    <StudentsSection className="section">
                        <SectionHeader>
                            <SectionTitle>Colaboradores</SectionTitle>
                        </SectionHeader>
                    </StudentsSection>
                </Column>
                <Column className="column">
                    <ProgressSection className="section">
                        <SectionHeader>
                            <SectionTitle>Classes</SectionTitle>
                        </SectionHeader>
                    </ProgressSection>
                    <MessagesSection className="section">
                        <SectionHeader>
                            <SectionTitle>Colaboradores</SectionTitle>
                        </SectionHeader>
                    </MessagesSection>
                </Column>
            </Main>
        </PageContainer>
    );
}
