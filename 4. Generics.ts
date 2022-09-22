// & Generics
type Person<T> = {
    name: string;
    aditionalInfo: T;
};

// * Student Person

type StudentPerson = Person<{ schoolName: string }>;

const student: StudentPerson = {
    name: "Robert",
    aditionalInfo: {
        schoolName: "Unicamp",
    },
};

// * Developer Person

type CompanyName = "Facebook" | "Google" | "Uber";

type DeveloperPerson = Person<{ companyName: CompanyName }>;

const developer: DeveloperPerson = {
    name: "Robert",
    aditionalInfo: {
        companyName: "Uber",
    },
};
