import Image from "next/image";
export default function Cabecalho() {
  return (
    <div className="py-16 px-4 max-w-screen-xl mx-auto">
      <span className="uppercase font-bold text-info md:text-xl lg:text-2xl">
        Hello, my name is Victor
      </span>
      <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold">
        I&apos;m a software developer
      </h1>
    </div>
  );
}
