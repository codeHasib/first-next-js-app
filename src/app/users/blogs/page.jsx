import UserBlog from "@/components/UserBlog";

const BlogsPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {data.map((item) => (
        <UserBlog key={item.id} item={item}></UserBlog>
      ))}
    </div>
  );
};

export default BlogsPage;
