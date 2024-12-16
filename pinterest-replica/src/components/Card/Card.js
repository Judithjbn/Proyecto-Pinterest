import "./Card.css";
import { iconUpload, iconMore } from "../../assets/icons/icons.js";

export default function createCard(item) {
  return `
    <li class="gallery-card" style="background-image: url(${item.urls.regular}); border: 10px solid ${item.color}">
      <div class="info">
        <div class="save-btn">
          <button>Guardar</button>
        </div>
        <div class="links">
          <a href=${item.links.html} class="full-link" target="_blank">${item.links.html}</a>
          <div>
            <a href=${item.urls.full} target="_blank" class="links-icon">
              <img src="${iconUpload}" alt="Upload icon" />
            </a>
            <a href="#null" class="links-icon">
              <img src="${iconMore}" alt="More icon" />
            </a>    
          </div>
        </div>
      </div>
    </li>
  `;
}