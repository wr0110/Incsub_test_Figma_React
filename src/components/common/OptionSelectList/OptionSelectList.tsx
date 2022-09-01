import React from 'react';
import './_OptionSelectList.sass';

interface IOptionSelectList {
  value: string;
  isChecked: boolean;
  checkedOptionValue: Function;
}

const OptionSelectList: React.FC<IOptionSelectList> = ({
  value,
  isChecked,
  checkedOptionValue,
}) => {
  return (
    // <div className={'containerOptionSelectList'}>
    //   <input
    //     type="checkbox"
    //     name={value}
    //     id={value}
    //     checked={isChecked}
    //     onChange={() => checkedOptionValue(value)}
    //     className="containerOptionSelectList_input"
    //   />
    //   <label htmlFor={value} className="containerOptionSelectList_label">
    //     {value}
    //   </label>
    // </div>
    <label htmlFor={value} className={'containerOptionSelectList'}>
      {value}
      <input
        type="checkbox"
        name={value}
        id={value}
        checked={isChecked}
        onChange={() => checkedOptionValue(value)}
        className="containerOptionSelectList_input"
      />
      <span className="checkmark"></span>
    </label>
  );
};

export default OptionSelectList;
