import { CSS_CLASSES } from '../consts/input';
import '../styles/TemplateSection.css';

export default function TemplateSection({ id, title, icon, children }) {
  return (
    <div id={id} className={CSS_CLASSES.TEMPLATE_SECTION}>
      <div className={CSS_CLASSES.TEMPLATE_SECTION_HEADER}>
        <span className={CSS_CLASSES.TEMPLATE_ICON}>
          <img src={icon} />
        </span>
        {title}
      </div>
      <div className={CSS_CLASSES.TEMPLATE_SECTION_CONTENT}>{children}</div>
    </div>
  );
}
