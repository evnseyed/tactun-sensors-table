import React from 'react';

import './app.styles.scss';

import { Header } from './header/header';
import { Sidebar } from './sidebar/sidebar'
import { Title } from './title/title'

import { useTitle } from './hooks/use-title'
import { Breadcrumbs } from './breadcrumbs/breadcrumbs';
import { useBreadcrumbs } from './hooks/use-breadcrumbs';

export const App = () => {
  const title = useTitle();

  const breadcrumbsItems = useBreadcrumbs();

  return (
    <div className="app">
      <Header />

      <div className="app__container">
        <Sidebar />
        <main className="app__main">
          <Breadcrumbs
            items={breadcrumbsItems}
            className="app__breadcrumbs"
          />

          <Title
            text={title}
            className="app__title"
          />
        </main>
      </div>
    </div>
  );
}
