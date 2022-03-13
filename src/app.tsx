import React from 'react';

import './app.styles.scss';

import { Header } from './header/header';
import { Sidebar } from './sidebar/sidebar'
import { Title } from './title/title'

import { useTitle } from './hooks/use-title'

export const App = () => {
  const title = useTitle();

  return (
    <div className="app">
      <Header />

      <div className="app__container">
        <Sidebar />
        <main className="app__main">
          
        </main>
      </div>
      {/* <main className="app__main">
        
        <Title text={title} className="app__title" />
      </main> */}
    </div>
  );
}
