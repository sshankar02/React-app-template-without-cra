import React, { StrictMode } from "react";
import { createRoot } from 'react-dom/client';

import App from './src/App';
import './index.scss'

createRoot(
    document.querySelector('#root')
).render(
    <StrictMode>
        <App />
    </StrictMode>
)