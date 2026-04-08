import SideBarUser from "@/components/SideBarUser";

const UsersLayout = ({ children }) => {
  return (
    <div className="grid grid-cols-3">
      <div className="col-span-1">
        <SideBarUser route1={"comments"} route2={"blogs"}></SideBarUser>
      </div>
      <div className="col-span-2">{children}</div>
    </div>
  );
};

export default UsersLayout;
