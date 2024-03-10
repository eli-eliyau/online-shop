import { Box, Typography } from "@mui/material";
import img3 from "../../assets/img3.jpeg";

const ImageOverlayText = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "20rem",
        display: "inline-block",
        color: "#ffffff",
        padding: "20px",
        overflow: "hidden",
        marginTop: 5,
      }}
    >
      <Typography
        variant="h1"
        component="h1"
        sx={{
          fontSize: "4rem",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        fontWeight: "bold",
        
          
        }}
      >
        SHOP ONLINE
      </Typography>
      <img
        src={img3}
        alt="Background Image"
        style={{
          width: "100%",
          height: "50rem",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
      <Typography
        variant="body1"
        component="p"
        sx={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
        }}
      >
        Additional text if needed
      </Typography>
    </Box>
  );
};

export default ImageOverlayText;
