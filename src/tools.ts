import { TemperatureUnit } from "./types";

export const printUnit = (unit: TemperatureUnit) => {
  switch(unit) {
    case TemperatureUnit.CELSIUS:
      return 'C';
  }
}