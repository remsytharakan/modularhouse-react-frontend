import React from 'react';
import { Box, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

function Videos({ videos, setVideos }) {
  const handleAddVideosClick = () => {
    document.getElementById('file-input').click();
  };

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setVideos(prevVideos => [...prevVideos, ...files]);
  };

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
            <Box key={index} sx={{ margin: 1 }}>
              <video
                src={URL.createObjectURL(video)}
                controls
                style={{ width: '200px', height: 'auto' }}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </div>
  );
}

export default Videos;