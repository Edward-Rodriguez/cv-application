import { LABELS } from '../consts/headings';
import Fieldset from './Fieldset';
import Input from './Input';
import Button from './Button';
import RightArrowIcon from '../assets/right-icon-white.svg';
import {
  INPUT_TYPES,
  BUTTON_LABELS,
  USER_FIELDS,
  CSS_CLASSES,
} from '../consts/input';

export default function PersonalDetails({
  id,
  title,
  isActive,
  onChange,
  onClick,
  onClear,
  errors,
  profile,
}) {
  return (
    <Fieldset title={title} id={id} isActive={isActive}>
      <Input
        label={LABELS.FIRST_NAME}
        type={INPUT_TYPES.TEXT}
        isRequired={true}
        onChange={onChange}
        value={profile.firstname ?? ''}
        error={errors && errors[USER_FIELDS.FIRST_NAME]}
      />
      <Input
        label={LABELS.LAST_NAME}
        type={INPUT_TYPES.TEXT}
        isRequired={true}
        onChange={onChange}
        value={profile.lastname ?? ''}
        error={errors && errors[USER_FIELDS.LAST_NAME]}
      />
      <Input
        label={LABELS.PHONE_NUMBER}
        type={INPUT_TYPES.TEXT}
        onChange={onChange}
        value={profile.phonenumber ?? ''}
        error={errors && errors[USER_FIELDS.PHONE_NUMBER]}
      />
      <Input
        label={LABELS.EMAIL}
        type={INPUT_TYPES.EMAIL}
        isRequired={true}
        onChange={onChange}
        value={profile.email ?? ''}
        error={errors && errors[USER_FIELDS.EMAIL]}
      />
      <Input
        label={LABELS.ADDRESS}
        type={INPUT_TYPES.TEXT}
        onChange={onChange}
        value={profile.address ?? ''}
      />
      <Input
        label={LABELS.ZIP_CODE}
        type={INPUT_TYPES.TEXT}
        onChange={onChange}
        value={profile.zipcode ?? ''}
        error={errors && errors[USER_FIELDS.ZIP_CODE]}
      />
      <Input
        label={LABELS.CITY_TOWN}
        type={INPUT_TYPES.TEXT}
        onChange={onChange}
        value={profile.citytown ?? ''}
      />
      <Input
        label={LABELS.LINKEDIN}
        type={INPUT_TYPES.URL}
        onChange={onChange}
        value={profile.linkedin ?? ''}
      />
      <Input
        label={LABELS.WEBSITE}
        type={INPUT_TYPES.URL}
        onChange={onChange}
        value={profile.website ?? ''}
      />
      <div className={CSS_CLASSES.BTN_GRP}>
        <Button
          buttonType={INPUT_TYPES.BUTTON}
          name={BUTTON_LABELS.CLEAR}
          onClick={() => onClear(id)}
        />
        <Button
          buttonType={INPUT_TYPES.SUBMIT}
          name={BUTTON_LABELS.NEXT_STEP}
          onClick={onClick}
          rightIcon={RightArrowIcon}
        />
      </div>
    </Fieldset>
  );
}
