import { ClassCardProps } from "../interfaces";
import { CardContainer, Column } from "./styles";

export function ClassCard({ educators, name, studentsCount, trailsCount }: ClassCardProps): JSX.Element {
    return (
        <CardContainer className="class-card">
            <Column>{name}</Column>
            <Column>{studentsCount} Alunos</Column>
            <Column>{trailsCount} Trilhas</Column>
            <Column>{educators.length === 1 ? educators[0] : educators.join(", ")}</Column>
        </CardContainer>
    );
}
