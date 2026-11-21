import { Link, Outlet, useLocation } from "react-router-dom";

function BlogLayout(){
  const location = useLocation();
  const getProfileColor = ()=>{
    switch(location.pathname.toLowerCase()){
      case "/amaan":
        return "bg-black";
      case "/rishabh":
        return "bg-red-100"
      case "/sulabh":
        return "bg-lime-300";
      default:
        return "bg-black";
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#dafb2b] text-gray-900">

      {/* Centered website container */}                            
      <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 flex flex-1 flex-col ${getProfileColor()}`}>

        {/* Header */}
        <header className="flex items-center justify-between border-b border-gray-200 py-6">

          <Link to="/" className="text-2xl font-bold tracking-tight text-white/50">
            &lt; scatzzy &gt; 
          </Link>

          <nav className="flex items-center gap-6 text-sm font-medium text-gray-600 text-white/50">
            <Link
              to="/"
              className="transition hover:text-blue-600"
            >
              Home
            </Link>
            <Link
              to="/amaan"
              className="transition hover:text-blue-600"
            >
              Amaan
            </Link>
            <Link
              to="/rishabh"
              className="transition hover:text-blue-600"
            >
              rishabh
            </Link>
            <Link
              to="/sulabh"
              className="transition hover:text-blue-600"
            > sulabh </Link>
          </nav>

        </header>

        {/* Page content */}
        <main className="min-h-[75vh] py-10 sm:py-14 ">
          <Outlet />
        </main>

        {/* Footer */}
        <footer className="border-t border-gray-200 py-6 text-center text-sm text-gray-500">
          My Blog © 2026
        </footer>

      </div>
    </div>
  );
}

export default BlogLayout;
