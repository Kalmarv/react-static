import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import './index.css'
import Another from './routes/Another'
import Home from './routes/Home'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          {/* Index is the default component to render */}
          <Route index element={<Home />} />
          <Route path="/another" element={<Another />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
)
