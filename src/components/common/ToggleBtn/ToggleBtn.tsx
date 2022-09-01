import React from 'react';
import './_ToggleBtn.sass';

interface IValueBtns {
  value: string;
  isActive: boolean;
}

interface IToggleBtn {
  valueBtns: IValueBtns[];
  toggleBtn: Function;
  setValue: Function;
}

const ToggleBtn: React.FC<IToggleBtn> = ({
  valueBtns,
  toggleBtn,
  setValue,
}) => {
  return (
    <div className="containerToggleBtn">
      {valueBtns.map((btn, index) => {
        return (
          <div
            key={index}
            className={`${btn.isActive ? 'btn active' : 'btn'}`}
            onClick={() => {
              toggleBtn(btn.value);
              btn.isActive = true;
            }}
          >
            {btn.value}
          </div>
        );
      })}
    </div>
  );
};

export default ToggleBtn;
