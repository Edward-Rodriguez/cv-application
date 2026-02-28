import '../styles/TextArea.css';
import { CSS_CLASSES } from '../consts/input';
import { normalizeString } from '../utils/validation';

export default function TextArea({ label, rows, cols }) {
  const id = normalizeString(label, '');
  return (
    <label>
      <span className={CSS_CLASSES.LABEL_TEXT}>{label}</span>
      <textarea name={id} id={id} cols={cols} rows={rows}></textarea>
    </label>
  );
}
