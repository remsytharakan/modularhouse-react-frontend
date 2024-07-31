import React from 'react';
import { Box, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

function Photos({ photos, setPhotos }) {
  const handleAddPhotosClick = () => {
    document.getElementById('file-input').click();
  };

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setPhotos(prevPhotos => [...prevPhotos, ...files]);
  };

  return (
    <div>
      <Box>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{
            backgroundColor: '#1bc5bd',
            textTransform: 'none',
            color: '#ffffff',
            fontFamily: 'Poppins, var(--default-font-family)',
            fontSize: '16px',
            fontWeight: 600,
          }}
          onClick={handleAddPhotosClick}
        >
          Add Photos
        </Button>
        <input
          id="file-input"
          type="file"
          accept="image/*"
          multiple
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
      </Box>

      <Box sx={{ marginTop: 2 }}>
        {photos.map((photo, index) => (
          <img
            key={index}
            src={URL.createObjectURL(photo)}
            alt={`Selected ${index}`}
            style={{ width: '100px', height: '100px', margin: '5px' }}
          />
        ))}
      </Box>
    </div>
  );
}

export default Photos;