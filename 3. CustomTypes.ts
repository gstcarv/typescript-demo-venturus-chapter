// & Tipos

// * TextID
type TextID = string;
const textId: TextID = "meu-id";

// * NumberID
type NumberID = number;
const numberId: NumberID = 1234;

// * Custom ID
type CustomID = TextID | NumberID;

let customId: CustomID = 10;
let _customId: CustomID = "MeuID";
customId = "123123";

// * Object
type UserInformation = {
    name: string;
    age: number;
};

const user1: UserInformation = {
    age: 10,
    name: "John",
};

const user2: UserInformation = {
    name: "Maria",
    age: 12,
};

// ! Union Type & String Literals
type CarType = "bmw" | "ford" | "porshe";

const carType: CarType = "porshe";
