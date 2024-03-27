export default function Projetos() {
  return (
    <div id="projects" className="mt-16 max-w-screen-xl mx-auto">
      <h2 className="uppercase font-bold text-lg md:text-xl lg:text-2xl text-center">
        Projects
      </h2>
      <div className="carousel w-full mt-8">
        <div id="slide1" className="carousel-item w-full ">
          <div className="card max-w-md bg-info  text-primary-content mx-auto p-16 relative">
            <div className="card-body">
              <h2 className="card-title">Em breve!</h2>
              <p>
                Commodo anim ea nulla nostrud reprehenderit sunt non duis et
                laboris magna veniam sit sit. Incididunt nostrud velit
                exercitation pariatur in duis irure deserunt non est duis.
              </p>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a className="btn btn-circle">❮</a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
        <div id="slide2" className="carousel-item w-full">
          <div className="card max-w-md bg-info  text-primary-content mx-auto p-16 relative">
            <div className="card-body">
              <h2 className="card-title">Em breve!</h2>
              <p>
                Commodo anim ea nulla nostrud reprehenderit sunt non duis et
                laboris magna veniam sit sit. Incididunt nostrud velit
                exercitation pariatur in duis irure deserunt non est duis.
              </p>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
