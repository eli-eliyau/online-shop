import { Box } from "@mui/material";
import React from "react";
import ReactImageMagnify, { SmallImageType } from "react-image-magnify";

interface IProps {
  img: string | undefined;
}

const Img: React.FC<IProps> = ({ img }) => {
  return (
    <Box sx={{ direction: "rtl", borderRadius: "10px", overflow: "hidden" }}>
      <ReactImageMagnify
        {...{
          smallImage: {
            alt: "תמונה קטנה",
            src: `data:image/png;base64,${img}`,
            isFluidWidth: true,
          },
          largeImage: {
            alt: "תמונת זום",
            src: `data:image/png;base64,${img}`,
            width: 800,
            height: 800,
          },
          enlargedImagePosition: "over",
          isHintEnabled: true,
        }}
      />
    </Box>
  );
};

export default Img;
