import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import Login from './app/auth/Login.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' component={<App/>}/>
      <Route path='/login' component={<Login/>}/>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)