import { Avatar } from "../../../../../../../../shared/components";
import { StudentCardProps } from "../interfaces";
import { StudentCardContainer, StudentDetails, StudentName, StudentEmail } from "./styles";

export function StudentCard({ name, photoUrl, email }: StudentCardProps): JSX.Element {
    return (
        <StudentCardContainer className="student-card">
            <Avatar src={photoUrl} />
            <StudentDetails>
                <StudentName>{name}</StudentName>
                <StudentEmail>{email}</StudentEmail>
            </StudentDetails>
        </StudentCardContainer>
    );
}
