import SectionHeader from './SectionHeader';

import '../styles/Section.css';

export default function Section({ title, id, isActive, children }) {
  return (
    <>
      <section id={id} style={{ display: isActive ? 'grid' : 'none' }}>
        <SectionHeader title={title} />
        {children}
      </section>
    </>
  );
}
