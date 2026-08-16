import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'
import { ToastContainer } from 'react-toastify'
import "./toast.css";

const theme = window.matchMedia("(prefers-color-scheme: dark)").matches
  ? "dark"
  : "light";

document.documentElement.dataset.theme = theme;

createRoot(document.getElementById('root')!).render(
<StrictMode>
  <ToastContainer
    position="top-right"
    autoClose={3000}
    hideProgressBar
    closeOnClick
    pauseOnHover
    theme={theme}
  />
  <Provider store={store}> 
    <HashRouter>
        <App />
    </HashRouter>
  </Provider>
  </StrictMode>
)
