import { Outlet, Link } from "react-router-dom";
export default function HeaderAuthMenu() {
  return (
    <>
    <div>
      <h1>Auth</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/auth/home">Home</Link> |{" "}
        <Link to="/auth/about">About</Link> |{" "}
        <Link to="/auth/contact">Contact</Link> |{" "}
        <Link to="/auth/user">Users</Link>

      </nav>
      <Outlet />
    </div>
     
   </>
  );
}