import React, { useState } from "react";
import styles from "../../../styles/Home.module.css";
import { useRouter } from "next/router";

interface Button {
  title: string;
  description: string;
  link: string;
}

const Gallery = () => {
  const router = useRouter();
  const buttonsData: Button[] = [
    {
      title: "createweb3ui.xyz",
      description: "Fast and simple Web3 frontend template",
      link: "https://createweb3ui.xyz",
    },
    {
      title: "Aave Flashloan Demo",
      description: "Starter contracts and development guide",
      link: "https://github.com/defispartan/testnet-flash-liquidity",
    },
    {
      title: "Fullstack Starter Kit",
      description: "Frontend + backend template powered by PocketBase",
      link: "https://github.com/defispartan/fullstack-starter-kit",
    },
    {
      title: "Hello World Open Action",
      description: "Contract and UI template for Lens open action",
      link: "https://github.com/defispartan/lens-hello-world-open-action",
    },
    {
      title: "mylenny.xyz",
      description: "View Lens Profile NFT image",
      link: "https://mylenny.xyz",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const handleClick = (url: string) => {
    router.prefetch(url);
    window.open(url, "_blank");
  };

  const handleButtonHover = (index: number) => {
    setHoveredIndex(index);
  };

  const handleButtonLeave = () => {
    setHoveredIndex(-1);
  };

  const numRows = Math.ceil(buttonsData.length / 3);

  return (
    <div className={styles.galleryContainer}>
      {Array.from({ length: numRows }).map((_, rowIndex) => (
        <div key={rowIndex} className={styles.galleryRow}>
          {buttonsData
            .slice(rowIndex * 3, (rowIndex + 1) * 3)
            .map((button, index) => (
              <button
                key={index}
                onClick={() => handleClick(button.link)}
                className={`${styles.iconButton} ${styles.galleryButton} ${
                  hoveredIndex === rowIndex * 3 + index ? styles.hovered : ""
                }`}
                onMouseEnter={() => handleButtonHover(rowIndex * 3 + index)}
                onMouseLeave={handleButtonLeave}
              >
                <p>
                  {hoveredIndex === rowIndex * 3 + index
                    ? button.description
                    : button.title}
                </p>
              </button>
            ))}
        </div>
      ))}
    </div>
  );
};

export default Gallery;
