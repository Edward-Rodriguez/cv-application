import Fieldset from './Fieldset';
import Input from './Input';
import Button from './Button';
import TextArea from './TextArea';
import EducationPreview from './EducationPreview';
import { LABELS } from '../consts/headings';
import {
  USER_FIELDS,
  INPUT_TYPES,
  BUTTON_LABELS,
  CSS_CLASSES,
} from '../consts/input';
import { useState } from 'react';

export default function Education({
  title,
  id,
  isActive,
  onChange,
  onClick,
  onPrevious,
  setProfile,
  onClear,
  profile,
}) {
  const [activeEduIndex, setActiveEduIndex] = useState(0);
  const eduProfile =
    activeEduIndex in profile[USER_FIELDS.EDUCATION]
      ? profile[USER_FIELDS.EDUCATION][activeEduIndex]
      : '';

  function handleClearForm(formSectionId) {
    const inputs = document
      .getElementById(formSectionId)
      .querySelectorAll('input, textArea');
    inputs.forEach((input) => {
      if (input instanceof HTMLTextAreaElement) {
        input.textContent = '';
      } else {
        input.value = '';
      }
    });
  }
  return (
    <>
      <Fieldset title={title} id={id} isActive={isActive}>
        {/* <EducationPreview
          education={{
            citystate: 'South Redford Dr., NY',
            degree: 'B.A. Computer Science',
            graduationdate: '2026-04',
            school: 'NYU University',
          }}
        /> */}
        <Input
          label={LABELS.SCHOOL}
          type={INPUT_TYPES.TEXT}
          onChange={onChange}
          value={eduProfile.school ?? ''}
        />
        <Input
          label={LABELS.CITY_STATE}
          type={INPUT_TYPES.TEXT}
          onChange={onChange}
          value={eduProfile.citystate ?? ''}
        />
        <Input
          label={LABELS.DEGREE}
          type={INPUT_TYPES.TEXT}
          onChange={onChange}
          value={eduProfile.degree ?? ''}
        />
        <Input
          label={LABELS.GRADUATION_DATE}
          type={INPUT_TYPES.MONTH}
          onChange={onChange}
          value={eduProfile.graduationdate ?? ''}
        />
        <TextArea
          label={LABELS.ACHIEVEMENTS}
          rows={5}
          cols={30}
          onChange={onChange}
          value={eduProfile.academicachievements ?? ''}
        />
        <div className={CSS_CLASSES.BTN_GRP}>
          <div>
            <Button
              buttonType={INPUT_TYPES.SUBMIT}
              name={BUTTON_LABELS.PREVIOUS}
              onClick={onPrevious}
            />
            <Button
              buttonType={INPUT_TYPES.BUTTON}
              name={BUTTON_LABELS.CLEAR}
              onClick={() => onClear(USER_FIELDS.EDUCATION, activeEduIndex)}
            />
          </div>
          <div>
            <Button
              buttonType={INPUT_TYPES.SUBMIT}
              name={BUTTON_LABELS.ADD_EDU}
              onClick={onClick}
            />
            <Button
              buttonType={INPUT_TYPES.SUBMIT}
              name={BUTTON_LABELS.NEXT_STEP}
              onClick={onClick}
            />
          </div>
        </div>
      </Fieldset>
    </>
  );
}
