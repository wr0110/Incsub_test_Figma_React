import React from 'react';
import './_RadioBtn.sass';

interface IRadioBtn {
  name: string;
  valueText: string;
  idHtmlFor: string;
  styles: string;
  stylesInput: string;
  stylesLabel: string;
  checked: boolean;
  handleClick: Function;
}

const RadioBtn: React.FC<IRadioBtn> = ({
  name,
  idHtmlFor,
  valueText,
  styles,
  stylesInput,
  stylesLabel,
  checked,
  handleClick,
}) => {
  return (
    <div className={styles}>
      <input
        id={idHtmlFor}
        type="radio"
        name={name}
        value={valueText}
        className={stylesInput}
        defaultChecked={checked}
        onClick={() => handleClick(idHtmlFor)}
      />
      <label htmlFor={idHtmlFor} className={stylesLabel}>
        {valueText}
      </label>
    </div>
  );
};

export default RadioBtn;
