import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Typography, Button } from '@mui/material';
import Navbar from '../../Dashboard/AdminNavbar';
import Sidebar from '../../Dashboard/Sidebar';
import Basicinfo from './Basicinfo';
import Photos from './Photos';
import Videos from './Videos';
import toast, { Toaster } from 'react-hot-toast';
import { createHouse, updateHouse, getHouseById, getAllCategories } from '../../Services/AdminServices';
import { useNavigate, useParams } from 'react-router-dom';

export default function LabTabs() {
  const { houseId } = useParams();
  const navigate = useNavigate();
  const [value, setValue] = useState('1');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [newImages, setNewImages] = useState([]);
  const [existingImages, setExistingImages] = useState([]);
  const [videos, setVideos] = useState([]);

  const [basicInfo, setBasicInfo] = useState({
    name: '',
    description: '',
    basicPrice: '',
    customfloor: '',
    category: '',
    subcategory: '',
    floors: '',
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const updateBasicInfo = (newInfo) => {
    setBasicInfo(prevInfo => ({ ...prevInfo, ...newInfo }));
  };

  const handleSave = async () => {
    let error = false;
    // Validate required fields
    if (!basicInfo.name) {
      toast.error('House name is required');
      error = true;
    }
    if (!basicInfo.description) {
      toast.error('Description is required');
      error = true;
    }
    if (!basicInfo.basicPrice) {
      toast.error('Basic price is required');
      error = true;
    }
    if (!basicInfo.category) {
      toast.error('Category is required');
      error = true;
    }
    if (!basicInfo.subcategory) {
      toast.error('Subcategory is required');
      error = true;
    }
  
    if (error) return;
  
    const formData = new FormData();
    
    newImages.forEach((image) => {
      formData.append('newImages', image.file);
    });
  
    formData.append('existingImages', JSON.stringify(existingImages));

    videos.forEach((video) => {
      if (video.file) {
        formData.append('videos', video.file);
      }
    });
  
    // Append other fields
    Object.keys(basicInfo).forEach(key => {
      if (key === 'floors') {
        formData.append(key, JSON.stringify(basicInfo[key]));
      } else {
        formData.append(key, basicInfo[key]);
      }
    });
  
    try {
      let res;
      if (houseId) {
        res = await updateHouse(houseId, formData);
      } else {
        res = await createHouse(formData);
      }
  
      toast.success(res?.data?.message || 'Operation successful');
  
      if (res.data.house && res.data.house.images) {
        setExistingImages(res.data.house.images);
        setNewImages([]);
      }
      
      setTimeout(() => {
        navigate('/admin/modules');
      }, 2000);
    } catch (err) {
      toast.error(err.response?.data?.message || 'An error occurred');
    }
  };
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriesResponse = await getAllCategories();
        const categoriesData = categoriesResponse?.data?.categories || [];
  
        if (houseId) {
          const houseResponse = await getHouseById(houseId);
          const houseData = houseResponse?.data?.house;
  
          setBasicInfo({
            name: houseData?.name || '',
            description: houseData?.description || '',
            basicPrice: houseData?.basicPrice || '',
            customfloor: houseData?.customfloor || '',
            category: houseData?.category || '',
            subcategory: houseData?.subcategory || '',
            floors: houseData?.floors || [],
            categories: categoriesData,
            subcategories: []
          });

          const selectedCategory = categoriesData.find(cat => cat._id === houseData?.category?._id);
          if (selectedCategory) {
            setBasicInfo(prevState => ({
              ...prevState,
              subcategories: selectedCategory.subcategories || []
            }));
          }
  
          if (houseData?.images && Array.isArray(houseData.images)) {
            setExistingImages(houseData.images);
          }

          if (houseData?.videos && Array.isArray(houseData.videos)) {
            setVideos(houseData.videos.map(video => ({
              ...video,
              preview: video.url  
            })));
          }
        } else {
          setBasicInfo(prevState => ({
            ...prevState,
            categories: categoriesData,
            subcategories: []
          }));
        }
      } catch (err) {
        toast.error(err.response?.data?.message || 'Failed to fetch data');
      }
    };
  
    fetchData();
  }, [houseId]);

  return (
    <Box sx={{ ml: [4, 25, 25], mt: [12, 15, 15], mr: [1, 1, 1] }}>
      <Navbar onMenuOpen={handleDrawerOpen} />
      <Sidebar open={drawerOpen} onClose={handleDrawerClose} />
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
          {houseId ? "Edit Module" : "New Module"}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSave}
          sx={{ mt: 2, marginRight: 10 }}
        >
          {houseId ? "Update" : "Save"}
        </Button>
      </Box>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Basic info" value="1" />
            <Tab label="Photos" value="2" />
            <Tab label="Videos" value="3" />
            <Tab label="Documents" value="4" />
            <Tab label="Possible Extensions" value="5" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Basicinfo basicInfo={basicInfo} updateBasicInfo={updateBasicInfo} houseId={houseId} />
        </TabPanel>
        <TabPanel value="2">
          <Photos 
            newImages={newImages} 
            setNewImages={setNewImages} 
            existingImages={existingImages} 
            setExistingImages={setExistingImages} 
            houseId={houseId} 
          />
        </TabPanel>
        <TabPanel value="3">
          <Videos videos={videos} setVideos={setVideos} />
        </TabPanel>
        <TabPanel value="4">Documents</TabPanel>
        <TabPanel value="5">Possible Extensions</TabPanel>
      </TabContext>

      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          success: {
            style: {
              background: 'rgb(46, 125, 50)',
              color: 'white'
            },
            iconTheme: {
              primary: 'rgb(46, 125, 50)',
              secondary: 'white',
            },
          },
          error: {
            style: {
              background: 'rgb(211, 47, 47)',
              color: 'white'
            },
            iconTheme: {
              primary: 'rgb(211, 47, 47)',
              secondary: 'white',
            },
          },
        }}
      />
    </Box>
  );
}