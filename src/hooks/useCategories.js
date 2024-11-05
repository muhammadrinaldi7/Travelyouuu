// src/hooks/useCategories.js
import { useDispatch, useSelector } from 'react-redux';
import { createCategory, deleteCategory, fetchCategories, updateCategory } from '../services/categories';


const useCategories = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.categories);

  // Fungsi untuk operasi CRUD
  const loadCategories = () => dispatch(fetchCategories());
  const addCategory = (newCategory) => dispatch(createCategory(newCategory));
  const editCategory = (id, updatedCategory) => dispatch(updateCategory({ id, updatedCategory }));
  const removeCategory = (id) => dispatch(deleteCategory(id));

  return {
    categories: data,
    loading,
    error,
    loadCategories,
    addCategory,
    editCategory,
    removeCategory,
  };
};

export default useCategories;
