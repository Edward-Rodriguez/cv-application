import '../styles/TextArea.css';
import { CSS_CLASSES } from '../consts/input';
import { normalizeString } from '../utils/validation';

export default function TextArea({ label, rows, cols, onChange }) {
  const id = normalizeString(label, '');
  return (
    <div id={id + '-form'} className={CSS_CLASSES.FORM_CONTROL}>
      <label>
        <span className={CSS_CLASSES.LABEL_TEXT}>{label}</span>
        <textarea
          name={id}
          id={id}
          cols={cols}
          rows={rows}
          onChange={onChange}></textarea>
      </label>
    </div>
  );
}
