import Fieldset from './Fieldset';
import Input from './Input';
import Button from './Button';
import TextArea from './TextArea';
import RightArrowIcon from '../assets/right-icon-white.svg';
import LeftArrowIcon from '../assets/left-icon-white.svg';
import PlusIcon from '../assets/plus-icon.svg';
import { LABELS } from '../consts/headings';
import '../styles/WorkExperience.css';
import { useState } from 'react';
import {
  INPUT_TYPES,
  BUTTON_LABELS,
  CSS_CLASSES,
  USER_FIELDS,
} from '../consts/input';

export default function WorkExperience({
  title,
  id,
  isActive,
  onChange,
  onClick,
  onPrevious,
  onClear,
  profile,
}) {
  const [activeWorkIndex, setActiveWorkIndex] = useState(0);

  const workProfile =
    activeWorkIndex in profile[USER_FIELDS.WORK_EXPERIENCE]
      ? profile[USER_FIELDS.WORK_EXPERIENCE][activeWorkIndex]
      : '';

  return (
    <>
      <Fieldset title={title} id={id} isActive={isActive}>
        <Input
          label={LABELS.JOB_TITLE}
          type={INPUT_TYPES.TEXT}
          onChange={onChange}
          value={workProfile.jobtitle ?? ''}
        />
        <Input
          label={LABELS.CITY_STATE}
          type={INPUT_TYPES.TEXT}
          onChange={onChange}
          value={workProfile.citystate ?? ''}
        />
        <Input
          label={LABELS.EMPLOYER}
          type={INPUT_TYPES.TEXT}
          onChange={onChange}
          value={workProfile.employer ?? ''}
        />
        <Input
          label={LABELS.START_DATE}
          type={INPUT_TYPES.MONTH}
          onChange={onChange}
          value={workProfile.startdate ?? ''}
        />
        <Input
          label={LABELS.END_DATE}
          type={INPUT_TYPES.MONTH}
          onChange={onChange}
          value={workProfile.enddate ?? ''}
        />
        <TextArea
          label={LABELS.DESCRIPTION}
          rows={5}
          cols={30}
          onChange={onChange}
          value={workProfile.description ?? ''}
        />
        <div className={CSS_CLASSES.BTN_GRP}>
          <Button
            buttonType={INPUT_TYPES.SUBMIT}
            name={BUTTON_LABELS.PREVIOUS}
            onClick={onPrevious}
            leftIcon={LeftArrowIcon}
          />
          <Button
            buttonType={INPUT_TYPES.BUTTON}
            name={BUTTON_LABELS.CLEAR}
            onClick={() =>
              onClear(USER_FIELDS.WORK_EXPERIENCE, activeWorkIndex)
            }
          />
          <Button
            buttonType={INPUT_TYPES.SUBMIT}
            name={BUTTON_LABELS.ADD_WORK_EXP}
            onClick={onClick}
            leftIcon={PlusIcon}
          />
          <Button
            buttonType={INPUT_TYPES.SUBMIT}
            name={BUTTON_LABELS.NEXT_STEP}
            onClick={onClick}
            rightIcon={RightArrowIcon}
          />
        </div>
      </Fieldset>
    </>
  );
}
