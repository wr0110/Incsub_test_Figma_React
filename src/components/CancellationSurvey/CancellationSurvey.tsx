import React from 'react';
import { Link } from 'react-router-dom';
import Form from '../Form/Form';
import Line from '../common/Line/Line';
import './_CancellationSurvey.sass';

interface ICancellationSurvey {}

const CancellationSurvey: React.FC<ICancellationSurvey> = () => {
  return (
    <div className="containerCancellationSurvey">
      <div className="wrapper">
        <Link to={'/test_survey'} className="cancelLink">
          <div className="cancelLink_arrowContainer">
            <div className="arrow" />
          </div>
          <div className="cancelLink_text">Cancellation Survey</div>
        </Link>
        <Line />
        <Form />
      </div>
    </div>
  );
};

export default CancellationSurvey;
