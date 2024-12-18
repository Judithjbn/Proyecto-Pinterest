import "./Header.css";
import { searchIcon, profileIcon, darkModeIcon } from "../../assets/icons/icons.js";

export default function Header(onSearch) {
  const headerTemplate = () => {
    return `
      <h1>P</h1>
      <input type="text" placeholder="Search" id="searchinput"/>
      <button id="searchBtn">
        <img src="${searchIcon}" alt="Search icon"/>
      </button>
      <button id="darkmodebtn">
        <img src=${darkModeIcon} alt="Dark mode icon" id="darkmodeicon" />
      </button>
      <img src=${profileIcon} alt="Profile image" class="profileimg" />
    `;
  };

  const themeSwitch = () => {
    document.body.classList.toggle("dark");
    const theme = document.body.classList.contains("dark");
    const darkModeIconEl = document.getElementById("darkmodeicon");
    darkModeIconEl.src = theme ? "./icons/light.svg" : "./icons/dark.svg";
  };

  const listeners = () => {
    const darkmodebtn = document.getElementById("darkmodebtn");
    const searchBtn = document.getElementById("searchBtn");
    const searchInput = document.getElementById("searchinput");

    searchBtn.addEventListener("click", () => {
      const query = searchInput.value.trim();
      if (query) {
        onSearch(query);
        searchInput.value = "";
      }
    });

    searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        const query = searchInput.value.trim();
        if (query) {
          onSearch(query);
          searchInput.value = "";
        }
      }
    });

    darkmodebtn.addEventListener("click", themeSwitch);
  };

  const printHeaderTemplate = () => {
    document.querySelector("header").innerHTML = headerTemplate();
    listeners();
  };

  return {
    render: printHeaderTemplate,
  };
}
