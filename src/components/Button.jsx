import '../styles/Button.css';
import { INPUT_TYPES, CSS_CLASSES } from '../consts/input';
import { normalizeString } from '../utils/validation';

export default function Button({ name, onClick }) {
  return (
    <div className={CSS_CLASSES.BUTTON_CONTAINER}>
      <button
        type={INPUT_TYPES.SUBMIT}
        name={normalizeString(name, '')}
        onClick={(e) => onClick(e)}>
        {name}
      </button>
    </div>
  );
}
