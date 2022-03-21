import { IColumnProps } from "@blueprintjs/table";


export enum TemperatureUnit {
  CELSIUS = 'CELSIUS'
}

export enum SensorType {
  LVDT_BASED_DIS =  'LVDT_BASED_DIS',
  TEMPERATURE_SENSOR = 'TEMPERATURE_SENSOR'
}

export interface Sensor {
  number: string;
  name: string;
  type: SensorType;
  limits: {
    max: number;
    min: number;
  },
  unit: TemperatureUnit;
  manufacturer: string;
  serialNumber: string;
  isInverseReading: boolean;
  isShowRawData: boolean;
}

// nameRenderer?: (name: string, index?: number) => React.ReactElement<Props>;
export type BlueprintjsColumnNameRenderer = IColumnProps['nameRenderer'];

// ICellRenderer = (rowIndex: number, columnIndex: number) => React.ReactElement<ICellProps>;
export type BlueprintjsColumnCellRenderer = IColumnProps['cellRenderer'];

export type BLueprintjsCollumnHeaderCellRenderer = IColumnProps['columnHeaderCellRenderer'];