import { Bedrijf } from "../bedrijf/bedrijf";
import { Sollicitatie } from "./sollicitatie/sollicitatie";

export interface Vacature {
    id: number;
    titel: string;
    omschrijving: string;
    bedrijfId: number;
    kwalificaties: string;
    datumSluiting: string;
    bedrijf: Bedrijf;
    sollicitaties: Sollicitatie[];
}

