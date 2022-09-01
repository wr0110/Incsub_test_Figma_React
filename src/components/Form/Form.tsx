import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import InfoMessage from '../common/InfoMessage/InfoMessage';
import InputTextarea from '../common/InputTextarea/InputTextarea';
import Line from '../common/Line/Line';
import Question from '../common/Question/Question';
import RadioBtn from '../common/RadioBtn/RadioBtn';
import SelectList from '../common/SelectList/SelectList';
import ToggleBtn from '../common/ToggleBtn/ToggleBtn';
import Result from '../Result/Result';
import './_Form.sass';

interface IForm {}

interface IDataRadioBtn {
  valueText: string;
  idHtmlFor: string;
  checked: boolean;
}

interface IDataToggleValue {
  value: string;
  isActive: boolean;
}

const dataRadioBtn: IDataRadioBtn[] = [
  {
    valueText: 'I didn’t realize it was a recurring membership',
    idHtmlFor: 'realize',
    checked: false,
  },
  {
    valueText: 'Found a better solution',
    idHtmlFor: 'solution',
    checked: false,
  },
  {
    valueText: 'It’s too expensive',
    idHtmlFor: 'expensive',
    checked: false,
  },
  {
    valueText: 'Bugs, things not working properly',
    idHtmlFor: 'properly',
    checked: false,
  },
  {
    valueText: 'I just want to pay for a single plugin',
    idHtmlFor: 'plugin',
    checked: false,
  },
  {
    valueText: 'Not using WordPress anymore',
    idHtmlFor: 'anymore',
    checked: false,
  },
  {
    valueText: 'Other',
    idHtmlFor: 'Other',
    checked: false,
  },
];

const dataToggleValue = [
  { value: 'One Major Problem', isActive: true },
  { value: 'Various things', isActive: false },
];

const Form: React.FC<IForm> = () => {
  const [dataInput, setDataInput] = useState<IDataRadioBtn[]>(dataRadioBtn);
  const [textareaValue, setTextAreaValue] = useState<string>('');

  const [toggleValue, setToggleValue] =
    useState<IDataToggleValue[]>(dataToggleValue);
  const [problem, setProblemValue] = useState<string>('');

  const [selectListValues, setSelectListValues] = useState<string[]>([]);

  const toggleBtn = (text: string) => {
    setToggleValue(
      toggleValue.map((item) => {
        if (item.value === text) {
          item.isActive = true;
        } else {
          item.isActive = false;
        }
        return item;
      })
    );
  };

  const handleClick = (id: string) => {
    setDataInput(
      dataInput.map((item) => {
        if (item.idHtmlFor === id) {
          item.checked = true;
        } else {
          item.checked = false;
        }
        return item;
      })
    );
  };

  const textArea = (
    id: string,
    name: string,
    value: string,
    setValue: Function
  ) => (
    <InputTextarea
      id={id}
      name={name}
      placeholder={
        'What is the better solution? If you don’t mind sharing. Your feedback is much appreaciated!'
      }
      value={value}
      setValue={setValue}
    />
  );

  const [dataToBack, setDataToBack] = useState({
    answer: '',
    better_solution: '',
    bugs_things: {
      products: [''],
      what_was_it: '',
      problems_encounter: '',
    },
  });

  const handleSubmit = () => {
    const answerRadioBtn = dataInput.filter((input) => input.checked === true);
    const whatWasIt = toggleValue.filter((value) => value.isActive === true);
    let whatWasItValue = '';
    if (answerRadioBtn[0].valueText === 'Bugs, things not working properly')
      whatWasItValue = whatWasIt[0].value;
    const dataToBack = {
      answer: answerRadioBtn[0].valueText,
      better_solution: textareaValue,
      bugs_things: {
        products: selectListValues,
        what_was_it: whatWasItValue,
        problems_encounter: problem,
      },
    };

    setDataToBack(dataToBack);

    console.log('FORM: dataToBack => ', dataToBack);
    setSelectListValues([]);
  };

  const closeResult = () => {
    setDataToBack({ ...dataToBack, answer: '' });
  };

  return (
    <div className="formContainer">
      {dataToBack.answer.length > 0 && (
        <Result data={dataToBack} closeResult={closeResult} />
      )}

      <div className="wrapper">
        <div className="title">We’re sad to see you go... </div>
        <div className="subTitle">
          Can you tell us why you want to cancel your membership?
        </div>
        <div className="inputContainer">
          {dataInput.map((btn, index) => {
            return (
              <div key={index} className="inputContainer_wrapper">
                <RadioBtn
                  name={'survey'}
                  valueText={btn.valueText}
                  idHtmlFor={btn.idHtmlFor}
                  styles={`${
                    btn.checked
                      ? 'inputRadioBtn backgroundColor'
                      : 'inputRadioBtn'
                  }`}
                  stylesInput={'stylesInput'}
                  stylesLabel={'stylesLabel'}
                  checked={btn.checked}
                  handleClick={() => handleClick(btn.idHtmlFor)}
                />
                {btn.checked &&
                  btn.idHtmlFor === 'solution' &&
                  textArea(
                    btn.idHtmlFor,
                    btn.idHtmlFor,
                    textareaValue,
                    setTextAreaValue
                  )}
                {btn.checked && btn.idHtmlFor === 'properly' && (
                  <>
                    <Question
                      text={'Which product(s) did you have an issue with?'}
                      icon={
                        <Icon
                          icon="ooui:notice"
                          color={'grey'}
                          width={16}
                          height={16}
                        />
                      }
                    />
                    <SelectList
                      name={'products'}
                      // optionValues={optionValues}
                      placeholder={'Select Product(s)'}
                      values={selectListValues}
                      setValues={setSelectListValues}
                    />
                    <Line />
                    <Question text={'What was it?'} />
                    <ToggleBtn
                      valueBtns={toggleValue}
                      setValue={setToggleValue}
                      toggleBtn={toggleBtn}
                    />
                    <Question
                      text={'What problem(s) did you encounter?'}
                      icon={
                        <Icon
                          icon="ooui:notice"
                          color={'grey'}
                          width={16}
                          height={16}
                        />
                      }
                    />
                    <InputTextarea
                      id={'problem'}
                      name={'problem'}
                      placeholder={''}
                      value={problem}
                      setValue={setProblemValue}
                    />
                  </>
                )}
              </div>
            );
          })}
        </div>
        <InfoMessage
          message={
            "Are you absolutely sure you want to cancel? If you do you'll lose access to so many cool things. And you'll lose the chance to stay on this plan at the same cost ongoing (regardless of future price increases)."
          }
        />

        <div className="btns">
          <Link to={'/test_survey'}>
            <div className="btnIcon">
              <div className="btnIcon_icon">
                <Icon icon="akar-icons:arrow-left" />
              </div>
              <div className="btnIcon_text">Back</div>
            </div>
          </Link>
          <div className="btn" onClick={handleSubmit}>
            Cancel Membership
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
