import { User } from "../user/user";

export interface Bedrijf {
    id: number;
    naam: string;
    adres: string;
    omschrijving: string;
    foto: string;
    telefoon: string;
    userId: number;
    user: User
}