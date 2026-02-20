import '../styles/Input.css';

export default function Input({ label, type, value, onChange, isRequired }) {
  const id = label.toLowerCase().replaceAll(' ', '');

  return (
    <div id={id + '-form'} className='form-control'>
      <label>
        {label}
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          required={isRequired}
        />
      </label>
    </div>
  );
}

function autoCompleteValue(type) {}
