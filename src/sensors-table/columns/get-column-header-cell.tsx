// We cant use header cell as regular React component.
// Example below don't work correctly and I don't researched why
// Example:
// import React from 'react';
// import type { VFC } from 'react';
// import { ColumnHeaderCell as BlueprintjsColumnHeaderCell, IColumnHeaderCellProps} from '@blueprintjs/table'
// import '../sensors-table.styles.scss'
// import { ArrowDownIcon } from '../../icons';

// interface ColumnHeaderCellProps extends IColumnHeaderCellProps {
//   text: string;
// }

// export const ColumnHeaderCell: VFC<ColumnHeaderCellProps> = ({ text, ...props }) => {
//   return (
//     <BlueprintjsColumnHeaderCell {...props} style={{height: '48px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
//       N
//       <ArrowDownIcon className="column__header-sort-icon" />
//     </BlueprintjsColumnHeaderCell>
//   );

// Example below don't work correctly and I don't research why
// Instead React component we can use regular function that return header cell
// and it will work as we expect

import { ColumnHeaderCell as BlueprintjsColumnHeaderCell} from '@blueprintjs/table'

import { ArrowDownIcon } from '../../icons';

export const getColumnHeaderCell = (text: string) => {
  return (
    <BlueprintjsColumnHeaderCell style={{height: '48px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      {text}
      <ArrowDownIcon className="column__header-sort-icon" />
    </BlueprintjsColumnHeaderCell>
  );
}