import { useState, useEffect } from "react";

export async function getTabs() {
  let queryOptions = { active: true, lastFocusedWindow: true };
  // `tab` will either be a `tabs.Tab` instance or `undefined`.
  let result = await chrome.tabs.query(queryOptions);
  return result;
}

export function useTabs() {
  const [tabs, setTabs] = useState([]);

  useEffect(() => {
    if (chrome === undefined || chrome.tabs === undefined) {
      setTabs([
        { url: "hhttps://read.amazon.comnotebookttps://localhost:3000" },
      ]);
    } else {
      const tabs = getTabs();
      tabs.then((result) => setTabs(result));
    }
  }, [chrome]);

  return tabs;
}
