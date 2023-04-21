import { Outlet, Link } from "react-router-dom";
export default function HeaderMenu() {
  return (
    <>
    <div>
      <h1>Bookkeeper</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link> |{" "}
        {/* <Link to="/user">Users</Link> */}

      </nav>
      <Outlet />
    </div>
     
   </>
  );
}