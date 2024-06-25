import "./App.css";
import CardsList from "./Card/CardsList";
import Loading from "./Loading/Loading";
import FetchPosts from "./FetchPosts/FetchPosts";

function App() {
  const [posts, loading, error] = FetchPosts();
  console.log(error)
  if (loading) {
    return <Loading />;
  } else {
    if (error) {
      return <div>Error: {error.message}</div>;
    }
    return <CardsList list={posts} />;
  }
}

export default App;
