import { HtmlHTMLAttributes } from "react";
import styled from "styled-components";
import { Pencil } from "@styled-icons/boxicons-regular/";
import { measureEquivalence } from "../../../../../../shared/styles";

type EmployeeCardContainerProps = HtmlHTMLAttributes<HTMLDivElement> & {
    backgroundImage: string;
};

export const EmployeeCardContainer = styled.div<EmployeeCardContainerProps>`
    min-width: ${measureEquivalence.width(176)};
    max-width: ${measureEquivalence.width(176)};
    min-height: 100%;
    align-self: stretch;

    /* background-image: url(${(props) => props.backgroundImage});
    /* background-image: linear-gradient(
        359.35deg,
        rgba(0, 0, 0, 1) 10%,
        rgba(0, 0, 0, 0) 50%,
        ${(props) => `url(${props.backgroundImage})`}
    ); */
    background-image: linear-gradient(180deg, rgba(0, 0, 0, 1) 2%, rgba(0, 0, 0, 0) 79%),
        ${(props) => `url(${props.backgroundImage})`};
    background-repeat: no-repeat;
    background-size: cover;

    padding-left: 14px;
    padding-right: 14px;
    padding-top: 22px;

    border-radius: 10px;
`;
export const Header = styled.div`
    display: flex;
    align-items: center;
`;
export const EditIcon = styled(Pencil)`
    margin-left: auto;

    height: 20px;
    width: 20px;
    fill: var(--primary-white);
`;
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 14px;
`;
export const FirstName = styled.h4`
    color: var(--primary-white);
`;
export const LastName = styled.h4`
    color: var(--primary-white);
`;
export const Role = styled.p`
    margin-top: 5px;
    color: var(--primary-white);
`;
