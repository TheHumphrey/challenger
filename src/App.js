import React, { useState, useEffect } from 'react';

import './App.css';
import './Main.css';

import api from './services/api'

import DevItem from './components/DevItem/index'
import Search from './components/SearchDev/index'

function App() {

  const [devs, setDevs] = useState([])

  useEffect(() => {
    async function loadDevs() {
      const res = await api.get('/orgs/grupotesseract/public_members')

      setDevs(res.data)
    }
    loadDevs()
  }, [])

  return (
    <div className="App">
      <aside>
        <Search />
      </aside>
      <main>
        <div className="List">
          <ul>
            {devs.map(dev => (
              <DevItem key={dev.id} dev={dev} />
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
