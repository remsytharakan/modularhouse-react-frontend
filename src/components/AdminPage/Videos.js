import React, { useEffect } from 'react';
import { Box, Button, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

function Videos({ videos, setVideos }) {
  const handleAddVideosClick = () => {
    document.getElementById('file-input').click();
  };

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setVideos(prevVideos => [...prevVideos, ...files]);
  };

  const handleDeleteVideo = (index) => {
    setVideos(prevVideos => prevVideos.filter((_, i) => i !== index));
  };

  useEffect(() => {
    // Clean up URLs when component unmounts
    return () => {
      videos.forEach(video => URL.revokeObjectURL(video.preview));
    };
  }, [videos]);

  return (
    <div>
      <Box paddingRight='3%'>
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
            onClick={handleAddVideosClick}
          >
            Add Videos
          </Button>
          <input
            id="file-input"
            type="file"
            accept="video/*"
            multiple
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
        </Box>

        <Box sx={{ marginTop: 2, display: 'flex', flexWrap: 'wrap' }}>
          {videos.map((video, index) => (
            <Box key={index} sx={{ position: 'relative', margin: 1 }}>
              <video
                src={URL.createObjectURL(video)}
                controls
                style={{ width: '500px', height: 'auto' }}
              />
              <IconButton
                sx={{
                  position: 'absolute',
                  top: 8,
                  right: 8,
                  backgroundColor: 'rgba(255, 255, 255, 10)',
                  '&:hover': { backgroundColor: 'rgba(255, 255, 255, 15)' },
                }}
                onClick={() => handleDeleteVideo(index)}
              >
                <DeleteIcon />
              </IconButton>
            </Box>
          ))}
        </Box>
      </Box>
    </div>
  );
}

export default Videos;
