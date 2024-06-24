import Card from "./Card";

export default function CardsList(props) {
  const { list } = props;
  if (!list) {
    console.log("HOt list");
  } else {
    console.log("Cold list");
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
