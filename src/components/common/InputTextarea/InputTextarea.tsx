import React from 'react';
import Line from '../Line/Line';
import './_InputTextarea.sass';

interface IInputTextarea {
  id: string;
  name: string;
  placeholder: string;
  value: string;
  setValue: Function;
}

const InputTextarea: React.FC<IInputTextarea> = ({
  id,
  name,
  placeholder,
  value,
  setValue,
}) => {
  return (
    <>
      <div className="containerInputTextarea">
        <textarea
          name={name}
          id={id}
          cols={30}
          rows={5}
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></textarea>
      </div>
      <Line />
    </>
  );
};

export default InputTextarea;
