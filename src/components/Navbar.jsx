import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar container">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <span className="text-white">Elevate</span>
        <h2 className="text-center m-0 flex-grow-1 text-white">
          Frontend Advanced Bootcamp Task
        </h2>
      </div>
    </nav>
  );
};

export default Navbar;
