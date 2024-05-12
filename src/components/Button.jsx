export default function Button({ children }) {
  return (
    <div className="cursor-pointer inline-block px-3 py-2 rounded-md border-2 border-zinc-100 shadow-zinc-100 text-zinc-100 text-center mx-auto">
      {children}
    </div>
  );
}
