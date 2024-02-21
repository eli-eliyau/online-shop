import { Box } from "@mui/material";
import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const Gallery = () => {
  const images = [
    {
      original:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdfE_R9l1kn5vq-JzUm-xSg3iWcpeWedsU5g&usqp=CAU",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdfE_R9l1kn5vq-JzUm-xSg3iWcpeWedsU5g&usqp=CAU",
      description: "תמונה 1",
    },
    {
      original:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdfE_R9l1kn5vq-JzUm-xSg3iWcpeWedsU5g&usqp=CAU",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdfE_R9l1kn5vq-JzUm-xSg3iWcpeWedsU5g&usqp=CAU",
      description: "תמונה 2",
    },
    {
      original:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdfE_R9l1kn5vq-JzUm-xSg3iWcpeWedsU5g&usqp=CAU",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdfE_R9l1kn5vq-JzUm-xSg3iWcpeWedsU5g&usqp=CAU",
      description: "תמונה 3",
    },
  ];

  return (
    <Box
      sx={{
        width: {
          xs: "90%",
          sm: "45%",
          xl: "70%",
        },
        height: "90%",
      }}
    >
      <ImageGallery items={images} autoPlay slideInterval={3000} />
    </Box>
  );
};

export default Gallery;
