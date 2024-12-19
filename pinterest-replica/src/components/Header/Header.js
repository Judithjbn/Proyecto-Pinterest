import "./Header.css";
import { searchIcon, profileIcon, darkModeIcon, lightModeIcon } from "../../assets/icons/icons.js";

export default function Header(onSearch, resertDefault) {
  const headerTemplate = () => {
    return `
      <h1 id="logo" style="cursor: pointer;">P</h1>
      <input type="text" placeholder="Buscar" id="searchinput"/>
      <div class="icons">
        <button id="searchBtn">
        <img src="${searchIcon}" alt="Search icon"/>
      </button>
      <button id="darkmodebtn">
        <img src=${lightModeIcon} alt="Dark mode icon" id="darkmodeicon" />
      </button>
      <img src=${profileIcon} alt="Profile image" class="profileimg" />
      </div>
    `;
  };

  const themeSwitch = () => {
    document.body.classList.toggle("dark");
    const theme = document.body.classList.contains("dark");
    const darkModeIconEl = document.getElementById("darkmodeicon");
    darkModeIconEl.src = theme ? darkModeIcon : lightModeIcon;
  };

  const listeners = () => {
    const darkmodebtn = document.getElementById("darkmodebtn");
    const searchBtn = document.getElementById("searchBtn");
    const searchInput = document.getElementById("searchinput");
    const logo = document.getElementById("logo");

    searchBtn.addEventListener("click", () => {
      const query = searchInput.value.trim();
      if (query) {
        onSearch(query);
        searchInput.value = " ";
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



    logo.addEventListener("click", () => {
      resertDefault();
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
