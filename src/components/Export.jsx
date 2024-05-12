import Button from "./Button";

export default function Export() {
  const handleClick = () => {};
  return (
    <>
      <span className="block mb-4 text-xs">It's go time!</span>
      <div onClick={handleClick}>
        <Button>Export Kindle Highlights</Button>
      </div>
    </>
  );
}
