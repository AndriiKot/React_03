import "./App.css";
import CardsList from "./Card/CardsList";
import Loading from "./Loading/Loading";
import FetchPosts from "./FetchPosts/FetchPosts";

function App() {
  const [posts, loading] = FetchPosts();

  console.log(posts, loading);
  if (loading) {
    console.log("HI!");
    return <Loading />;
  } else {
    console.log("Bye!");
    return <CardsList list={posts} />;
  }
}

export default App;
