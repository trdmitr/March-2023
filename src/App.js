import React from 'react';
import { Fragment } from 'react';
import './App.css';
import { HashRouter as Router, Routes, Route, useLocation, Link } from "react-router-dom";
import { HomePage } from './Components/HomePage';
import { CaverPage } from './Components/CaverPage';
import SinglPage from './Components/SinglPage';
import { Context } from './Components/context'
import useFetch from './Components/API/useFetch';
function NotFound() {
  let location = useLocation();
  return (
    <div>
      <h3>
        Страница <code>{location.pathname}</code> не найдена!
      </h3>
      <Link to = "/">На главную</Link>
    </div>
  );
}
function App() {
  
  const urlParse = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTr20C0VPXynKYsXxAjVWKdFX1icr_6NO-9sd9UmAbrtnYYNtD23fMB83dviQwF6F8-z4M225GEBaCX/pub?output=csv";
  const { data, loading, error } = useFetch(urlParse)
  if (error) {
    return alert(`Ошибка загрузки! ${error.message}`) 
  }
  if(loading) return null
  if (data.length === 0) {
    return null
  }
  console.log("data", data )
  return (
    <div className="App">
      <Fragment>
      <Context.Provider value={{ data, loading, error}}>
       <Router>
          <Routes>
         <Route exact path="/" element={<HomePage/>} />
         <Route path="/cavers" element={<CaverPage/>} />
         <Route path="/cavers/:id" element={<SinglPage />} /> 
         <Route path="*" element={<NotFound />} />
       </Routes>
       </Router>
       </Context.Provider>   
   </Fragment>
    </div>
  );
}

export default App;
