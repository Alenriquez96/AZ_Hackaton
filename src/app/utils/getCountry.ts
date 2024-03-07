interface CountriesData {
  [code: string]: string;
}

interface TimeZoneInfo {
  a?: string;
  u?: number;
  c: string[];
  r?: number;
}

interface TimeZones {
  [zone: string]: TimeZoneInfo;
}

const countries: CountriesData = require("../../../data/countries.json");
const timezones: TimeZones = require("../../../data/timezones.json");

const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

export function getCountry(): string {
  const _country = timezones[timezone].c[0];
  const country = countries[_country];
  return country;
}

export function getCountryCode(): string {
  const _country = timezones[timezone].c[0];
  return _country;
}
