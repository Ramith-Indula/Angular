export interface Countries {
  name: string;
  topLevelDomain: string;
  alpha2Code: string;
  alpha3Code: string;
  callingCodes: number;
  capital: string;
  altSpellings: [
    string,
    string,
    string
    ];
  region: string;
  subregion: string;

  population: number;

  latlng: [
    number,
    number
    ];

  demonym: string;

  area: number;

  gini: number;

  timezones: [
    string,
    string
    ];

  borders: [
    string,
    string,
    string,
    string,
    string
    ];

  nativeName: string;

  numericCode: string;

  currencies: [
    {

      code: string,

      name: string,

      symbol: string
    }
    ];

  languages: [
    {

      iso639_1: string,

      iso639_2: string,

      name: string,

      nativeName: string
    }
    ];

  translations: {

    de: string,

    es: string,

    fr: string,

    ja: string,

    it: string,

    br: string,

    pt: string,

    nl: string,

    hr: string,

    fa: string
  };

  flag: string;

  regionalBlocs: [
    {

      acronym: string,

      name: string,

      otherAcronyms: Array<string>,

      otherNames: Array<string>
    }
    ];

  cioc: string;

}
