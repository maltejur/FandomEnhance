if (document.getElementById("fandomEnhanceInjected")) {
  throw new Error();
}

const test = document.createElement("div");
test.style.display = "none";
test.id = "fandomEnhanceInjected";
document.body.appendChild(test);

const navmenu = document.getElementsByClassName("wiki-tools wds-button-group");

const loginTab = document.createElement("a");
loginTab.href = `https://www.fandom.com/signin?redirect=${encodeURIComponent(
  window.location
)}`;
loginTab.classList = "wds-button wds-is-secondary";
loginTab.innerHTML = `<svg class="wds-icon wds-icon-small" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" class="wds-icon-tiny wds-icon"><path id="user-avatar-a" d="M12 11c-.965 0-1.75-.785-1.75-1.75S11.035 7.5 12 7.5s1.75.785 1.75 1.75S12.965 11 12 11m0-5.5a3.754 3.754 0 0 0-3.75 3.75A3.754 3.754 0 0 0 12 13a3.754 3.754 0 0 0 3.75-3.75A3.754 3.754 0 0 0 12 5.5m7.679 12.914c-1.987-2.104-4.727-3.289-7.679-3.289-2.953 0-5.692 1.185-7.679 3.289A9.955 9.955 0 0 1 2 12C2 6.486 6.486 2 12 2s10 4.486 10 10a9.956 9.956 0 0 1-2.321 6.414M12 22a9.995 9.995 0 0 1-6.25-2.187c1.613-1.719 3.844-2.688 6.25-2.688s4.637.969 6.249 2.688A9.993 9.993 0 0 1 12 22m0-22C5.383 0 0 5.383 0 12c0 3.268 1.294 6.33 3.651 8.63l.012.013A12 12 0 0 0 12 24h.036a12.008 12.008 0 0 0 8.306-3.363C22.701 18.341 24 15.273 24 12c0-6.617-5.383-12-12-12"></path></svg>`;

const notificationTab = document.createElement("div");
notificationTab.addEventListener("click", () => {
  setTimeout(() => {
    document
      .getElementsByClassName("wds-dropdown__toggle notifications__toggle")[0]
      .click();
  });
});
notificationTab.classList = "wds-button wds-is-secondary";
notificationTab.innerHTML = `<svg class="wds-icon wds-icon-small" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" class="wds-icon-tiny wds-icon"><path id="bell-a" d="M15 19a1 1 0 0 0-1 1c0 1.104-.897 2-2 2s-2-.896-2-2a1 1 0 1 0-2 0c0 2.205 1.794 4 4 4s4-1.795 4-4a1 1 0 0 0-1-1m-8.675-5l2.708-9.477A3.496 3.496 0 0 1 12.38 2c1.63 0 3.06 1.156 3.402 2.75L17.763 14H6.325zm11.411-9.668A5.507 5.507 0 0 0 12.38 0a5.505 5.505 0 0 0-5.27 3.975l-3.07 10.75A1 1 0 0 0 5 16h14a1 1 0 0 0 .977-1.209l-2.24-10.459z"></path></svg>`;

const loggedIn = document.getElementsByClassName("notifications").length > 0;

if (loggedIn) {
  window.addEventListener("load", () => {
    addToNavmenu(notificationTab);
    copyOldDropdown(
      document.getElementsByClassName(
        "wds-dropdown wds-open-to-right is-attached-to-bottom"
      )[1]
    );
    try {
      document.getElementsByClassName(
        "wiki-tools wds-button-group"
      )[1].children[4].children[0].style.borderRadius = 0;
    } catch (e) {}
  });
} else {
  addToNavmenu(loginTab);
}

function addToNavmenu(item) {
  for (const el of navmenu) {
    el.appendChild(item);
  }
}

function copyOldDropdown(el) {
  const oldBtn = el;
  oldBtn.classList = "wds-button wds-is-secondary wds-dropdown";

  oldBtn.getElementsByClassName("global-navigation__icon")[0].classList = "";
  oldBtn.getElementsByClassName("wds-avatar")[0].classList = "";

  const svg = oldBtn.getElementsByTagName("svg")[0];
  svg.classList = "wds-icon-small wds-icon";

  addToNavmenu(oldBtn);
}
