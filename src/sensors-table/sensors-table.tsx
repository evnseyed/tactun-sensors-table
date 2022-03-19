import React, { useEffect, useMemo, useState } from 'react';
import type { VFC } from 'react';

import './sensors-table.styles.scss';

import { Cell, Column, ColumnHeaderCell, SelectionModes, Table2 as Table } from '@blueprintjs/table';

import { Checkbox } from '../checkbox/checkbox';
import type { CheckboxProps } from '../checkbox/checkbox';
import { Switch } from '../ui/switch/switch';


import { BLueprintjsCollumnHeaderCellRenderer, Sensor } from '../types';
import { useSensors } from '../hooks/use-sensors';
import { getColumnHeaderCellRenderer } from './columns/get-column-cell-renderer';
import { printUnit } from '../tools';

interface SensorsMap {
  [key: Sensor['name']]: Sensor;
}
interface SelectedSensorsMap {
  [key: Sensor['name']]: boolean;
}
interface SensorsTableProps {}

export const SensorsTable: VFC<SensorsTableProps> = ({}) => {
  const [isSelectAll, setIsSelectAll] = useState(false);
  const [selectedMap, setSelectedMap] = useState<SelectedSensorsMap>({})
  const [sensors, setSensors] = useState<SensorsMap>({});
  const [sensorsTableOrder, setSensorsTableOrder] = useState<Sensor['name'][]>([]);

  const changeAllSelects = (isSelect: boolean) => {
    const newMap: SelectedSensorsMap = {};
    sensorsTableOrder.forEach(sensorName => newMap[sensorName] = isSelect);
    setIsSelectAll(isSelect);
    setSelectedMap({...selectedMap, ...newMap});
  }

  const changeSensorSelect = (sensorName: Sensor['name'], isSelect: boolean) => {
    if(isSelectAll) {
      setIsSelectAll(false)
    }
    setSelectedMap({ ...selectedMap, [sensorName]: isSelect })
  }

  const numberColumnData = useMemo(() => {
    return sensorsTableOrder.map(sensorName => {
      return sensors[sensorName].number;
    })
  }, [sensors, sensorsTableOrder]);

  const nameColumnData = useMemo(() => {
    return sensorsTableOrder.map(sensorName => {
      return sensors[sensorName].name;
    })
  }, [sensors, sensorsTableOrder]);

  const typeColumnData = useMemo(() => {
    return sensorsTableOrder.map(sensorName => {
      return sensors[sensorName].type;
    })
  }, [sensors, sensorsTableOrder]);

  const limitsColumnData = useMemo(() => {
    return sensorsTableOrder.map(sensorName => {
      return sensors[sensorName].limits;
    })
  }, [sensors, sensorsTableOrder]);

  const unitColumnData = useMemo(() => {
    return sensorsTableOrder.map(sensorName => {
      return sensors[sensorName].unit;
    })
  }, [sensors, sensorsTableOrder]);
  
  const manufacturerColumnData = useMemo(() => {
    return sensorsTableOrder.map(sensorName => {
      return sensors[sensorName].manufacturer;
    })
  }, [sensors, sensorsTableOrder]);

  const serialNumberColumnData = useMemo(() => {
    return sensorsTableOrder.map(sensorName => {
      return sensors[sensorName].serialNumber;
    })
  }, [sensors, sensorsTableOrder]);

  const isInverseReadingColumnData = useMemo(() => {
    return sensorsTableOrder.map(sensorName => {
      return sensors[sensorName].isInverseReading;
    })
  }, [sensors, sensorsTableOrder]);

  const isShowRawDataColumnData = useMemo(() => {
    return sensorsTableOrder.map(sensorName => {
      return sensors[sensorName].isShowRawData;
    })
  }, [sensors, sensorsTableOrder]);

  // Effects
  useEffect(() => {
    if(sensorsTableOrder.length) {
      let isSelectAllAssumption = true;

      for(let i = 0; i < sensorsTableOrder.length; i++) {
        const sensorName = sensorsTableOrder[i];
  
        if(!selectedMap[sensorName]) {
          isSelectAllAssumption = false;
          break;
        }
      }
  
      if(isSelectAllAssumption) {
        setIsSelectAll(true);
      }
    }
  }, [selectedMap, sensorsTableOrder])

  useSensors(_sensors => {
    const sensorsMap: SensorsMap = {};
    const selectedMap: SelectedSensorsMap = {}; 
    const sensorsOrder: Sensor['name'][] = [];

    _sensors.forEach(sensor => {
      if(sensorsMap[sensor.name]) {
        console.error('duplicate sensor name');
      } else {
        sensorsMap[sensor.name] = sensor;
        selectedMap[sensor.name] = false;
        sensorsOrder.push(sensor.name);
      }
    });

    setSensors(sensorsMap);
    setSelectedMap(selectedMap);
    setSensorsTableOrder(sensorsOrder);
  });

  const selectColumnHeaderCellRenderer: BLueprintjsCollumnHeaderCellRenderer = () => {
    const onChangeHandler: CheckboxProps['onChange'] = newValue => { changeAllSelects(newValue) };

    return (
      <ColumnHeaderCell style={{height: '48px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Checkbox value={isSelectAll} onChange={onChangeHandler} />
      </ColumnHeaderCell>
    );
  };

  // Select column rendereres
  const selectColumnCellRenderer = (rowIndex: number) => {
    const sensorName = sensorsTableOrder[rowIndex]; 

    const onChangeHandler: CheckboxProps['onChange'] = newValue => {
      changeSensorSelect(sensorName, newValue);
    };

    return (
      <Cell className="cell cell_centered">
        <Checkbox value={selectedMap[sensorName] || false} onChange={onChangeHandler} />
      </Cell>
    );
  };

  return (
    <Table
      numRows={3}
      enableRowHeader={false}
      defaultRowHeight={80}
      columnWidths={[
        // Select column
        24 * 3,
        // Number
        44 + 12,
        // Name
        81 + 95,
        // Sensor type
        75 + 180,
        // Limits
        36 + 162,
        // Unit
        26 + 124,
        // Manufacturer
        80 + 144,
        // Serial Number
        87 + 135,
        // Inverse reading
        90 + 124,
        // Show raw data
        90 + 70
      ]}
      enableColumnResizing={false}
      selectionModes={SelectionModes.ROWS_AND_CELLS}
      selectedRegionTransform={region => {
        if(region.cols) {
          return {
            ...region,
            cols: [0, 9]
          }
        } else {
          return region;
        }
      }}
    >
      <Column
        columnHeaderCellRenderer={selectColumnHeaderCellRenderer}
        cellRenderer={selectColumnCellRenderer}
      />

      <Column
        columnHeaderCellRenderer={getColumnHeaderCellRenderer('N')}
        cellRenderer={rowIndex => <Cell className="cell"> { numberColumnData[rowIndex] } </Cell>}
      />

      <Column
        columnHeaderCellRenderer={getColumnHeaderCellRenderer('Sensor name')}
        cellRenderer={rowIndex => <Cell className="cell"> { nameColumnData[rowIndex] } </Cell>}
      />

      <Column
        columnHeaderCellRenderer={getColumnHeaderCellRenderer('Sensor Type')}
        cellRenderer={rowIndex => <Cell className="cell"> { typeColumnData[rowIndex] } </Cell>}
      />

      <Column
        columnHeaderCellRenderer={getColumnHeaderCellRenderer('Limits')}
        cellRenderer={rowIndex => {
          const limits = limitsColumnData[rowIndex];
          let limitsLabel = '';

          if(limits) {
            const maxLimitPrefix = limits.max > 0 ? '+' : '';
            limitsLabel = `${limits.min} - ${maxLimitPrefix + limits.max}`;
          }
          return <Cell className="cell"> {limitsLabel} </Cell>}
        }
      />

      <Column
        columnHeaderCellRenderer={getColumnHeaderCellRenderer('Unit')}
        cellRenderer={rowIndex => <Cell className="cell"> {printUnit(unitColumnData[rowIndex])} </Cell>}
      />

      <Column
        columnHeaderCellRenderer={getColumnHeaderCellRenderer('Manufacturer')}
        cellRenderer={rowIndex => <Cell className="cell"> {manufacturerColumnData[rowIndex]} </Cell>}
      />

      <Column
        columnHeaderCellRenderer={getColumnHeaderCellRenderer('Seria number')}
        cellRenderer={rowIndex => <Cell className="cell"> {serialNumberColumnData[rowIndex]} </Cell>}
      />

      <Column
        columnHeaderCellRenderer={getColumnHeaderCellRenderer('Inverse reading')}
        cellRenderer={rowIndex => <Cell className="cell"> <Switch value={isInverseReadingColumnData[rowIndex]} onChange={(newValue) => { }}></Switch> </Cell>}
      />

      <Column
        columnHeaderCellRenderer={getColumnHeaderCellRenderer('Show raw data')}
        cellRenderer={rowIndex => <Cell className="cell"> <Switch value={isShowRawDataColumnData[rowIndex]} onChange={(newValue) => { }}></Switch> </Cell>}
      />
    </Table>
  );
};
