import React from 'react'
import ReactDOM from 'react-dom/client'
import './view/app/index.css'
import App from './view/app/App'
import { RecoilRoot } from 'recoil'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>
)
