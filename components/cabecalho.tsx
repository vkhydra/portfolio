import Image from "next/image";
export default function Cabecalho() {
  return (
    <div className="flex flex-col lg:flex-row p-8 gap-8">
      <div className="self-center">
        <Image
          src="/victor-kulessa.jpg"
          alt="Foto de Perfil de Victor Kulessa"
          width={460}
          height={460}
          className="rounded-full border-8 border-neutral w-56"
        />
      </div>
    </div>
  );
}
