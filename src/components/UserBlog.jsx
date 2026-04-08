import Link from "next/link";

const UserBlog = ({ item }) => {
  const { title, id } = item;
  return (
    <div>
      <div className="card bg-base-100 shadow-sm">
        <div className="card-body items-center text-center">
          <h2 className="card-title"> UserID00{id}</h2>
          <h3 className="font-bold">Title: {title}</h3>
          <div className="card-actions">
            <button className="btn btn-primary">
              {" "}
              <Link href={`/users/blogs/${id}`}>View Details</Link>{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserBlog;
