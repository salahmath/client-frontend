import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  // Styles for the image button
}));

// Other styled components...

export default function ButtonBaseDemo({ images }) {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
      {images.map((image, index) => (
        <ImageButton
          focusRipple
          key={index}
          style={{
            width: image.width,
          }}
        >
          {/* Render your images here */}
          <img src={image.url} alt={image.title} style={{ width: '100%' }} />
          <Typography variant="subtitle1" color="inherit">
            {image.title}
          </Typography>
        </ImageButton>
      ))}
    </Box>
  );
}
