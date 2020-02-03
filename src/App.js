import React, { useState, useEffect, shouldComponentUpdate } from 'react';

import './App.css';
import './Main.css';

import api from './services/api'

import DevItem from './components/DevItem/index'
import Search from './components/SearchDev/index'

function App() {

  const [devs, setDevs] = useState([])
  const [filter, setFilter] = useState([])



  useEffect(() => {
    async function loadDevs() {
      const res = await api.get('/orgs/grupotesseract/public_members')
      const resposta = res.data.map(obj => ({ ...obj, mostrar: false }))
      setDevs(resposta.data)
    }
    loadDevs()
  }, [])


  return (
    <div className="App">
      <aside>
        <Search callback={setFilter} />
      </aside>
      <main>
        <div className="List">
          <ul>
            {console.log(filter)}
            {devs.filter(dev => dev.login.toLowerCase().includes(filter.toString().toLowerCase())).map(dev => (
              <DevItem key={dev.id} dev={dev} detalhes={setDevs.mostrar} />
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
