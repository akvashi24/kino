import Button from "./Button";

export default function Reroute() {
  const handleClick = () => {
    if (chrome?.tabs === undefined) {
      console.error(
        "Unable to create new tab!  Check the chrome variable in console."
      );
    } else {
      chrome.tabs.create({
        url: "https://read.amazon.com/notebook",
        active: true,
      });
    }
  };

  return (
    <>
      <span className="block mb-4 text-xs">
        It seems like you're not on the Kindle web page
      </span>
      <div onClick={handleClick}>
        <Button>Go to Kindle Highlights</Button>
      </div>
    </>
  );
}
