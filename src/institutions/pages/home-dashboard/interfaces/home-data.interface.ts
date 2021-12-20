import { EmployeePreview } from "../components/widgets/employees-widget/interfaces";

interface StudentPreview {
    id: string;
    firstName: string;
    lastName: string;
    photoUrl: string;
    displayName: string;
    email: string;
}

interface ClassPreview {
    id: string;
    name: string;
    trailsCount: number;
    studentsCount: number;
    educators: string[];
}

interface MessagePreview {
    id: string;
    messageContent: string;
    sentBy: {
        name: string;
        email: string;
        photoUrl: string;
    };
    sentAt: string;
}

interface ProgressPreview {
    period: { remainingDays: number };
    activities: { totalCount: number; finishedCount: number };
}

export interface HomeData {
    students: StudentPreview[];
    classes: ClassPreview[];
    employees: EmployeePreview[];
    messages: MessagePreview[];
    progress: ProgressPreview;
    institution: {
        name: string;
    };
}
