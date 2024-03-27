export default function Rodape() {
  return (
    <div className="mt-16 p-8 max-w-screen-xl mx-auto  gap-8">
      <div className="flex justify-evenly">
        <span>
          &copy; {new Date().getFullYear()} Victor Bruno Kulessa. The copyright
          holder reserves all rights to the content of this material.
        </span>
      </div>
    </div>
  );
}
