import { createApi } from "unsplash-js";
import createCard from "../Card/Card.js";
import "./Gallery.css";

const unsplash = createApi({
  accessKey: import.meta.env.VITE_ACCESS_KEY,
});

export default async function Gallery(query = "mountains") {
  const fetchImages = async () => {
    try {
      const response = await unsplash.search.getPhotos({
        query: query,
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
    const images = await fetchImages();

    const galleryHTML = images
      .map((image) => createCard(image))
      .join("");

    document.querySelector("main").innerHTML = `
      <ul class="gallery">
        ${galleryHTML}
      </ul>
    `;
  };

  await renderGallery();
}

Gallery();
