import Fieldset from './Fieldset';
import Input from './Input';
import Button from './Button';
import TextArea from './TextArea';
import EducationPreview from './EducationPreview';
import RightArrowIcon from '../assets/right-icon-white.svg';
import LeftArrowIcon from '../assets/left-icon-white.svg';
import PlusIcon from '../assets/plus-icon.svg';
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
  onClear,
  profile,
  activeEduIndex,
  setActiveEduIndex,
}) {
  const [previewList, setPreviewList] = useState([]);
  const eduProfile = profile[USER_FIELDS.EDUCATION][activeEduIndex] ?? '';

  function handleAddEducation() {
    if (!eduProfile) return;
    setPreviewList([...previewList, eduProfile]);
    setActiveEduIndex(profile[USER_FIELDS.EDUCATION].length);
  }

  function handlePreviewClick(e) {
    const selectedParent = e.target.closest(`.${CSS_CLASSES.EDU_PREVIEW_BTN}`);
    let newActiveIndex;
    const updatedList = [...previewList].filter((eduItem) => {
      if (eduItem.id !== selectedParent.id) {
        return eduItem;
      } else {
        newActiveIndex = profile[USER_FIELDS.EDUCATION].findIndex(
          (profileItem) => eduItem.id === profileItem.id,
        );
      }
    });
    if (eduProfile) updatedList.push(eduProfile);
    setActiveEduIndex(newActiveIndex);
    setPreviewList(updatedList);
  }

  return (
    <>
      <Fieldset title={title} id={id} isActive={isActive}>
        <ul className={CSS_CLASSES.PREVIEW_LIST}>
          {previewList.map((edu) => (
            <li key={edu.id}>
              <EducationPreview
                id={edu.id}
                education={edu}
                type={INPUT_TYPES.BUTTON}
                onClick={(e) => handlePreviewClick(e)}
              />
            </li>
          ))}
        </ul>
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
              leftIcon={LeftArrowIcon}
            />
            <Button
              buttonType={INPUT_TYPES.BUTTON}
              name={BUTTON_LABELS.CLEAR}
              onClick={() => onClear(USER_FIELDS.EDUCATION, activeEduIndex)}
            />
          </div>
          <div>
            <Button
              buttonType={INPUT_TYPES.BUTTON}
              name={BUTTON_LABELS.ADD_EDU}
              onClick={handleAddEducation}
              leftIcon={PlusIcon}
            />
            <Button
              buttonType={INPUT_TYPES.SUBMIT}
              name={BUTTON_LABELS.NEXT_STEP}
              onClick={onClick}
              rightIcon={RightArrowIcon}
            />
          </div>
        </div>
      </Fieldset>
    </>
  );
}
