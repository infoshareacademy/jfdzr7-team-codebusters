export const InputAuthText = ({ value, name, type, id }) => {
  return (
    <div>
      <label htmlFor={id}>{value}</label>
      <input type={type} name={name} id={id} />
    </div>
  );
};
