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

    margin-left: ${measureEquivalence.width(10)};
`;

export const Main = styled.main`
    margin-top: ${measureEquivalence.height(32)};
    display: flex;

    > .column + .column {
        margin-left: 42px;
    }
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;

    > section + section {
        margin-top: auto;
    }
`;

export const Section = styled.section``;

export const SectionHeader = styled.div`
    display: flex;
    align-items: center;

    margin-top: ${measureEquivalence.height(9)};
    margin-bottom: ${measureEquivalence.height(9)};

    > .add-circle-button {
        margin-left: auto;
    }
`;

export const SectionTitle = styled.h3``;

export const ClassesContent = styled.section`
    min-height: ${measureEquivalence.height(408)};
    max-height: ${measureEquivalence.height(408)};

    min-width: ${measureEquivalence.width(578)};
    max-width: ${measureEquivalence.width(578)};

    /* border: 1px solid var(--terceary-gray); */

    > .class-card + .class-card {
        margin-top: 8px;
    }

    overflow: hidden;
`;

export const EmployeesContent = styled.section`
    min-height: ${measureEquivalence.height(286)};
    max-height: ${measureEquivalence.height(286)};

    min-width: ${measureEquivalence.width(578)};
    max-width: ${measureEquivalence.width(578)};

    border: 1px solid var(--primary-green);
`;

export const CalendarContent = styled.section`
    min-height: ${measureEquivalence.height(225)};
    max-height: ${measureEquivalence.height(225)};

    min-width: ${measureEquivalence.width(258)};
    max-width: ${measureEquivalence.width(258)};

    border: 1px solid var(--primary-red);
`;

export const StudentsContent = styled.section`
    min-height: ${measureEquivalence.height(464)};
    max-height: ${measureEquivalence.height(464)};

    min-width: ${measureEquivalence.width(258)};
    max-width: ${measureEquivalence.width(258)};

    border: 1px solid var(--terceary-gray);
`;

export const ProgressContent = styled.section`
    min-height: ${measureEquivalence.height(225)};
    max-height: ${measureEquivalence.height(225)};

    min-width: ${measureEquivalence.width(258)};
    max-width: ${measureEquivalence.width(258)};

    border: 1px solid var(--primary-red);
`;

export const MessagesContent = styled.section`
    min-height: ${measureEquivalence.height(464)};
    max-height: ${measureEquivalence.height(464)};

    min-width: ${measureEquivalence.width(258)};
    max-width: ${measureEquivalence.width(258)};

    border: 1px solid #4124;
`;

// export const ClassesSectionContent = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-self: stretch;
//     flex: 1;
// `;
