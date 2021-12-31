export interface PaisInterface {
    name:       string;
    capital:    string;
    alpha2Code: string;
    region:     Region;
    population: number;
    flags:      Flags;
}

export interface Flags {
    svg: string;
    png: string;
}

export enum Region {
    Africa = "Africa",
    Americas = "Americas",
    Antarctic = "Antarctic",
    AntarcticOcean = "Antarctic Ocean",
    Asia = "Asia",
    Europe = "Europe",
    Oceania = "Oceania",
    Polar = "Polar",
}
