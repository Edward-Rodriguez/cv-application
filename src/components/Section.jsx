import SectionHeader from './SectionHeader';
import SubmitButton from './SubmitButton';
import '../styles/Section.css';
import { NEXT_STEP } from '../consts/input';
import { handleSubmit } from '../utils/validation';

export default function Section({ title, id, children, onSubmit }) {
  return (
    <form id={id} onSubmit={(e) => handleSubmit(e)}>
      <SectionHeader title={title} />
      {children}
      <SubmitButton name={NEXT_STEP} onSubmit={onSubmit} />
    </form>
  );
}
