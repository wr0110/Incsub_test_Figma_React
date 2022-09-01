import React, { useState } from 'react';
import OptionSelectList from '../OptionSelectList/OptionSelectList';
import './_SelectList.sass';

export interface IDataOptionValues {
  value: string;
  isChecked: boolean;
}

interface ISelectList {
  name: string;
  values: string[];
  placeholder: string;
  setValues: Function;
}

const dataOptionValues = [
  {
    value: 'product #1',
    isChecked: false,
  },
  {
    value: 'product #2',
    isChecked: false,
  },
  {
    value: 'product #3',
    isChecked: false,
  },
];

const SelectList: React.FC<ISelectList> = ({
  name,
  placeholder,
  values,
  setValues,
}) => {
  const [isOptionOpen, setIsOptionOpen] = useState<boolean>(false);

  const openOptions = () => {
    setIsOptionOpen(!isOptionOpen);
  };

  const [optionValues, setOptionValues] =
    useState<IDataOptionValues[]>(dataOptionValues);

  const checkedOptionValue = (value: string) => {
    setOptionValues(
      optionValues.map((item) => {
        if (item.value === value) {
          item.isChecked = !item.isChecked;
          if (item.isChecked) {
            setValues([...values, value]);
          } else {
            setValues(values.filter((val) => val !== value));
          }
        }
        return item;
      })
    );
  };

  return (
    <div className="containerSelectList">
      <input
        name={name}
        id={name}
        placeholder={`${
          values.length === 0
            ? placeholder
            : values.length > 1
            ? values.length + ' products selected'
            : '1 product selected'
        }`}
        className={`${
          isOptionOpen
            ? 'containerSelectList_input containerSelectList_inputActive'
            : 'containerSelectList_input'
        }`}
        onClick={openOptions}
      />
      {isOptionOpen && <div className="optionSelected">{placeholder}</div>}
      {isOptionOpen && (
        <div className="containerSelectList_options">
          {optionValues.map((option, index) => {
            return (
              <OptionSelectList
                key={index}
                value={option.value}
                isChecked={option.isChecked}
                checkedOptionValue={() => checkedOptionValue(option.value)}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SelectList;
