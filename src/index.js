import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider as AlertProvider } from 'react-alert';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { GoogleOAuthProvider } from '@react-oauth/google';
import reportWebVitals from './reportWebVitals';
import { alertConfigs, AlertTemplate } from './components/third-parties';
import { WEB_CLIENT_ID } from './utils/constants';
import { store, persistor } from './store/store';
import App from './App';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './styles/index.css';
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<Provider store={store}>
		<PersistGate persistor={persistor}>
			<GoogleOAuthProvider clientId={WEB_CLIENT_ID}>
				<BrowserRouter>
					<AlertProvider template={AlertTemplate} {...alertConfigs}>
						<App />
					</AlertProvider>
				</BrowserRouter>
			</GoogleOAuthProvider>
		</PersistGate>
	</Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
