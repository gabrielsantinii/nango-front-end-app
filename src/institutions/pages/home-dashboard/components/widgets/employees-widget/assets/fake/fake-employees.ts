import { EmployeePreview } from "../../interfaces";
import fakePhoto1 from "../images/fake-employee-photo.png";
import fakePhoto2 from "../images/fake-employee-2-photo.png";
export const fakeEmployees: EmployeePreview[] = [
    {
        firstName: "Mario",
        active: true,
        lastName: "Fernandes",
        photoUrl: fakePhoto1,
        id: "mario-fernandes",
        role: "Professor",
        profileType: "educator"
    },
    {
        firstName: "Katana",
        lastName: "Oshimira",
        active: true,
        photoUrl: fakePhoto2,
        id: "Katana-Oshimira",
        role: "Professor",
        profileType: "educator"
    },
];
