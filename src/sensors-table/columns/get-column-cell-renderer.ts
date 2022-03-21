import { BLueprintjsCollumnHeaderCellRenderer } from "../../types";
import { getColumnHeaderCell } from './get-column-header-cell';

export const getColumnHeaderCellRenderer = (text: string): BLueprintjsCollumnHeaderCellRenderer => {
  const columnHeaderCellRenderer: BLueprintjsCollumnHeaderCellRenderer = () => {
    return getColumnHeaderCell(text)
  };

  return columnHeaderCellRenderer;
}