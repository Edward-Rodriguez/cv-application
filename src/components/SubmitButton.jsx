import '../styles/SubmitButton.css';
import { INPUT_TYPES, CSS_CLASSES } from '../consts/input';
import { normalizeString } from '../utils/validation';

export default function SubmitButton({ name, onSubmit }) {
  return (
    <div className={CSS_CLASSES.BUTTON_CONTAINER}>
      <button
        type={INPUT_TYPES.SUBMIT}
        name={normalizeString(name, '')}
        onClick={(e) => onSubmit(e)}>
        {name}
      </button>
    </div>
  );
}
