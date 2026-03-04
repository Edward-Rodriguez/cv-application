import { CSS_CLASSES, DISPLAY, USER_FIELDS } from '../consts/input';
import { LABELS, SECTIONS } from '../consts/headings';
import TemplateSection from './TemplateSection';
import '../styles/Template.css';
import PersonIcon from '../assets/person-svgrepo-com.svg';
import GraduateIcon from '../assets/graduate-cap-svgrepo-com.svg';
import SubmitButton from './SubmitButton';

export default function Template({ profile, isActive }) {
  function composeAddress() {
    return (
      profile.address +
      ' ' +
      profile.citytown +
      ' ' +
      profile.zipcode
    ).trim();
  }

  function formatDate(date) {
    return new Date(date).toLocaleString('default', {
      month: 'long',
      year: 'numeric',
    });
  }

  function loadSample() {}

  return (
    <div
      style={{ display: isActive ? DISPLAY.GRID : DISPLAY.NONE }}
      className={CSS_CLASSES.TEMPLATE_CONTAINER}>
      <div className={CSS_CLASSES.TEMPLATE_HEADER}>
        {profile.firstname + ' ' + profile.lastname}
      </div>
      {/* <!------- Personal Information Section -------> */}
      <TemplateSection
        id='template-personal'
        icon={PersonIcon}
        title={LABELS.PERSONAL}>
        <div>{LABELS.NAME}</div>
        <div>{profile.firstname + ' ' + profile.lastname}</div>
        {(profile.address || profile.zipcode || profile.citytown) && (
          <>
            <div>{LABELS.ADDRESS}</div>
            <div>{composeAddress()}</div>
          </>
        )}
        {profile.phonenumber && (
          <>
            <div>{LABELS.PHONE_NUMBER}</div>
            <div>{profile.phonenumber}</div>
          </>
        )}
        <div>{LABELS.EMAIL}</div>
        <div>{profile.email}</div>
      </TemplateSection>
      {/* <!------- Education Section -------> */}
      <TemplateSection
        id='template-educational'
        icon={GraduateIcon}
        title={SECTIONS.EDUCATION}>
        <ul>
          {profile[USER_FIELDS.EDUCATION].map((edu) => (
            <li key={edu.id}>
              <div>{edu.degree}</div>
              <div>{formatDate(edu.graduationdate)}</div>
              <div>{edu.school}</div>
              <div>{edu.citystate}</div>
            </li>
          ))}
        </ul>
      </TemplateSection>
    </div>
  );
}
