import { useEffect } from "react";
import { Sensor, SensorType, TemperatureUnit } from "../types"

const sensors: Sensor[] = [
  {
    number: '001',
    name: 'Red',
    type: SensorType.LVDT_BASED_DIS,
    limits: {
      min: -40,
      max: 85
    },
    unit: TemperatureUnit.CELSIUS,
    manufacturer: 'Manufacturer',
    serialNumber: 'Serial Number',
    isInverseReading: true,
    isShowRawData: true,
  },
  {
    number: '002',
    name: 'Blue',
    type: SensorType.LVDT_BASED_DIS,
    limits: {
      min: -40,
      max: 85
    },
    unit: TemperatureUnit.CELSIUS,
    manufacturer: 'Manufacturer',
    serialNumber: 'Serial Number',
    isInverseReading: true,
    isShowRawData: true,
  },
  {
    number: '003',
    name: 'Green',
    type: SensorType.TEMPERATURE_SENSOR,
    limits: {
      min: -60,
      max: 100
    },
    unit: TemperatureUnit.CELSIUS,
    manufacturer: 'Manufacturer',
    serialNumber: 'Serial Number',
    isInverseReading: true,
    isShowRawData: true,
  },
];

export const useSensors = async (callback: (sensors: Sensor[]) => void) => {
  useEffect(() => {
    callback(sensors);
  }, [])
}