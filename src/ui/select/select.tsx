import React, { useRef } from 'react';

import { ItemRenderer, Select as BlueprintjsSelect } from '@blueprintjs/select'

import './select.styles.scss';
import { Button, ButtonProps } from '../button/button';
import { ArrowHollowDownIcon } from '../../icons';

export interface SelectProps<T> {
  items: T[],
  itemRenderer: ItemRenderer<T>,
  onItemSelect: (item: T) => void,
  buttonProps: ButtonProps
}

export const Select = <T,>({ items, itemRenderer, onItemSelect, buttonProps }: SelectProps<T>): JSX.Element => {
  const TypedSelect = useRef(BlueprintjsSelect.ofType<T>());

  return (
    <TypedSelect.current
      items={items}
      itemRenderer={itemRenderer}
      onItemSelect={onItemSelect}
      filterable={false}
    >
      <Button {...buttonProps} rightIcon={<ArrowHollowDownIcon/>} />
    </TypedSelect.current>
  );
};
