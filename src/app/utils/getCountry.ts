interface CountriesData {}
interface TimezonesData {}

const countries: any = require("../../../data/countries.json");
const timezones: any = require("../../../data/timezones.json");

const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

export default function getCountry(): string | null {
  if (timezone === "" || !timezone) {
    return null;
  }

  const _country = timezones[timezone].c[0];
  const country = countries[_country];
  return country;
}
