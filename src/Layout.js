import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
    <main><header></header></main>
      <nav className="navbar navbar-expand-sm bg-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" href="#" to="/">Tic -Tac-Toe</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="#" to="/lighton">Light On</Link>
          </li>

        </ul>
      </nav>
    <article>
      <Outlet />
      </article>
      <footer>Saját név</footer>
    </>
    
  )
};
export default Layout;