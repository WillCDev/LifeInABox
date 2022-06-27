import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.less'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import 'react-h5-audio-player/lib/styles.css'

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
)
