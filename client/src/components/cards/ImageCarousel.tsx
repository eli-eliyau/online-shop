import React, { useState, useEffect } from "react";
import { Box, CardMedia, IconButton, Typography } from "@mui/material";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

interface IProps {
    images: string[];
    interval: number;
}

const ImageCarousel = ({ images, interval }: IProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, interval);

    return () => clearInterval(intervalId);
  }, [images, interval]);

  return (
    <Box sx={{ position: 'relative', overflow: 'hidden',height:{
        xs:'70%',
        sm:'50%',
        md:'100%'
        },
        width:{
            xs:'100%',
            sm:'50%',
            md:'50%'  
            }
        }}  >
      {/* <IconButton sx={{ position: 'absolute', right: '0', top: '50%', transform: 'translateY(-50%)' ,background:'red' }} onClick={handlePrev}>
        <NavigateBeforeIcon />
      </IconButton>
      <IconButton sx={{ position: 'absolute', left: '0', top: '50%', transform: 'translateY(-50%)' }} onClick={handleNext}>
        <NavigateNextIcon />
      </IconButton> */}
      <Typography variant="body1" sx={{ position: 'absolute', bottom: '8px', right: '8px', backgroundColor: 'rgba(255, 255, 255, 0.5)', padding: '4px', borderRadius: '4px' }}>
        {currentImageIndex + 1}/{images.length}
      </Typography>
      {images.map((image, index) => (
        <CardMedia
          key={index}
          component="img"
          sx={{
            zIndex:-1,
            objectFit: "cover",
            borderRadius: "15px 15px 15px 15px",
            // display: 'block',
            maxWidth: '100%',
            // width:'100%',
            height: 'auto',
            position: 'absolute',
            transition: 'transform 1.5s ease',
            // transform: `translateX(${(index - currentImageIndex) * 100}%)`, // העברת התמונה באמצעות סיבוב
            transform: `translate(${(index - currentImageIndex) * 100}%, ${(index - currentImageIndex) * 100}%)`,
            // left: '0',
            // top: '0',
          }}
          src={image}
          alt={`Image ${index + 1}`}
        />
      ))}
    </Box>
  );
};

export default ImageCarousel;
