import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header.jsx'
import Hero from './hero.jsx'
import Feature from './feature.jsx'
import MovieList from './movie_card.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <header>
      <Header />
    </header>
    <main>
      <Hero />
      <Feature />
      <MovieList />
    </main>

    <footer>

    </footer>
  </React.StrictMode>,
)
