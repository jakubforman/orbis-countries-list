export interface Country {
  area: number;
  cca2: string;
  name: CountryName
}

export interface CountryName {
  common: string;
  official: string;
}
