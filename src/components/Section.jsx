import SectionHeader from './SectionHeader';
import '../styles/Section.css';
import {} from '../consts/headings';

export default function Section({ title, id, children }) {
  return (
    <section id={id}>
      <SectionHeader title={title} />
      {children}
    </section>
  );
}
