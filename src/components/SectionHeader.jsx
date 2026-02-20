import '../styles/SectionHeader.css';

function SectionHeader({ title }) {
  return (
    <div className='sectionHeader'>
      <h1>{title}</h1>
      <hr className='custom-divider' />
    </div>
  );
}

export default SectionHeader;
