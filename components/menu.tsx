import Image from "next/image";
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
    <div className="navbar py-16 px-4 max-w-screen-xl mx-auto">
      <div className="navbar-start">
        <div className="avatar">
          <div className="rounded-full w-12">
            <Image
              src="/victor-kulessa.jpg"
              alt="Foto de Perfil de Victor Kulessa"
              width={460}
              height={460}
            />
          </div>
        </div>
        <h1 className="p-4 text-xl font-bold">Victor Kulessa</h1>
      </div>

      <div className="navbar-end">
        {" "}
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-outline btn-circle self-center"
          >
            <Dropdown />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-300 rounded-box w-52 right-0 "
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
    </div>
  );
}
