import { User } from "src/app/admin/user/user";
import { Vacature } from "../vacature";

export interface Sollicitatie {
    id: number;
    userId: number;
    vacatureId: number;
    vacature: Vacature;
    motivatie: string;
    user: User;
}