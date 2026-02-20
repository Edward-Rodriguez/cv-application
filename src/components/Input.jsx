export default function Input({ label, type, value, onChange, isRequired }) {
  return (
    <label>
      {label}
      <input
        type={type}
        value={value}
        onChange={onChange}
        required={isRequired}
      />
    </label>
  );
}
