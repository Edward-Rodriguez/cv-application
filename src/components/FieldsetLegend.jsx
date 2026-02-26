import '../styles/FieldsetLegend.css';

export default function FieldsetLegend({ title }) {
  return (
    <div className='fieldset-legend'>
      <legend>{title}</legend>
      <hr className='custom-divider' />
    </div>
  );
}
