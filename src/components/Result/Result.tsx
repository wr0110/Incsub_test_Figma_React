import React from 'react';
import './_Result.sass';

interface IResult {
  data: {};
  closeResult: Function;
}

const Result: React.FC<IResult> = ({ data, closeResult }) => {
  return (
    <div className="resultContainer" onClick={() => closeResult()}>
      <div className="resultContainer_model">
        <div>{JSON.stringify(data, null, 2)}</div>
      </div>
    </div>
  );
};

export default Result;
