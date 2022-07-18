export interface User {
    id: number;
    naam: string;
    voornaam: string;
    email: string;
    wachtwoord: string;
    adres?: string;
    telefoon?: string;
    cv?: string;
    linkedIn?: string;
    roleId: number;
}