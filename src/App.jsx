import { useTabs } from "./utils";
import Reroute from "./components/Reroute";
import Export from "./components/Export";

function App() {
  const tabs = useTabs();

  const currentTabURL = tabs.length !== 0 ? tabs[0].url : "";

  console.log(tabs)

  return (
    <div className="w-96 bg-zinc-900 p-12">
      <header className="flex flex-col mb-16">
        <span className="text-2xl font-bold text-neutral-100">Kino</span>
        <span className="text-neutral-500">
          Export Kindle highlights to Notion
        </span>
      </header>
      <div className="mb-16 flex flex-col text-zinc-100 items-center">
        {currentTabURL.includes("https://read.amazon.com/notebook") ? (
          <Export />
        ) : (
          <Reroute />
        )}
      </div>
      <footer className="text-center w-full">
        <a
          href="https://www.flaticon.com/free-icons/marker"
          target="_blank"
          rel="noreferrer"
          className="text-zinc-500 text-xs"
        >
          Marker icons created by mavadee - Flaticon
        </a>
      </footer>
    </div>
  );
}

export default App;
