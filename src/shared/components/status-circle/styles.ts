import { HtmlHTMLAttributes } from "react";
import styled from "styled-components";

type StatusCircleProps = HtmlHTMLAttributes<HTMLDivElement> & { status: "active" | "pending" | "inactive" };
const colorByStatus = {
    active: "var(--primary-green)",
    pending: "var(--primary-blue)",
    inactive: "var(--primary-red)",
};
export const StatusCircle = styled.div<StatusCircleProps>`
    width: 9px;
    height: 9px;
    background-color: ${(props) => colorByStatus[props.status]}
    border-radius: 50%;
`;
