export interface Signup {
    name: string;
    categories: string[];
    website: string;
    address: {
        state: string;
        city: string;
        postalCode: string;
        street: string;
        country: string;
    };
    rangeOfEmployees: string;
    rangeOfStudents: string;
    contactPerson: {
        name: string;
        email: string;
        phone: string;
    };
}
