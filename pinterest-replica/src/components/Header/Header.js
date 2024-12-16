import "./Header.css";
import { searchIcon, profileIcon, darkModeIcon } from "../../assets/icons/icons.js";

export default function Header() {
    const headerTemplate = () => {
        return `
        <h1>P</h1>
        <input type="text" placeholder="Search"id="searchinput"/>
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
  };

  const listeners = () => {
    const darkmodebtn = document.querySelector("#darkmodebtn");
    darkmodebtn.addEventListener("click", () => {
      themeSwitch();
      const theme = document.body.classList.contains("dark");
      const darkModeIcon = document.querySelector("#darkmodeicon");
      darkModeIcon.src = theme ? "${darkModeIcon}" : "${darkModeIcon}";
    });
  };

  const printHeaderTemplate = () => {
    document.querySelector("header").innerHTML = headerTemplate();
    listeners();
  };

  return {
    render: printHeaderTemplate,
  };
}