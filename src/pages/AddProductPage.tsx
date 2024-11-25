import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
// import { showError } from '../components/ToastNotification'
import { Box, TextField, Button } from '@mui/material'
import { useAddProduct } from '../hooks/useAddProduct'
import { useNavigate } from 'react-router-dom'

const AddProductPage = () => {
  const navigate = useNavigate()
  const addProduct = useAddProduct() // Using the custom hook for adding products

  const formik = useFormik({
    initialValues: {
      name: '', // Changed from title to name
      description: '',
      price: '',
      image: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required('Name or Title is required')
        .max(30, 'Max 30 characters'),
      description: Yup.string()
        .required('Description is required')
        .min(10, 'Description must be at least 10 characters')
        .max(200, 'Description must not exceed 200 characters'),
      price: Yup.number()
        .required('Price is required')
        .min(1, 'Price must be greater than 0')
        .max(9999, 'Price must be less than 10,000'),
      image: Yup.string()
        // .required('Image URL is required'),
        .url('Invalid URL format')
        .notRequired(), // Makes the field optional
    }),

    onSubmit: async (values) => {
      try {
        const newProduct = {
          name: values.name, //  for primary identification
          title: values.name, // Map `name` to `title` for backward compatibility
          description: values.description,
          price: Number(values.price),
          image: values.image,
        }

        await addProduct(newProduct) // Add product using the hook
        navigate('/')
        // navigate('/product-page') // Go to ProductPage

        formik.resetForm()
      } catch (error) {
        console.error('Error adding product:', error)
        // showError('Failed to add product')
      }
    },
  })

  return (
    <Box sx={{ padding: 4, maxWidth: '600px', margin: '0 auto' }}>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          name="name"
          label="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          margin="normal"
          // autoComplete="off"
        />
        <TextField
          fullWidth
          name="description"
          label="Description"
          multiline
          rows={4}
          value={formik.values.description}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.description && Boolean(formik.errors.description)
          }
          helperText={formik.touched.description && formik.errors.description}
          margin="normal"
        />
        <TextField
          fullWidth
          name="price"
          label="Price"
          type="number"
          value={formik.values.price}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.price && Boolean(formik.errors.price)}
          helperText={formik.touched.price && formik.errors.price}
          margin="normal"
        />
        <TextField
          fullWidth
          name="image"
          label="Image URL"
          value={formik.values.image}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.image && Boolean(formik.errors.image)}
          helperText={formik.touched.image && formik.errors.image}
          margin="normal"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ marginTop: 2 }}
        >
          Add Product
        </Button>
      </form>
    </Box>
  )
}

export default AddProductPage