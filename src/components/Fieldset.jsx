import FieldsetLegend from './FieldsetLegend';
import '../styles/Fieldset.css';

export default function Fieldset({ title, id, isActive, children }) {
  return (
    <>
      <fieldset id={id} style={{ display: isActive ? 'grid' : 'none' }}>
        <FieldsetLegend title={title} />
        {children}
      </fieldset>
    </>
  );
}
