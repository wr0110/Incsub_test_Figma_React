import React from 'react';
import './App.sass';
import Home from './components/Home/Home';

import { Routes, Route } from 'react-router-dom';
import CancellationSurvey from './components/CancellationSurvey/CancellationSurvey';

interface IApp {}

const App: React.FC<IApp> = () => {
  return (
    <div className="containerApp">
      <div className="wrapperApp">
        <Routes>
          <Route path="/test_survey" element={<Home />} />
          <Route path="/survey" element={<CancellationSurvey />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
