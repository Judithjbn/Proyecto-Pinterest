import { createApi } from "unsplash-js";
import createCard from "../Card/Card.js";
import "./Gallery.css";

const unsplash = createApi({
  accessKey: import.meta.env.VITE_ACCESS_KEY,
});

export default async function Gallery(query = "mountains") {
  const fetchImages = async (keyword) => {
    try {
      const response = await unsplash.search.getPhotos({
        query: keyword,
        page: 1,
        perPage: 10, 
      });

      return response.response.results;
    } catch (error) {
      console.error("Error fetching images:", error);
      return [];
    }
  };

  const renderGallery = async () => {
    const images = await fetchImages(query);
    
    if (images.length === 0) {
      const catsImages = await fetchImages("cats");

      document.querySelector("main").innerHTML = `
        <p class="no-results">
          No se encontraron resultados para "${query}". Mostrando resultados para "cats". Intenta con otra palabra o frase.
        </p>
        <ul class="gallery">
          ${catsImages.map((image) => createCard(image)).join("")}
        </ul>
      `;
    } else {
      document.querySelector("main").innerHTML = `
        <ul class="gallery">
          ${images.map((image) => createCard(image)).join("")}
        </ul>
      `;
    }
  };

  await renderGallery();
}

Gallery();
