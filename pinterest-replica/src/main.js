import "./style.css";
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
import Gallery from "./components/Gallery/Gallery.js";

const startGallery = (query = "space astronaut") => Gallery(query);

const header = new Header(startGallery);
header.render();

startGallery();

const footer = new Footer();
footer.render();
