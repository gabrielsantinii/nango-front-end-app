import { ClassCard } from "../components";

import { ClassesWidgetContainer } from './styles'

export function ClassesWidget(): JSX.Element {
    return (
        <ClassesWidgetContainer>
            {Array.from({ length: 8 }).map((_, i) => (
                <ClassCard
                    educators={["Gabriel Santini"]}
                    name="Turma de Informática"
                    studentsCount={10}
                    trailsCount={8}
                    key={i}
                />
            ))}
        </ClassesWidgetContainer>
    );
}
