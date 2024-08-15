import { api } from "./api";

// Auth
export const register = (data) => {
    return api.post("/user/register", data);
};

export const verify = (id, data) => {
    return api.post(`/user/verify/${id}`, data);
};

export const login = (data) => {
    return api.post("/user/login", data);
};

export const forgot = (data) => {
    return api.post("/user/forgetpassword", data);
};

export const reset = (data) => {
    return api.put("/user/resetpassword", data);
};

export const logout = () => {
    return api.get("/user/logout");
};

export const getCurrentUser = () => {
    return api.get("/user/getMyProfile");
};

export const updateProfile = (data) => {
    return api.put("/user/updateProfile", data);
};


// Categories
export const getAllCategories = () => {
    return api.get("/category/getAll");
};

export const getCategoryById = (id) => {
    return api.get(`/category/getCategoryById/${id}`);
};

export const postCategory = (data) => {
    return api.post("/category/create", data);
};

export const updateCategory = (id, data) => {
    return api.put(`category/updateCategory/${id}`, data);
};

export const deleteCategoryById = (id) => {
    return api.delete(`/category/deleteCategory/${id}`);
};

export const getSubcategoryById = (id) => {
    return api.get(`/category/getSubcategoryById/${id}`);
};


export const postSubCategory = (id,data) => {
    return api.post(`/category/create/subcategory/${id}`, data);
};

export const updateSubCategory = (id,subcategoryid, data) => {
    return api.put(`category/updateSubCategory/${id}/${subcategoryid}`, data);
};
export const deleteSubCategoryById = (id, subcategoryid) => {
    return api.delete(`category/deleteSubCategory/${id}/${subcategoryid}`);
};


//modules

export const getAllHouses = () => {
    return api.get("/house/getAll");
};

export const getHouseById = (id) => {
    return api.get(`/house/getHouseById/${id}`);
};

export const  createHouse = (data) => {
    return api.post("/house/create", data);
};

export const updateHouse = (id, data) => {
    return api.put(`house/updateHouse/${id}`, data);
};

export const  deleteHouseById = (id) => {
    return api.delete(`/house/deleteHouse/${id}`);
};

//customization

export const getCustomizationTypes = () => {
    return api.get("/customizationOption/getCustomizationTypes");
  };

export const getCustomizationOptionsByType = (type) => {
    return api.get(`/customizationOption/getCustomizationOptionsByType/${type}`);
};


