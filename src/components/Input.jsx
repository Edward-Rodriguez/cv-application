import '../styles/Input.css';
import { CSS_CLASSES, AUTOCOMPLETE, USER_FIELDS } from '../consts/input';
import { normalizeString } from '../utils/validation';

export default function Input({
  label,
  type,
  value,
  onChange,
  isRequired,
  error,
}) {
  const id = normalizeString(label, '');

  return (
    <div id={id + '-form'} className={CSS_CLASSES.FORM_CONTROL}>
      <label>
        <span className={CSS_CLASSES.LABEL_TEXT}>{label}</span>
        <input
          id={id}
          name={id}
          type={type}
          value={value}
          onChange={(e) => onChange(e)}
          required={isRequired}
          autoComplete={autoCompleteValue(id)}
          className={error && CSS_CLASSES.ERROR}
        />
        <p className={CSS_CLASSES.ERROR_MESSAGE}>{error}</p>
      </label>
    </div>
  );
}

function autoCompleteValue(id) {
  switch (id) {
    case USER_FIELDS.FIRST_NAME:
      return AUTOCOMPLETE.GIVEN_NAME;
    case USER_FIELDS.LAST_NAME:
      return AUTOCOMPLETE.FAMILY_NAME;
    case USER_FIELDS.PHONE_NUMBER:
      return AUTOCOMPLETE.TELEPHONE_NUMBER;
    case USER_FIELDS.EMAIL:
      return AUTOCOMPLETE.EMAIL_ADDRESS;
    case USER_FIELDS.ADDRESS:
      return AUTOCOMPLETE.STREET_ADDRESS;
    case USER_FIELDS.ZIP_CODE:
      return AUTOCOMPLETE.POSTAL_CODE;
    case USER_FIELDS.CITY_TOWN:
      return AUTOCOMPLETE.CITY;
    case USER_FIELDS.LINKEDIN:
      return AUTOCOMPLETE.URL;
    case USER_FIELDS.WEBSITE:
      return AUTOCOMPLETE.URL;
    default:
      return null;
  }
}
