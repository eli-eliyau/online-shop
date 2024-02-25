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
          sm: "50dvw",
          xl: "50dvw",
        },
        boxShadow:
          "5px 5px 15px 5px #FF8080, -9px 5px 15px 5px #FFE488, -7px -5px 15px 5px #8CFF85, 12px -5px 15px 5px #80C7FF, 12px 10px 15px 7px #E488FF, -10px 10px 15px 7px #FF616B, -10px -7px 27px 1px #8E5CFF, 5px 5px 15px 5px rgba(0,0,0,0)",
      }}
    >
      <ImageGallery items={images} autoPlay slideInterval={3000} />
    </Box>
  );
};

export default Gallery;
