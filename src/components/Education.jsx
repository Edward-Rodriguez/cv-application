import Fieldset from './Fieldset';
import Input from './Input';
import SubmitButton from './SubmitButton';
import TextArea from './TextArea';
import { LABELS } from '../consts/headings';
import { USER_FIELDS, INPUT_TYPES, BUTTON_LABELS } from '../consts/input';

export default function Education({
  title,
  id,
  isActive,
  onChange,
  onSubmit,
  onPrevious,
  errors,
}) {
  return (
    <Fieldset title={title} id={id} isActive={isActive}>
      <Input
        label={LABELS.DEGREE}
        type={INPUT_TYPES.TEXT}
        onChange={onChange}
        error={errors && errors[USER_FIELDS.DEGREE]}
      />
      <Input
        label={LABELS.CITY_STATE}
        type={INPUT_TYPES.TEXT}
        onChange={onChange}
      />
      <Input
        label={LABELS.SCHOOL}
        type={INPUT_TYPES.TEXT}
        onChange={onChange}
      />
      <Input
        label={LABELS.GRADUATION_DATE}
        type={INPUT_TYPES.MONTH}
        onChange={onChange}
      />
      <TextArea
        label={LABELS.ACHIEVEMENTS}
        rows={5}
        cols={30}
        onChange={onChange}
      />
      <SubmitButton
        type={INPUT_TYPES.BUTTON}
        name={BUTTON_LABELS.NEXT_STEP}
        onSubmit={onSubmit}
      />
      <SubmitButton
        type={INPUT_TYPES.BUTTON}
        name={BUTTON_LABELS.PREVIOUS}
        onSubmit={onPrevious}
      />
    </Fieldset>
  );
}
