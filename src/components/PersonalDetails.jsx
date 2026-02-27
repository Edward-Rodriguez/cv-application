import { LABELS } from '../consts/headings';
import { INPUT_TYPES, BUTTON_LABELS, USER_FIELDS } from '../consts/input';
import Fieldset from './Fieldset';
import Input from './Input';
import SubmitButton from './SubmitButton';

export default function PersonalDetails({
  id,
  title,
  isActive,
  onChange,
  onSubmit,
  errors,
}) {
  return (
    <Fieldset title={title} id={id} isActive={isActive}>
      <Input
        label={LABELS.FIRST_NAME}
        type={INPUT_TYPES.TEXT}
        isRequired={true}
        onChange={onChange}
        error={errors && errors[USER_FIELDS.FIRST_NAME]}
      />
      <Input
        label={LABELS.LAST_NAME}
        type={INPUT_TYPES.TEXT}
        isRequired={true}
        onChange={onChange}
        error={errors && errors[USER_FIELDS.LAST_NAME]}
      />
      <Input
        label={LABELS.PHONE_NUMBER}
        type={INPUT_TYPES.TEXT}
        onChange={onChange}
        error={errors && errors[USER_FIELDS.PHONE_NUMBER]}
      />
      <Input
        label={LABELS.EMAIL}
        type={INPUT_TYPES.EMAIL}
        isRequired={true}
        onChange={onChange}
        error={errors && errors[USER_FIELDS.EMAIL]}
      />
      <Input
        label={LABELS.ADDRESS}
        type={INPUT_TYPES.TEXT}
        onChange={onChange}
      />
      <Input
        label={LABELS.ZIP_CODE}
        type={INPUT_TYPES.TEXT}
        onChange={onChange}
        error={errors && errors[USER_FIELDS.ZIP_CODE]}
      />
      <Input
        label={LABELS.CITY_TOWN}
        type={INPUT_TYPES.TEXT}
        onChange={onChange}
      />
      <Input
        label={LABELS.LINKEDIN}
        type={INPUT_TYPES.URL}
        onChange={onChange}
      />
      <Input
        label={LABELS.WEBSITE}
        type={INPUT_TYPES.URL}
        onChange={onChange}
      />
      <SubmitButton
        type={INPUT_TYPES.BUTTON}
        name={BUTTON_LABELS.NEXT_STEP}
        onSubmit={onSubmit}
      />
    </Fieldset>
  );
}
