import { User } from "../admin/user/user";
import { Vacature } from "../vacature/vacature";

export interface Bedrijf {
    id: number;
    naam: string;
    adres: string;
    omschrijving: string;
    foto: string;
    telefoon: string;
    userId: number;
    user: User;
    vacatures: Vacature[];
}