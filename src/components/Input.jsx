import '../styles/Input.css';
import { CSS_CLASSES, AUTOCOMPLETE } from '../consts/input';

export default function Input({
  label,
  type,
  value,
  onChange,
  isRequired,
  error,
}) {
  const id = label.toLowerCase().replace(/[ \/]/g, '');

  return (
    <div id={id + '-form'} className={CSS_CLASSES.FORM_CONTROL}>
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
        <p className='error-message'>{error}</p>
      </label>
    </div>
  );
}

function autoCompleteValue(id) {
  switch (id) {
    case 'firstname':
      return AUTOCOMPLETE.GIVEN_NAME;
    case 'lastname':
      return AUTOCOMPLETE.FAMILY_NAME;
    case 'phonenumber':
      return AUTOCOMPLETE.TELEPHONE_NUMBER;
    case 'email':
      return AUTOCOMPLETE.EMAIL_ADDRESS;
    case 'address':
      return AUTOCOMPLETE.STREET_ADDRESS;
    case 'zipcode':
      return AUTOCOMPLETE.POSTAL_CODE;
    case 'citytown':
      return AUTOCOMPLETE.CITY;
    case 'linkedin':
      return AUTOCOMPLETE.URL;
    case 'WEBSITE':
      return AUTOCOMPLETE.URL;
    default:
      return null;
  }
}
