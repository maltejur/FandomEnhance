const navmenu = document.getElementsByClassName(
  "wds-community-header__local-navigation"
)[0].children[0];
const loggedIn = !!document.getElementsByClassName(
  "wds-global-navigation__user-logged-in"
)[0];

const searchTab = document.createElement("li");
searchTab.classList.add("wds-tabs__tab");
searchTab.innerHTML = `
<div class="wds-tabs__tab-label">
  <a href="/wiki/Special:Search">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 18 18" class="wds-icon-tiny wds-icon"><path d="M11.563 11.504l-.03.029-.03.031A4.984 4.984 0 0 1 8 13c-2.757 0-5-2.243-5-5s2.243-5 5-5c2.756 0 5 2.243 5 5a4.983 4.983 0 0 1-1.437 3.504m5.144 3.789l-3.103-3.103A6.963 6.963 0 0 0 15 8c0-3.859-3.141-7-7-7-3.86 0-7 3.141-7 7s3.14 7 7 7a6.956 6.956 0 0 0 4.189-1.396l3.103 3.103a1.001 1.001 0 0 0 1.415-1.414" fill-rule="evenodd"></path></svg>
    <span class="collapseIfSmall">Search</span>
  </a>
</div>
`;

const loginTab = document.createElement("li");
loginTab.classList.add("wds-tabs__tab");
loginTab.innerHTML = `
<div class="wds-tabs__tab-label">
  <a href="https://www.fandom.com/signin?redirect=${encodeURIComponent(
    window.location
  )}">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" class="wds-icon-tiny wds-icon"><path id="user-avatar-a" d="M12 11c-.965 0-1.75-.785-1.75-1.75S11.035 7.5 12 7.5s1.75.785 1.75 1.75S12.965 11 12 11m0-5.5a3.754 3.754 0 0 0-3.75 3.75A3.754 3.754 0 0 0 12 13a3.754 3.754 0 0 0 3.75-3.75A3.754 3.754 0 0 0 12 5.5m7.679 12.914c-1.987-2.104-4.727-3.289-7.679-3.289-2.953 0-5.692 1.185-7.679 3.289A9.955 9.955 0 0 1 2 12C2 6.486 6.486 2 12 2s10 4.486 10 10a9.956 9.956 0 0 1-2.321 6.414M12 22a9.995 9.995 0 0 1-6.25-2.187c1.613-1.719 3.844-2.688 6.25-2.688s4.637.969 6.249 2.688A9.993 9.993 0 0 1 12 22m0-22C5.383 0 0 5.383 0 12c0 3.268 1.294 6.33 3.651 8.63l.012.013A12 12 0 0 0 12 24h.036a12.008 12.008 0 0 0 8.306-3.363C22.701 18.341 24 15.273 24 12c0-6.617-5.383-12-12-12"></path></svg>
    <span class="collapseIfSmall">Login</span>
  </a>
</div>
`;

navmenu.appendChild(searchTab);

if (loggedIn) {
  window.addEventListener("load", () => {
    navmenu.appendChild(
      copyOldDropdown(
        document.getElementsByClassName(
          "wds-global-navigation__user-menu wds-global-navigation__user-logged-in"
        )[0]
      )
    );
    navmenu.appendChild(
      copyOldDropdown(
        document.getElementsByClassName(
          "wds-global-navigation__notifications-dropdown"
        )[0]
      )
    );
    navmenu.appendChild(
      copyOldDropdown(document.getElementById("notificationsEntryPoint"))
    );
  });
} else {
  navmenu.appendChild(loginTab);
}

function copyOldDropdown(el) {
  const newTab = document.createElement("li");
  newTab.classList.add("wds-tabs__tab");

  const oldBtn = el;
  oldBtn.classList = "wds-dropdown";
  oldBtn.style.padding = "1em 0.5em 1em 1em";

  oldBtn.style.color = "white";

  const svg = oldBtn.getElementsByTagName("svg")[0];
  svg.classList = "wds-icon-tiny wds-icon";

  newTab.appendChild(oldBtn);

  return newTab;
}
