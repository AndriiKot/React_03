import { useEffect, useState } from "react";
import "./App.css";
import CardsList from "./Card/CardsList";
import FetchPosts from "./FetchPosts/FetchPosts";


function App() {
  const [posts, setPosts] = useState([]);
  FetchPosts()
  const fetchPosts = async () => {
    return fetch("https://jsonplaceholder.typicode.com/posts").then(
      (response) => response.json()
    );
  };

  useEffect(() => {
    fetchPosts().then((data) => setPosts(data));
  }, []);
  return (
    <div className="cards-container">
      <CardsList  list={posts} />
    </div>
  );
}

export default App;
