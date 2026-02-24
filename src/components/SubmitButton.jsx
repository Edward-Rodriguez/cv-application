import '../styles/SubmitButton.css';
import { SUBMIT } from '../consts/input';

export default function SubmitButton({ name, onSubmit }) {
  return (
    <div className='buttonContainer'>
      <button type={SUBMIT} onSubmit={(ev) => onSubmit(ev)}>
        {name}
      </button>
    </div>
  );
}
