import styled from "styled-components";
import { measureEquivalence } from "../../../../shared/styles";

export const Header = styled.header`
    display: flex;
    align-items: center;
`;

export const InstitutionLogo = styled.img`
    max-width: ${measureEquivalence.width(50)};
    max-height: ${measureEquivalence.height(35)};
`;

export const InstitutionName = styled.h1`
    color: var(--secondary-gray);
    font-size: 34px;

    margin-left: 10px;
`;

export const Main = styled.main`
    margin-top: ${measureEquivalence.height(64)};
    display: flex;

    > .column + .column {
        margin-left: 36px;
    }
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;

    > section + section {
        margin-top: auto;
    }
`;

export const ClassesSection = styled.section`
    min-height: ${measureEquivalence.height(435)};
    max-height: ${measureEquivalence.height(435)};

    min-width: ${measureEquivalence.width(578)};
    max-width: ${measureEquivalence.width(578)};

    border: 1px solid var(--terceary-gray);
`;

export const EmployeesSection = styled.section`
    min-height: ${measureEquivalence.height(307)};
    max-height: ${measureEquivalence.height(307)};

    min-width: ${measureEquivalence.width(578)};
    max-width: ${measureEquivalence.width(578)};

    border: 1px solid var(--primary-green);
`;

export const CalendarSection = styled.section`
    min-height: ${measureEquivalence.height(262)};
    max-height: ${measureEquivalence.height(262)};

    min-width: ${measureEquivalence.width(258)};
    max-width: ${measureEquivalence.width(258)};

    border: 1px solid var(--primary-red);
`;

export const StudentsSection = styled.section`
    min-height: ${measureEquivalence.height(474)};
    max-height: ${measureEquivalence.height(474)};

    min-width: ${measureEquivalence.width(258)};
    max-width: ${measureEquivalence.width(258)};

    border: 1px solid var(--terceary-gray);
`;

export const ProgressSection = styled.section`
    min-height: ${measureEquivalence.height(262)};
    max-height: ${measureEquivalence.height(262)};

    min-width: ${measureEquivalence.width(258)};
    max-width: ${measureEquivalence.width(258)};

    border: 1px solid var(--primary-red);
`;

export const MessagesSection = styled.section`
    min-height: ${measureEquivalence.height(474)};
    max-height: ${measureEquivalence.height(474)};

    min-width: ${measureEquivalence.width(258)};
    max-width: ${measureEquivalence.width(258)};

    border: 1px solid #4124;
`;

export const SectionTitle = styled.h3``;

export const SectionHeader = styled.div`
    margin-bottom: ${measureEquivalence.height(32)};
`;

export const ClassesSectionContent = styled.div`
    display: flex;
    flex-direction: column;
    align-self: stretch;
    flex: 1;
`;
