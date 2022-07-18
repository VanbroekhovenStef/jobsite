import { User } from "src/app/user/user";

export interface Sollicitatie {
    id: number;
    userId: number;
    vacatureId: number;
    motivatie: string;
    user: User;
}