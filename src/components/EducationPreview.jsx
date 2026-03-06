import { CSS_CLASSES } from '../consts/input';
import '../styles/EducationPreview.css';

export default function EducationPreview({ id, onClick, education, type }) {
  return (
    <>
      <button
        className={CSS_CLASSES.EDU_PREVIEW_BTN}
        type={type}
        onClick={onClick}
        id={id}>
        <div className={CSS_CLASSES.EDU_PREVIEW}>
          <div className={CSS_CLASSES.EDU_PREVIEW_SCHOOL}>
            {education.school}
          </div>
          <div>{education.degree}</div>
        </div>
      </button>
      <hr className={CSS_CLASSES.CUSTOM_DIVIDER} />
    </>
  );
}
