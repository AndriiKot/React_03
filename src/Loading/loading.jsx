import "./Loading.css";

export default function Loading(props) {
  const boolean = props;
  let loading;
  if (boolean) {
    loading = (
      <div className="loading">
        <p>Loading...</p>
      </div>
    );
  }

  return loading;
}
