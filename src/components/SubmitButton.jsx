import '../styles/SubmitButton.css';
import { SUBMIT } from '../consts/input';

export default function SubmitButton({ name, onSubmit }) {
  return (
    <div className='buttonContainer'>
      <button type={SUBMIT} name={name.toLowerCase()} onClick={onSubmit}>
        {name}
      </button>
    </div>
  );
}
