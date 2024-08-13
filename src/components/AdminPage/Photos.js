import React, { useCallback } from 'react';
import { Box, Button, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDropzone } from 'react-dropzone';

function Photos({ newImages, setNewImages, existingImages, setExistingImages }) {
  const onDrop = useCallback((acceptedFiles) => {
    setNewImages((prevImages) => [
      ...prevImages,
      ...acceptedFiles.map((file) => ({
        file,
        preview: URL.createObjectURL(file),
      }))
    ]);
  }, [setNewImages]);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleDeleteNewImage = (index) => {
    setNewImages(prevImages => prevImages.filter((_, i) => i !== index));
  };

  const handleDeleteExistingImage = (index) => {
    setExistingImages(prevImages => prevImages.filter((_, i) => i !== index));
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
            marginBottom: 2,
          }}
          {...getRootProps()}
        >
          Add Photos
          <input {...getInputProps()} />
        </Button>
      </Box>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
        {existingImages.map((image, index) => (
          <Box key={image.public_id} sx={{ position: 'relative' }}>
            <img
              src={image.url}
              alt={`Existing ${index}`}
              style={{ width: '100px', height: '100px', objectFit: 'cover' }}
            />
            <IconButton
              sx={{
                position: 'absolute',
                top: 0,
                right: 0,
                backgroundColor: 'rgba(255, 255, 255, 0.7)',
                '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.9)' },
              }}
              onClick={() => handleDeleteExistingImage(index)}
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        ))}

        {newImages.map((image, index) => (
          <Box key={index} sx={{ position: 'relative' }}>
            <img
              src={image.preview}
              alt={`New ${index}`}
              style={{ width: '300px', height: '300px', objectFit: 'cover' }}
            />
            <IconButton
              sx={{
                position: 'absolute',
                top: 0,
                right: 0,
                backgroundColor: 'rgba(255, 255, 255, 0.7)',
                '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.9)' },
              }}
              onClick={() => handleDeleteNewImage(index)}
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        ))}
      </Box>
    </div>
  );
}

export default Photos;