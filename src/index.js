import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReactDom from "react-dom";
import About from './routes/about'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import {
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location}}
      />
    );
  }

  return ComponentWithRouterProp;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
          <Route exact path="/" element={<App/>}>
          </Route>
          <Route path="/about" component={withRouter(About)}>
          </Route>
        </Routes>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
