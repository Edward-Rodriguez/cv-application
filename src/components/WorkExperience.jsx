import Fieldset from './Fieldset';
import Input from './Input';
import Button from './Button';
import TextArea from './TextArea';
import { LABELS } from '../consts/headings';
import { INPUT_TYPES, BUTTON_LABELS } from '../consts/input';
import '../styles/WorkExperience.css';

export default function WorkExperience({
  title,
  id,
  isActive,
  onChange,
  onClick,
  onPrevious,
}) {
  return (
    <>
      <Fieldset title={title} id={id} isActive={isActive}>
        <Input
          label={LABELS.JOB_TITLE}
          type={INPUT_TYPES.TEXT}
          onChange={onChange}
        />
        <Input
          label={LABELS.CITY_STATE}
          type={INPUT_TYPES.TEXT}
          onChange={onChange}
        />
        <Input
          label={LABELS.EMPLOYER}
          type={INPUT_TYPES.TEXT}
          onChange={onChange}
        />
        <Input
          label={LABELS.START_DATE}
          type={INPUT_TYPES.MONTH}
          onChange={onChange}
        />
        <Input
          label={LABELS.END_DATE}
          type={INPUT_TYPES.MONTH}
          onChange={onChange}
        />
        <TextArea
          label={LABELS.DESCRIPTION}
          rows={5}
          cols={30}
          onChange={onChange}
        />
        <Button
          buttonType={INPUT_TYPES.SUBMIT}
          name={BUTTON_LABELS.NEXT_STEP}
          onClick={onClick}
        />
        <Button
          buttonType={INPUT_TYPES.SUBMIT}
          name={BUTTON_LABELS.PREVIOUS}
          onClick={onPrevious}
        />
      </Fieldset>
    </>
  );
}
