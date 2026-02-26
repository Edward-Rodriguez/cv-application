import { useState } from 'react';
import './App.css';
import Input from './components/Input';
import Fieldset from './components/Fieldset';
import SubmitButton from './components/SubmitButton';
import { isValidInput } from './utils/validation';
import {
  INPUT_TYPES,
  CSS_CLASSES,
  BUTTON_LABELS,
  UI_STATES,
  AUTOCOMPLETE,
} from './consts/input';
import { SECTIONS, LABELS } from './consts/headings';

function App() {
  const [profile, setProfile] = useState({
    firstname: '',
    lastname: '',
    phonenumber: '',
    email: '',
    address: '',
    zipcode: '',
    citytown: '',
    linkedin: '',
    website: '',
  });

  // state variable to control which section is displayed, each index represents a section, index is updated on submit button
  const [activeIndex, setActiveIndex] = useState(0);
  const [errors, setErrors] = useState({});

  function handleOnchange(e) {
    const input = e.target;
    if (isValidInput(input)) {
      removeError(input);
      setProfile({ ...profile, [input.id]: input.value });
    } else {
      showError(input);
    }
  }

  function handleSubmit(e) {
    const newErrors = {};
    const input = e.target;
    if (isValidInput(input)) {
      removeError(input);
      setProfile({ ...profile, [input.id]: input.value });
    } else {
      showError(input);
    }
    setErrors(newErrors);
  }

  function showError(input) {
    input.classList.add(CSS_CLASSES.ERROR);
    const errorElement = input.parentNode.querySelector(
      CSS_CLASSES.ERROR_MESSAGE,
    );
    errorElement.style.visibility = UI_STATES.VISIBLE;
  }

  function removeError(input) {
    input.classList.remove(CSS_CLASSES.ERROR);
    const errorElement = input.parentNode.querySelector(
      CSS_CLASSES.ERROR_MESSAGE,
    );
    errorElement.style.visibility = UI_STATES.HIDDEN;
  }

  function handleSubmit() {
    let allFieldsValid = true;
    Object.keys(profile).forEach((key) => {
      const inputElem = document.querySelector(`#${key}`);
      if (!isValidInput(inputElem)) {
        showError(inputElem);
        allFieldsValid = false;
      }
    });
    allFieldsValid && setActiveIndex(activeIndex + 1);
  }

  function handlePrevious(e) {
    const sectionElem = document.querySelector('section');

    setActiveIndex(activeIndex - 1);
  }

  return (
    <>
      <section className='form-section'>
        <form>
          {/* <!------- Personal Information Section -------> */}
          <Fieldset
            title={SECTIONS.PERSONAL_DETAILS}
            id='personal-details'
            isActive={activeIndex === 0}>
            <Input
              label={LABELS.FIRST_NAME}
              type={INPUT_TYPES.TEXT}
              isRequired={true}
              onChange={handleOnchange}
            />
            <Input
              label={LABELS.LAST_NAME}
              type={INPUT_TYPES.TEXT}
              isRequired={true}
              onChange={handleOnchange}
            />
            <Input
              label={LABELS.PHONE_NUMBER}
              type={INPUT_TYPES.TEXT}
              onChange={handleOnchange}
            />
            <Input
              label={LABELS.EMAIL}
              type={INPUT_TYPES.EMAIL}
              isRequired={true}
              onChange={handleOnchange}
            />
            <Input
              label={LABELS.ADDRESS}
              type={INPUT_TYPES.TEXT}
              onChange={handleOnchange}
            />
            <Input
              label={LABELS.ZIP_CODE}
              type={INPUT_TYPES.TEXT}
              onChange={handleOnchange}
            />
            <Input
              label={LABELS.CITY_TOWN}
              type={INPUT_TYPES.TEXT}
              onChange={handleOnchange}
            />
            <Input
              label={LABELS.LINKEDIN}
              type={INPUT_TYPES.URL}
              onChange={handleOnchange}
            />
            <Input
              label={LABELS.WEBSITE}
              type={INPUT_TYPES.URL}
              onChange={handleOnchange}
            />
            <SubmitButton
              type={INPUT_TYPES.BUTTON}
              name={BUTTON_LABELS.NEXT_STEP}
              onSubmit={() => handleSubmit()}
            />
          </Fieldset>
          {/* <!-- Education --> */}
          <Fieldset
            title={SECTIONS.EDUCATION}
            id='education-details'
            isActive={activeIndex === 1}>
            <Input
              label={LABELS.FIRST_NAME}
              type={INPUT_TYPES.TEXT}
              isRequired={true}
              onChange={handleOnchange}
            />
            <Input
              label={LABELS.LAST_NAME}
              type={INPUT_TYPES.TEXT}
              isRequired={true}
              onChange={handleOnchange}
            />
            <Input
              label={LABELS.PHONE_NUMBER}
              type={INPUT_TYPES.TEXT}
              onChange={handleOnchange}
            />
            <SubmitButton
              type={INPUT_TYPES.BUTTON}
              name={BUTTON_LABELS.NEXT_STEP}
              onSubmit={() => handleSubmit()}
            />
            <SubmitButton
              type={INPUT_TYPES.BUTTON}
              name={BUTTON_LABELS.PREVIOUS}
              onSubmit={() => handlePrevious()}
            />
          </Fieldset>
        </form>
      </section>
    </>
  );
}

export default App;
