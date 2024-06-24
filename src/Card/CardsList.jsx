import Card from "./Card";
import Loading from "./loading";

export default function CardsList(props) {
  const { list } = props;
  if (!list) {
    return <Loading />;
  }

  return list.map((post) => (
    <Card
      key={post.id}
      title={post.title}
      body={post.body}
      userId={post.userId}
    />
  ));
}
