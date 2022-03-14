import type { IBreadcrumbProps } from "@blueprintjs/core"

export const useBreadcrumbs = () => {
  const breadcrumbs: IBreadcrumbProps[] = [
    {
      text:  'Buyer Menu',
    },
    {
      text: 'System'
    },
    {
      text: 'Station'
    },
    {
      text: 'Sensors'
    }
  ];

  return breadcrumbs;
}