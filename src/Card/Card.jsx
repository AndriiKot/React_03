export default function Card(props) {
  const { title, body } = props;
  console.log("HI Card!")
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
}
