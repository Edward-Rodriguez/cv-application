import { CSS_CLASSES } from '../consts/input';
import '../styles/ExperiencePreview.css';

export default function ExperiencePreview({ id, onClick, category, type }) {
  return (
    <>
      <button
        className={CSS_CLASSES.EXP_PREVIEW_BTN}
        type={type}
        onClick={onClick}
        id={id}>
        <div className={CSS_CLASSES.EXP_PREVIEW}>
          <div className={CSS_CLASSES.EXP_PREVIEW_TITLE}>
            {(category.school || category.jobtitle) ?? ''}
          </div>
          <div>{(category.degree || category.employer) ?? ''}</div>
        </div>
      </button>
      <hr className={CSS_CLASSES.CUSTOM_DIVIDER} />
    </>
  );
}
