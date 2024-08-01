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
  const [photos, setPhotos] = useState([]);
  const [videos, setVideos] = useState([]);
 
  const [basicInfo, setBasicInfo] = useState({
    name: '',
    description: '',
    basicPrice: '',
    customfloor: '',
    category: '',
    subcategory: '',
    lowerFloorItems: [],
    firstFloorItems: [],
    secondFloorItems: []
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

   
    photos.forEach((photo, index) => {
      formData.append('photos', photo);
    });

    videos.forEach((video, index) => {
      formData.append(`videos`, video);
    });

   
    formData.append("name", basicInfo.name);
    formData.append("description", basicInfo.description);
    formData.append("basicPrice", basicInfo.basicPrice);
    formData.append("customfloor", basicInfo.customfloor);
    formData.append("category", basicInfo.category);
    formData.append("subcategory", basicInfo.subcategory);
    formData.append("lowerFloorItems", JSON.stringify(basicInfo.lowerFloorItems));
    formData.append("firstFloorItems", JSON.stringify(basicInfo.firstFloorItems));
    formData.append("secondFloorItems", JSON.stringify(basicInfo.secondFloorItems));

    



    try {
      let res;
      if (houseId) {
        
        res = await updateHouse(houseId, formData);
      } else {
       
        res = await createHouse(formData);
      }
      
      toast.success(res?.data?.message);

     
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
            name: houseData?.name,
            description: houseData?.description,
            basicPrice: houseData?.basicPrice,
            customfloor: houseData?.customfloor,
            category: houseData?.category?._id || '',
            subcategory: houseData?.subcategory?._id || '',
            lowerFloorItems: houseData?.lowerFloorItems || [],
            firstFloorItems: houseData?.firstFloorItems || [],
            secondFloorItems: houseData?.secondFloorItems || [],
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
  
          if (houseData.videos && houseData.videos.length > 0) {
            setVideos(houseData.videos.map(videoUrl => new File([], videoUrl)));
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
          <Photos photos={photos} setPhotos={setPhotos} />
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
