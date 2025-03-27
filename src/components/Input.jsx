export default function Input({ name, labelName, handleUserData }) {
  return (
    <>
      <p>
        <label>{labelName}</label>
        <input
          name={name}
          required
          type="number"
          onChange={(e) => handleUserData(e)}
        />
      </p>
    </>
  );
}
