import { useState } from 'react';
import './App.css';
import Input from './components/Input';
import Fieldset from './components/Fieldset';
import SubmitButton from './components/SubmitButton';
import PersonalDetails from './components/PersonalDetails';
import { validateProfile } from './utils/validation';
import { SECTIONS, LABELS } from './consts/headings';
import { INPUT_TYPES, BUTTON_LABELS } from './consts/input';

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
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);

  function handleOnChange(e) {
    const input = e.target;
    const updatedProfile = { ...profile, [input.id]: input.value };
    setProfile(updatedProfile);
    if (attemptedSubmit) {
      const newErrors = validateProfile(updatedProfile);
      setErrors(newErrors);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    /**pending**/
  }

  function handleNextStep(e) {
    e.preventDefault();
    const newErrors = validateProfile(profile);
    if (Object.keys(newErrors).length === 0) {
      setActiveIndex(activeIndex + 1);
    } else {
      setErrors(newErrors);
    }
    setAttemptedSubmit(true);
  }

  function handlePrevious(e) {
    e.preventDefault();
    setActiveIndex(activeIndex - 1);
    setAttemptedSubmit(false);
  }

  return (
    <>
      <section className='form-section'>
        <form>
          {/* <!------- Personal Information Section -------> */}
          <PersonalDetails
            title={SECTIONS.PERSONAL_DETAILS}
            id='personal-details'
            isActive={activeIndex === 0}
            onChange={handleOnChange}
            onSubmit={handleNextStep}
            errors={errors}
          />
          {/* <!-- Education Section --> */}
          <Fieldset
            title={SECTIONS.EDUCATION}
            id='education-details'
            isActive={activeIndex === 1}>
            <Input
              label={LABELS.PHONE_NUMBER}
              type={INPUT_TYPES.TEXT}
              onChange={handleOnChange}
            />
            <SubmitButton
              type={INPUT_TYPES.BUTTON}
              name={BUTTON_LABELS.NEXT_STEP}
              onSubmit={handleSubmit}
            />
            <SubmitButton
              type={INPUT_TYPES.BUTTON}
              name={BUTTON_LABELS.PREVIOUS}
              onSubmit={handlePrevious}
            />
          </Fieldset>
        </form>
      </section>
    </>
  );
}

export default App;
