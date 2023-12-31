import React from 'react'

import Footer from 'Components/Footer/Footer'
import Masthead from 'Components/Masthead/Masthead'
import Ribbon from 'Components/Ribbon/Ribbon'

import './App.css'
import './assets/css/miz.css'

import Filters from './components/Filters'
import PackageList from './components/List'

function App() {
  return (
    <div className="miz-wrapper miz-fill--white miz-section--wrapper">
      <header className="miz-header">
        <div className="miz-fill--black">
          <div className="miz-container">
            <Ribbon />
          </div>
        </div>

        <div className="miz-fill--white">
          <div className="miz-container">
            <Masthead title="WordPress List" subtitle={ 'Approval Status for WordPress Plugins, Themes, and Packages' } />
          </div>
        </div>
      </header>

      <main className="miz-main-grid">
        <article className="miz-main-grid__article">
          <p>
            If the plugin, theme, or package that you wish to use is not found here, please submit
            an{' '}
            <a
              href="https://forms.clickup.com/2254131/f/24t9k-60867/THHO5LN9AEJJ6PZ5JF"
              target="_blank"
              rel="noreferrer"
            >
              Approval Request form
            </a>
            .
          </p>
          <PackageList />
        </article>
        <aside className="miz-main-grid__sidebar">
          <Filters />
        </aside>
      </main>

      <Footer theme="dark" />
    </div>
  )
}

export default App
