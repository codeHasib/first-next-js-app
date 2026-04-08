"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const UserBlogsDetails = () => {
  const [item, setItem] = useState(null);
  const { userId } = useParams();
  const router = useRouter();
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [userId]);

  if (!item) {
    return <p>Loading...</p>;
  }
  const { body } = item;

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold"> UserID00{userId}</h1>
            <p className="py-6">{body}</p>
            <button onClick={() => router.back()} className="btn btn-primary">
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserBlogsDetails;
