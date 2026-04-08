import Link from "next/link";

const SideBar = ({ route1, route2 }) => {
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label htmlFor="my-drawer-3" className="btn drawer-button lg:hidden">
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <li>
              <Link href={`/about/${route1}`}> About Us </Link>
            </li>
            <li>
              {" "}
              <Link href={`/about/${route2}`}> About Product </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
