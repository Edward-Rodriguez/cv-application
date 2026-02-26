import { useState } from 'react';
import './App.css';
import Input from './components/Input';
import Fieldset from './components/Fieldset';
import SubmitButton from './components/SubmitButton';
import { isValidInput } from './utils/validation';
import {
  TEXT,
  URL,
  ERROR,
  HIDDEN,
  VISIBLE,
  NEXT_STEP,
  PREVIOUS,
  BUTTON,
} from './consts/input';

import {
  FIRST_NAME,
  LAST_NAME,
  PERSONAL_DETAILS,
  PHONE_NUMBER,
  EMAIL,
  ADDRESS,
  ZIP_CODE,
  CITY_TOWN,
  LINKEDIN,
  WEBSITE,
  EDUCATION,
  WORK_EXPERIENCE,
} from './consts/headings';

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

  function handleOnchange(e) {
    const input = e.target;
    if (isValidInput(input)) {
      removeError(input);
      setProfile({ ...profile, [input.id]: input.value });
    } else {
      showError(input);
    }
  }

  function showError(input) {
    input.classList.add(ERROR);
    const errorElement = input.parentNode.querySelector('.error-message');
    errorElement.style.visibility = VISIBLE;
  }

  function removeError(input) {
    input.classList.remove(ERROR);
    const errorElement = input.parentNode.querySelector('.error-message');
    errorElement.style.visibility = HIDDEN;
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
          {/* <!-- Personal Information --> */}
          <Fieldset
            title={PERSONAL_DETAILS}
            id='personal-details'
            isActive={activeIndex === 0}>
            <Input
              label={FIRST_NAME}
              type={TEXT}
              isRequired={true}
              onChange={handleOnchange}
            />
            <Input
              label={LAST_NAME}
              type={TEXT}
              isRequired={true}
              onChange={handleOnchange}
            />
            <Input label={PHONE_NUMBER} type={TEXT} onChange={handleOnchange} />
            <Input
              label={EMAIL}
              type={EMAIL}
              isRequired={true}
              onChange={handleOnchange}
            />
            <Input label={ADDRESS} type={TEXT} onChange={handleOnchange} />
            <Input label={ZIP_CODE} type={TEXT} onChange={handleOnchange} />
            <Input label={CITY_TOWN} type={TEXT} onChange={handleOnchange} />
            <Input label={LINKEDIN} type={URL} onChange={handleOnchange} />
            <Input label={WEBSITE} type={URL} onChange={handleOnchange} />
            <SubmitButton
              type={BUTTON}
              name={NEXT_STEP}
              onSubmit={() => handleSubmit()}
            />
          </Fieldset>
          {/* <!-- Education --> */}
          <Fieldset
            title={EDUCATION}
            id='education-details'
            isActive={activeIndex === 1}>
            <Input
              label={FIRST_NAME}
              type={TEXT}
              isRequired={true}
              onChange={handleOnchange}
            />
            <Input
              label={LAST_NAME}
              type={TEXT}
              isRequired={true}
              onChange={handleOnchange}
            />
            <Input label={PHONE_NUMBER} type={TEXT} onChange={handleOnchange} />
            <Input
              label={EMAIL}
              type={EMAIL}
              isRequired={true}
              onChange={handleOnchange}
            />
            <Input label={ADDRESS} type={TEXT} onChange={handleOnchange} />
            <Input label={ZIP_CODE} type={TEXT} onChange={handleOnchange} />
            <Input label={CITY_TOWN} type={TEXT} onChange={handleOnchange} />
            <Input label={LINKEDIN} type={URL} onChange={handleOnchange} />
            <Input label={WEBSITE} type={URL} onChange={handleOnchange} />
            <SubmitButton
              type={BUTTON}
              name={NEXT_STEP}
              onSubmit={() => handleSubmit()}
            />
            <SubmitButton
              type={BUTTON}
              name={PREVIOUS}
              onSubmit={() => handlePrevious()}
            />
          </Fieldset>
          {/* <form>
            <Fieldset
              title={WORK_EXPERIENCE}
              id='personal-details'
              isActive={activeIndex === 2}>
              <Input
                label={FIRST_NAME}
                type={TEXT}
                isRequired={true}
                onChange={handleOnchange}
              />
              <Input
                label={LAST_NAME}
                type={TEXT}
                isRequired={true}
                onChange={handleOnchange}
              />
              <Input label={PHONE_NUMBER} type={TEXT} onChange={handleOnchange} />
              <Input
                label={EMAIL}
                type={EMAIL}
                isRequired={true}
                onChange={handleOnchange}
              />
            </Fieldset>
          </form> */}
        </form>
      </section>
    </>
  );
}

export default App;
