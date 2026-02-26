import '../styles/SubmitButton.css';
import { INPUT_TYPES } from '../consts/input';

export default function SubmitButton({ name, onSubmit }) {
  return (
    <div className='buttonContainer'>
      <button
        type={INPUT_TYPES.SUBMIT}
        name={name.toLowerCase().replace(' ', '')}
        onClick={onSubmit}>
        {name}
      </button>
    </div>
  );
}
