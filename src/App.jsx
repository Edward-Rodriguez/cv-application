import { useState } from 'react';
import './App.css';
import Section from './components/Section';
import Input from './components/Input';
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
import { TEXT } from './consts/input';

function App() {
  return (
    <Section title={PERSONAL_DETAILS} id='personal'>
      <Input label={FIRST_NAME} type={TEXT} />
      <Input label={LAST_NAME} type={TEXT} />
      <Input label={PHONE_NUMBER} type={TEXT} />
      <Input label={EMAIL} type={EMAIL} />
      <Input label={ADDRESS} type={TEXT} />
      <Input label={ZIP_CODE} type={TEXT} />
      <Input label={CITY_TOWN} type={TEXT} />
      <Input label={LINKEDIN} type={TEXT} />
      <Input
        label={WEBSITE}
        type={TEXT}
        value='testing.com'
        onChange={() => {}}
        isRequired={true}
      />
    </Section>
  );
}

export default App;
