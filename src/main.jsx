import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import Snowfall from 'react-snowfall'
import App from './App.jsx'
import './index.css'
import { store } from './redux/store.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
			<Snowfall snowflakeCount={150} radius={[0.5, 10]} />
		</Provider>
	</React.StrictMode>
)
