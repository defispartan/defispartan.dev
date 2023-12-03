import React, { useState } from "react";
import styles from "../../../styles/Home.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

const Gallery = () => {
  const router = useRouter();

  const buttonsData = [
    {
      title: "mylenny.xyz",
      description: "Tool to view Lens Profile NFT image",
    },
  ];

  const [hoveredDescriptions, setHoveredDescriptions] = useState(
    Array(buttonsData.length).fill("")
  );

  const handleClick = (url: string) => {
    router.prefetch(url);
    window.open(url, "_blank");
  };

  const handleButtonHover = (index: number, description: string) => {
    const updatedHoveredDescriptions = [...hoveredDescriptions];
    updatedHoveredDescriptions[index] = description;
    setHoveredDescriptions(updatedHoveredDescriptions);
  };

  return (
    <div className={styles.galleryRow}>
      {buttonsData.map((button, index) => (
        <button
          key={index}
          onClick={() => handleClick("https://mylenny.xyz")}
          className={`${styles.iconButton} ${styles.galleryButton}`}
          onMouseEnter={() => handleButtonHover(index, button.description)}
          onMouseLeave={() => handleButtonHover(index, "")}
        >
          <p>{hoveredDescriptions[index] || button.title}</p>
        </button>
      ))}
    </div>
  );
};

export default Gallery;
