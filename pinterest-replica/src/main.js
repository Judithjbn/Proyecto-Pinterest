import "./style.css";
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
import Gallery from "./components/Gallery/Gallery.js";

const header = new Header();
header.render();

const gallery = new Gallery();
gallery.render();

const footer = new Footer();
footer.render();
