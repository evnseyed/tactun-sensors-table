import React from 'react';
import type { VFC } from 'react';

import './title.styles.scss';

interface TitleProps {
  text: string;
  className?: string;
}

export const Title: VFC<TitleProps> = ({ text, className }) => {
  return (
    <h1 className={className + " title"}>
      {text}
    </h1>
  );
};
