import { LABELS, SECTIONS } from '../consts/headings';
import TemplateSection from './TemplateSection';
import '../styles/Template.css';
import PersonIcon from '../assets/person-svgrepo-com.svg';
import GraduateIcon from '../assets/graduate-cap-svgrepo-com.svg';
import WorkIcon from '../assets/go-to-work-svgrepo-com.svg';
import SubmitButton from './SubmitButton';
import {
  CSS_CLASSES,
  DISPLAY,
  USER_FIELDS,
  INPUT_TYPES,
  BUTTON_LABELS,
} from '../consts/input';

export default function Template({ profile, isActive, onPrevious }) {
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
              <ul className='description'>
                {edu.academicachievements
                  .split('\n')
                  .map((entry, index) => entry && <li key={index}>{entry}</li>)}
              </ul>
            </li>
          ))}
        </ul>
      </TemplateSection>
      {/* <!------- Work Experience Section -------> */}
      <TemplateSection
        id='template-work-exp'
        icon={WorkIcon}
        title={SECTIONS.WORK_EXPERIENCE}>
        <ul>
          {profile[USER_FIELDS.WORK_EXPERIENCE].map((job) => (
            <li key={job.id}>
              <div>{job.jobtitle}</div>
              <div>
                {formatDate(job.startdate) + ' - ' + formatDate(job.enddate)}
              </div>
              <div>{job.citystate}</div>
              <ul className='description'>
                {job.description
                  .split('\n')
                  .map((entry, index) => entry && <li key={index}>{entry}</li>)}
              </ul>
            </li>
          ))}
        </ul>
      </TemplateSection>
      <SubmitButton
        type={INPUT_TYPES.BUTTON}
        name={BUTTON_LABELS.PREVIOUS}
        onSubmit={onPrevious}
      />
    </div>
  );
}
