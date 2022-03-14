import React from 'react';
import type { VFC } from 'react';
import {  Breadcrumbs as BlueprintjsBreadcrumbs, Breadcrumb } from '@blueprintjs/core';
import type { IBreadcrumbProps } from '@blueprintjs/core';

import './breadcrumbs.styles.scss';

interface BreadcrumbsProps {
  items: IBreadcrumbProps[],
  className?: string;
}

const renderBreadcrumb = ({ text, ...restProps}: IBreadcrumbProps) => {
  return (
    <Breadcrumb >
      {text}
    </Breadcrumb>
  )
}

export const Breadcrumbs: VFC<BreadcrumbsProps> = ({ items, className }) => {
  return (
    <BlueprintjsBreadcrumbs
      items={items}
      breadcrumbRenderer={renderBreadcrumb}
      className={className}
    />
  );
};
