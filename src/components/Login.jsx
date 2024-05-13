import { checkExtension } from "../utils";
import Button from "./Button";

const NOTION_OAUTH_URL =
  "https://api.notion.com/v1/oauth/authorize?client_id=d1077d8c-5a6c-4ba0-b060-03b89dd8bc56&response_type=code&owner=user&redirect_uri=https%3A%2F%2Fakvashi.dev%2Fnotion";

export default function Reroute() {
  const handleClick = () => {
    checkExtension();
    chrome?.tabs.create({
      url: NOTION_OAUTH_URL,
      active: true,
    });
  };

  return (
    <>
      <span className="block mb-4 text-xs">
        {"It seems like you're not on the Kindle web page"}
      </span>
      <div onClick={handleClick}>
        <Button>Login</Button>
      </div>
    </>
  );
}
