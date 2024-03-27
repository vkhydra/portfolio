import Image from "next/image";
export default function Cabecalho() {
  return (
    <div className="mt-16 px-8 max-w-screen-xl mx-auto">
      <span className="uppercase font-bold text-info text-lg md:text-xl lg:text-2xl">
        Hello, my name is Victor
      </span>
      <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold font-serif">
        I develop web applications.
      </h1>
      <h2 className="md:text-lg lg:text-2xl mt-2">
        I am always looking for new challenges for my career to learn and grow
        as a professional.
      </h2>
    </div>
  );
}
