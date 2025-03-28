export default function Input({ name, labelName, value, onChangeInput }) {
  return (
    <>
      <p>
        <label>{labelName}</label>
        <input
          name={name}
          value={value}
          required
          type="number"
          onChange={(event) => onChangeInput(name, event.target.value)}
        />
      </p>
    </>
  );
}
