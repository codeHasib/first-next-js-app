const UserComment = ({ item }) => {
  const { id, name, email, body } = item;
  return (
    <div className="p-3 bg-gray-700 border border-gray-300">
      <h3 className="text-xl font-bold">Name: {name}</h3>
      <h4 className="text-lg font-semibold">Email: {email}</h4>
      <div className="m-5 rounded-4xl bg-amber-200 p-4 text-black">
        <p className="font-extralight">{body}</p>
      </div>
    </div>
  );
};

export default UserComment;
