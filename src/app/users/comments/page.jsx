const CommentPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments");
  const data = await res.json();
  return <div>
    
  </div>;
};

export default CommentPage;
