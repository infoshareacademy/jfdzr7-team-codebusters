export const InputAuthText = ({ value, id }) => {
  return (
      <label htmlFor={id}>
        {value}
      <input type={id} name={id} id={id} />
      </label>
  );
};
