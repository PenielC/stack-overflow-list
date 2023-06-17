import { createRoot } from 'react-dom/client';
import thunk from "redux-thunk"
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import rootReducer from './store/reducers/rootReducer';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit';


const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(thunk)
});

//implementing createRoot for React 18+ 
const container = document.getElementById('root');
const root = container ? createRoot(container) : null;
root?.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
