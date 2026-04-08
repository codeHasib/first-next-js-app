import SideBar from "@/components/SideBar";

const AboutLayout = ({ children }) => {
  return (
    <>
      <div className="grid grid-cols-2">
        <div>
          <SideBar route1={"us"} route2={"product"}></SideBar>
        </div>
        <div>{children}</div>
      </div>
    </>
  );
};

export default AboutLayout;
