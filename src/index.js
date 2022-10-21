import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider as AlertProvider } from 'react-alert';
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import reportWebVitals from './reportWebVitals';
import { alertConfigs, AlertTemplate } from './components/third-parties';
import { WEB_CLIENT_ID } from './utils/constants';
import App from './App';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<GoogleOAuthProvider clientId={WEB_CLIENT_ID}>
		<BrowserRouter>
			<AlertProvider template={AlertTemplate} {...alertConfigs}>
				<App />
			</AlertProvider>
		</BrowserRouter>
	</GoogleOAuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
