import UserComment from "@/components/UserComment";

const CommentPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments");
  const data = await res.json();
  return (
    <div className="p-4 space-y-4">
      {data.map((item) => (
        <UserComment key={item.id} item={item}></UserComment>
      ))}
    </div>
  );
};

export default CommentPage;
