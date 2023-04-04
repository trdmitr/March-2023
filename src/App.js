import React from 'react';
import { Fragment, useState } from 'react';
import './App.css';
import { HashRouter as Router, Routes, Route, useLocation, Link } from "react-router-dom";
import { HomePage } from './Components/HomePage';
import { CaverPage21 } from './Components/CaverPage21';
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
  
  const urlParse = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSjRPXWSueBmJ9Qae2SinxlY58MWm--PgS_kEukUT3uEPvm9Rhrpuwd2NHRFJZgkdc6n8fJhYKuDT_P/pub?output=csv";
  const { data, loading, error } = useFetch(urlParse)
  if(loading) return null
  console.log("data", data )
  return (
    <div className="App">
      <Fragment>
      <Context.Provider value={{ data, loading, error}}>
       <Router>
          <Routes>
         <Route exact path="/" element={<HomePage/>} />
         <Route path="/cavers" element={<CaverPage21/>} />
         <Route path="/cavers/:id" element={<SinglPage songs = {data} />} /> 
         <Route path="*" element={<NotFound />} />
       </Routes>
       </Router>
       </Context.Provider>   
   </Fragment>
    </div>
  );
}

export default App;
