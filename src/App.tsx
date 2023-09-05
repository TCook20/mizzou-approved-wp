import React from 'react';

// import Ribbon from 'Components/Ribbon/Ribbon';

import './App.css';
import './assets/css/miz.css'

// import Filters from './components/Filters';
import PackageList from './components/List';

function App() {
  return (
    <div className="miz-wrapper">
      <header className="miz-header">
        {/* <Ribbon /> */}
        <div className="miz-masthead">
          <div className="miz-container">
            <h1 className="miz-masthead__title">WordPress List</h1>
          </div>
        </div>
      </header>
      <main className="miz-main-grid">
        <article className="miz-main-grid__article">
          <p>If the plugin, theme, or package that you wish to use is not found here, please submit an <a href="https://forms.clickup.com/2254131/f/24t9k-60867/THHO5LN9AEJJ6PZ5JF" target="_blank" rel="noreferrer">Approval Request form</a>.</p>
          <PackageList />
        </article>
      </main>
    </div>
  );
}

export default App;