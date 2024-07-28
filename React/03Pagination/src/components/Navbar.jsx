const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center h-[80px] hori">
        <div className="ml-[3rem]">LOGO</div>
        <hr />
        <ul className="flex">
          <a href="">
            <li className="mr-[3rem]">Home</li>
          </a>
          <a href="">
            <li className="mr-[3rem]">About</li>
          </a>
          <a href="">
            <li className="mr-[3rem]">Demo</li>
          </a>
          <a href="">
            <li className="mr-[3rem]">Let's chat</li>
          </a>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
