import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from '../App';
import Travel from './Travel';

const Router = () => {
  return(
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<App/>}
          />
          <Route path="/travel" element={<Travel />} />
        </Routes>
      </BrowserRouter>
  )

};

export default Router;
