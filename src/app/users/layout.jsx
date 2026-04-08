import SideBarUser from "@/components/SideBarUser";

const UsersLayout = ({ children }) => {
  return (
    <div className="grid grid-cols-2">
      <SideBarUser route1={"comments"} route2={"blogs"}></SideBarUser>
      {children}
    </div>
  );
};

export default UsersLayout;
