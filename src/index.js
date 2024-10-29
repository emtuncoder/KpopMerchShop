import React from 'react' // nạp thư viện react
import { createRoot } from 'react-dom/client'; // nạp thư viện react-dom
import {store} from './redux/store' 
import { Provider } from 'react-redux'  
import App from './App'
import './index.css'
// Render component App vào #root element
const root = createRoot(document.getElementById('root'))
root.render
(
    <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
    </React.StrictMode>
)
