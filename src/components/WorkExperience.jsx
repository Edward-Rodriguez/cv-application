import Fieldset from './Fieldset';
import Input from './Input';
import Button from './Button';
import TextArea from './TextArea';
import ExperiencePreview from './ExperiencePreview';
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
  setActiveWorkIndex,
  activeWorkIndex,
}) {
  const [previewList, setPreviewList] = useState([]);
  const workProfile =
    profile[USER_FIELDS.WORK_EXPERIENCE][activeWorkIndex] ?? '';
  function handleAddWorkExperience() {
    if (!workProfile) return;
    setPreviewList([...previewList, workProfile]);
    setActiveWorkIndex(profile[USER_FIELDS.WORK_EXPERIENCE].length);
  }

  function handlePreviewClick(e) {
    const selectedParent = e.target.closest(`.${CSS_CLASSES.EXP_PREVIEW_BTN}`);
    let newActiveIndex;
    const updatedList = [...previewList].filter((workItem) => {
      if (workItem.id !== selectedParent.id) {
        return workItem;
      } else {
        newActiveIndex = profile[USER_FIELDS.WORK_EXPERIENCE].findIndex(
          (profileItem) => workItem.id === profileItem.id,
        );
      }
    });
    if (workProfile) updatedList.push(workProfile);
    setActiveWorkIndex(newActiveIndex);
    setPreviewList(updatedList);
  }
  return (
    <>
      <Fieldset title={title} id={id} isActive={isActive}>
        <ul className={CSS_CLASSES.PREVIEW_LIST}>
          {previewList.map((workItem) => (
            <li key={workItem.id}>
              <ExperiencePreview
                id={workItem.id}
                category={workItem}
                type={INPUT_TYPES.BUTTON}
                onClick={(e) => handlePreviewClick(e)}
              />
            </li>
          ))}
        </ul>
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
            buttonType={INPUT_TYPES.BUTTON}
            name={BUTTON_LABELS.ADD_WORK_EXP}
            onClick={handleAddWorkExperience}
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
