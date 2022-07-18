import { User } from "./user";

export interface UserResponse {
    token: string;
    id: number,
    email: string,
    wachtwoord?: string,
    role: string

    //Kijken hoe dit wel kan gebeuren door gebruik te maken van User --> user: User
}