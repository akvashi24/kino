import { checkExtension, useTabs } from "../utils";
import Button from "./Button";

export default function Export() {
  const tabs = useTabs();
  const handleClick = () => {
    checkExtension();
    const currentTab = tabs[0];
    chrome.tabs
      .sendMessage(currentTab.id, {
        action: "export",
      })
      .then((result) => console.log(result));
    console.log("sent!");
  };
  return (
    <>
      <span className="block mb-4 text-xs">It's go time!</span>
      <div onClick={handleClick}>
        <Button>Export Kindle Highlights</Button>
      </div>
    </>
  );
}
