import '../styles/TextArea.css';

export default function TextArea({ label, rows, cols }) {
  const id = label.toLowerCase().replace(/[ \/]/g, '');
  return (
    <label>
      <span className='label-text'>{label}</span>
      <textarea name={id} id={id} cols={cols} rows={rows}></textarea>
    </label>
  );
}
