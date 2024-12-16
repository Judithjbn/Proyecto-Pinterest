import "./Footer.css";

export default function Footer() {
    const templateFooter = () => {
        return `
          <h4>Copyright 2024 - Inspirest - Rock the Code</h4>
          `
      }
      
      const printFooterTemplate = () => {
        document.querySelector("footer").innerHTML = templateFooter()
      }

      return {
        render: printFooterTemplate,
      };
    }
