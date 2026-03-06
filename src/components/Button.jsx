import '../styles/Button.css';
import { INPUT_TYPES, CSS_CLASSES } from '../consts/input';
import { normalizeString } from '../utils/validation';

export default function Button({ name, buttonType, onClick }) {
  return (
    <button
      type={buttonType}
      name={normalizeString(name, '')}
      onClick={(e) => onClick(e)}>
      {name}
    </button>
  );
}
