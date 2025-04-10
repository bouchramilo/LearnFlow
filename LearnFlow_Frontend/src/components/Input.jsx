export default function Input({ type, id, name }) {
  return (
    <div>
      <input type={type} id={id} name={name} required />
    </div>
  );
}
