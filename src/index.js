import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/Layouts/Header';
import Content from './Content';
import Footer from './Components/Layouts/Footer';
import './index.css';
import { Provider } from "react-redux";
import { store } from './Redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <Header />
            <Content />
            <Footer />
        </Provider>
    </React.StrictMode>


);
