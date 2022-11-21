function saveOptions(e) {
  e.preventDefault();
  console.log("saving?")
  browser.storage.sync.set({
    mastodon_instance: document.querySelector("#instance_url").value
  });
}

function restoreOptions() {
  function setCurrentChoice(result) {
    document.querySelector("#instance_url").value = result.instance || "";
  }

  function onError(error) {
    console.log(`Error: ${error}`);
  }

  let getting = browser.storage.sync.get("mastodon_instance");
  getting.then(setCurrentChoice, onError);
}


document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);