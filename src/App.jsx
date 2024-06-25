import "./App.css";
import CardsList from "./Card/CardsList";
import Loading from "./Loading/Loading";
import FetchPosts from "./FetchPosts/FetchPosts";

function App() {
  const [posts, loading] = FetchPosts();

  if (loading) {
    return <Loading />;
  } else {
    return <CardsList list={posts} />;
  }
}

export default App;
