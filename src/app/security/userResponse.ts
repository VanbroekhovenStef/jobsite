import { User } from "./user";

export interface UserResponse {
    token: string;
    id: number,
    email: string,
    wachtwoord?: string,
    roleId: number,
    voornaam: string

    //Kijken hoe dit wel kan gebeuren door gebruik te maken van User --> user: User
}