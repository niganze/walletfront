import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
import { MdOutlineAddCircle } from 'react-icons/md';

const columns = (handleDeleteCategory) => [
  { field: "id", headerName: "ID", width: 50 },
  { field: "name", headerName: "Category Name", width: 200 },
  { field: "parentCategory", headerName: "Parent Category", width: 200 },
  {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="flex space-x-2">
          <button
            className="px-4 py-2 bg-orange-500 text-white text-sm font-medium rounded hover:bg-orange-600 transition"
            onClick={() => handleDeleteCategory(params.row._id)}
          >
            Delete
          </button>
        </div>
      );
    }
  }
];

function Category() {
  const [categories, setCategories] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [categoryData, setCategoryData] = useState({
    name: '',
    parentCategory: ''
  });

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("https://walletbacked.onrender.com/api/categories");
        if (response.status === 200) {
          const data = response.data.map((category, index) => ({
            id: index + 1,
            name: category.name,
            parentCategory: category.parentCategory ? category.parentCategory.name : "None",
            _id: category._id,
          }));
          setCategories(data);
        }
      } catch (error) {
        console.error("Error fetching categories:", error.message);
      }
    };

    fetchCategories();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCategoryData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitCategory = async () => {
    try {
      await axios.post("https://walletbacked.onrender.com/api/categories", categoryData);
      alert("Category added successfully!");
      setModalOpen(false);
      window.location.reload();
    } catch (error) {
      console.error("Error adding category:", error.message);
    }
  };

  // Function to handle deleting a category
  const handleDeleteCategory = async (categoryId) => {
    try {
      const response = await axios.delete(`http://localhost:5000/api/categories/${categoryId}`);
      if (response.status === 200) {
        alert("Category deleted successfully!");
        // Refresh the categories after deletion
        setCategories(categories.filter(category => category._id !== categoryId));
      }
    } catch (error) {
      console.error("Error deleting category:", error.message);
      alert("Failed to delete category");
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-[#0A1F95]">Categories</h2>
        <div className="flex items-center space-x-4">
          <button
            className="bg-orange-500 hover:bg-orange-600 text-sm font-medium text-white px-4 py-2 rounded-md transition"
            onClick={() => setModalOpen(true)}
          >
            <MdOutlineAddCircle className="inline-block mr-2" /> Add Category
          </button>
        </div>
      </div>

      {/* Data Grid to display categories */}
      <div className="bg-white shadow rounded-lg p-4">
        <DataGrid
          rows={categories}
          columns={columns(handleDeleteCategory)} // Pass handleDeleteCategory here
          pageSize={5}
          rowsPerPageOptions={[2, 5, 10, 25]}
          pagination
          getRowId={(row) => row._id}
          className="min-h-[400px]"
        />
      </div>

      {/* Modal for Adding Category */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-96 p-6 rounded-lg shadow-lg relative">
            <h3 className="text-lg font-bold text-[#0A1F95] mb-4">Add Category</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Category Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={categoryData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
                  placeholder="Enter category name"
                />
              </div>
              <div>
                <label htmlFor="parentCategory" className="block text-sm font-medium text-gray-700">
                  Parent Category
                </label>
                <select
                  id="parentCategory"
                  name="parentCategory"
                  value={categoryData.parentCategory}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
                >
                  <option value="">Select Parent Category (Optional)</option>
                  {categories.map((category) => (
                    <option key={category._id} value={category._id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </form>
            <div className="flex justify-end mt-6 space-x-4">
              <button
                onClick={() => setModalOpen(false)}
                className="bg-gray-300 px-4 py-2 rounded-md hover:bg-gray-400 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmitCategory}
                className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Category;
