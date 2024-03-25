export default function Menu() {
  function Dropdown() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h8m-8 6h16"
        />
      </svg>
    );
  }

  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <Dropdown />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#about">About me</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact-me">Contact Me</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <h1 className="font-medium">Victor Bruno Kulessa</h1>
      </div>
      <div className="navbar-end">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn">
            Theme
            <svg
              width="12px"
              height="12px"
              className="h-2 w-2 fill-current opacity-60 inline-block"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 2048 2048"
            >
              <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52 mt-2 right-0"
          >
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                aria-label="🌑 Dark"
                value="dark"
              />
            </li>
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                aria-label="🎹 Synthwave"
                value="synthwave"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
