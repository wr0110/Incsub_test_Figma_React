import React, { ReactNode } from 'react';
import './_Question.sass';

interface IQuestion {
  text: string;
  icon?: ReactNode;
}

const Question: React.FC<IQuestion> = ({ text, icon }) => {
  return (
    <div className="text">
      {text}
      <div className="icon">{icon}</div>
    </div>
  );
};

export default Question;
