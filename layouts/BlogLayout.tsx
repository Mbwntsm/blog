
import { Link, Outlet } from "react-router-dom";

function BlogLayout() {
  return (
    <div>
      <header>
        <h1>My Blog 🚀</h1>

        <nav>
          <Link to="/">Home</Link>{" | "}
          <Link to="/page1">page1</Link>{" | "}
          <Link to="/page2">page2</Link>
        </nav>
      </header>

      <hr />

      {/* Child routes render here */}
      <main>
        <Outlet />
      </main>

      <hr />

      <footer>
        My Blog © 2026
      </footer>
    </div>
  );
}

export default BlogLayout;
