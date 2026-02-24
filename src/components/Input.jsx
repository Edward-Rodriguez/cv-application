import '../styles/Input.css';
import { ERROR_MESSAGE } from '../consts/errorMessages';
import {
  FORM_CONTROL,
  GIVEN_NAME,
  FAMILY_NAME,
  STREET_ADDRESS,
  CITY,
  POSTAL_CODE,
  URL,
  EMAIL_ADDRESS,
  TELEPHONE_NUMBER,
} from '../consts/input';

export default function Input({ label, type, value, onChange, isRequired }) {
  const id = label.toLowerCase().replace(/[ \/]/g, '');

  return (
    <div id={id + '-form'} className={FORM_CONTROL}>
      <label>
        <span className='label-text'>{label}</span>
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          required={isRequired}
          autoComplete={autoCompleteValue(id)}
        />
        <p className='error-message'>{ERROR_MESSAGE[id]}</p>
      </label>
    </div>
  );
}

function autoCompleteValue(id) {
  switch (id) {
    case 'firstname':
      return GIVEN_NAME;
    case 'lastname':
      return FAMILY_NAME;
    case 'phonenumber':
      return TELEPHONE_NUMBER;
    case 'email':
      return EMAIL_ADDRESS;
    case 'address':
      return STREET_ADDRESS;
    case 'zipcode':
      return POSTAL_CODE;
    case 'citytown':
      return CITY;
    case 'linkedin':
      return URL;
    case 'WEBSITE':
      return URL;
    default:
      return null;
  }
}
