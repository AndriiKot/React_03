import "./App.css";
import CardsList from "./Card/CardsList";
import Loading from "./Loading/Loading";
import FetchPosts from "./FetchPosts/FetchPosts";

function App() {
  const [posts, loading, error] = FetchPosts();
  console.log(error);
  if (loading) {
    <Loading />;
  }
  if (error) {
    setTimeout(() => <div>Error: {error.message}</div>, 4000);
  }
  return <CardsList list={posts} />;
}

export default App;
