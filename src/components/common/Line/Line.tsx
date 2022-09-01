import React from 'react';

import './_Line.sass';

interface ILine {}

const Line: React.FC<ILine> = () => {
  return <hr className="lineColorBorder" />;
};

export default Line;
