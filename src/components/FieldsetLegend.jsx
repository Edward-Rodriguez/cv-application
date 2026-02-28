import '../styles/FieldsetLegend.css';
import { CSS_CLASSES } from '../consts/input';

export default function FieldsetLegend({ title }) {
  return (
    <div className={CSS_CLASSES.LEGEND}>
      <legend>{title}</legend>
      <hr className={CSS_CLASSES.CUSTOM_DIVIDER} />
    </div>
  );
}
