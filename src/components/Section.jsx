import SectionHeader from './SectionHeader';
import '../styles/Section.css';

export default function Section({ title, id, children }) {
  return (
    <section id={id}>
      <SectionHeader title={title} />
      {children}
    </section>
  );
}
