import { Link } from "react-router-dom";

type Blogs = {
  title: string;
  date: string;
  path: string;
}

function Home() {
  const blogs: Blogs[] = [
    {
      title: "Goal achieved",
      date: "20 nov 2026",
      path: "/Page1",
    },
    {
      title: "GTA 6 baby",
      date: "19 November 2026",
      path: "/Page2",
    },
  ]

 return (
    <>
      <div>
        <h1>My React Website 🚀</h1>

        <h2>Blogs Posted</h2>

        <ul>
          {blogs.map((blog, index) => (
            <li key={index}>
              <Link to={blog.path}>
                {blog.title}
              </Link>
              {" - "}
              <small>{blog.date}</small>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}


export default Home;