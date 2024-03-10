import { Box } from "@mui/material";
import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { ImagesSlider } from "./ImagesSlider";

const Gallery = () => {
  const images = [
    {
      original:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdfE_R9l1kn5vq-JzUm-xSg3iWcpeWedsU5g&usqp=CAU",
      // thumbnail:
      //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdfE_R9l1kn5vq-JzUm-xSg3iWcpeWedsU5g&usqp=CAU",
      description: "תמונה 1",
    },
    {
      original:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdfE_R9l1kn5vq-JzUm-xSg3iWcpeWedsU5g&usqp=CAU",
      // thumbnail:
      //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdfE_R9l1kn5vq-JzUm-xSg3iWcpeWedsU5g&usqp=CAU",
      description: "תמונה 2",
    },
    {
      original:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdfE_R9l1kn5vq-JzUm-xSg3iWcpeWedsU5g&usqp=CAU",
      // thumbnail:
      //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdfE_R9l1kn5vq-JzUm-xSg3iWcpeWedsU5g&usqp=CAU",
      description: "תמונה 3",
    },
  ];

const img =[
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdfE_R9l1kn5vq-JzUm-xSg3iWcpeWedsU5g&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdfE_R9l1kn5vq-JzUm-xSg3iWcpeWedsU5g&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdfE_R9l1kn5vq-JzUm-xSg3iWcpeWedsU5g&usqp=CAU",
]

  return (
    <Box
      sx={{
        position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" ,

        width: {
          xs: "70vw",
          sm: "35dvw",
          xl: "35dvw",
        },
          boxShadow: " 0px 0px 0px 9px rgba(221,190,168,0), 0px 0px 0px 9px rgba(39,62,71,0), 0px 0px 20px 5px rgba(39,62,71,0.93)"
        }}
    >
      {/* <ImagesSlider images={img}  >sdfsfdsfs</ImagesSlider> */}
      <ImageGallery items={images} autoPlay slideInterval={3000} />
    </Box>
  );
};

export default Gallery;
