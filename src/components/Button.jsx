import '../styles/Button.css';
import { normalizeString } from '../utils/validation';
import { CSS_CLASSES } from '../consts/input';

export default function Button({
  name,
  buttonType,
  onClick,
  leftIcon,
  rightIcon,
}) {
  return (
    <button
      type={buttonType}
      name={normalizeString(name, '')}
      onClick={(e) => onClick(e)}>
      <img className={CSS_CLASSES.BTN_ICON} src={leftIcon} />
      {name}
      <img className={CSS_CLASSES.BTN_ICON} src={rightIcon} />
    </button>
  );
}
