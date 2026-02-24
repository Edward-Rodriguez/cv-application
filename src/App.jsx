import { useState } from 'react';
import './App.css';
import Section from './components/Section';
import Input from './components/Input';
import { isValidInput } from './utils/validation';
import { TEXT, URL, ERROR, HIDDEN, VISIBLE } from './consts/input';
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

  function handleOnchange(e) {
    const key = e.target.id;
    if (isValidInput(e)) {
      removeError(e);
      setProfile({ ...profile, [key]: e.target.value });
    } else {
      showError(e);
    }
  }

  function showError(e) {
    e.target.classList.add(ERROR);
    const errorElement = e.target.parentNode.querySelector('.error-message');
    errorElement.style.visibility = VISIBLE;
  }

  function removeError(e) {
    e.target.classList.remove(ERROR);
    const errorElement = e.target.parentNode.querySelector('.error-message');
    errorElement.style.visibility = HIDDEN;
  }

  return (
    <Section title={PERSONAL_DETAILS} id='personal'>
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
    </Section>
  );
}

export default App;
