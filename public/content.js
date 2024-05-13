console.log("we outchea");

const getAllBooks = () => {
  const nodes = document
    .getElementById("kp-notebook-library")
    .getElementsByTagName("a");
  return Array.from(nodes);
};

const getCurrentBookDetails = () => {
  const header = document.querySelector(
    ".a-row.a-spacing-top-extra-large.kp-notebook-annotation-container"
  );
  const title = header.querySelector(
    ".a-spacing-top-small.a-color-base.kp-notebook-selectable.kp-notebook-metadata"
  ).innerHTML;
  const author = header.querySelector(
    ".a-spacing-none.a-spacing-top-micro.a-size-base.a-color-secondary.kp-notebook-selectable.kp-notebook-metadata"
  ).innerHTML;
  return { title, author };
};

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const getCurrentHighlights = () => {
  const result = [];
  const container = document.getElementById("kp-notebook-annotations");
  const infoNodes = Array.from(
    container.querySelectorAll("#annotationHighlightHeader")
  );
  const textNodes = Array.from(container.querySelectorAll("#highlight"));
  infoNodes.forEach((infoNode, index) => {
    let addition = {
      info: infoNode.innerHTML,
      text: textNodes[index].innerHTML,
    };
    result.push(addition);
  });
  return result;
};

const getAllHighlights = async () => {
  const sidebar = document.querySelector("#kp-notebook-library");
  const bookLinks = Array.from(sidebar.getElementsByTagName("a"));
  console.log(bookLinks.map((e) => e.innerText));
  for (const link of bookLinks) {
    link.click();
    await sleep(2500);
    console.log({
      ...getCurrentBookDetails(),
      highlights: getCurrentHighlights(),
    });
  }
};

chrome.runtime.onMessage.addListener((message, sender, sendMessage) => {
  console.log(message);
  if (message.action === "export") {
    getAllHighlights();
    sendMessage({ books: [{ title: "The Name of the Wind" }] });
  }
});
