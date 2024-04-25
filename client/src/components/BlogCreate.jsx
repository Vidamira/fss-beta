import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import styled from 'styled-components';

const StyledBlogCreateForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  border: 1px solid #ddd;
  border-radius: 4px;

  h2 {
    text-align: center;
    margin-bottom: 1rem;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  label {
    font-weight: bold;
  }

  input[type="text"],
  textarea {
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
  }

  textarea {
    height: 200px;
    resize: vertical;
  }

  button[type="submit"] {
    background-image: linear-gradient(to left, #F80404, #E79800);
    color: white;
    padding: 1rem 2rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
`;

function BlogCreate() {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('/api/blogs', formData);
      if (data.error) {
        toast.error(data.error);
      } else {
        setFormData({ title: '', content: '' });
        toast.success('Blog post created successfully!');
      }
    } catch (error) {
      console.error(error);
      toast.error('An error occurred. Please try again later.');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <StyledBlogCreateForm onSubmit={handleSubmit}>
      <h2>Create New Blog Post</h2>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          name="content"
          value={formData.title}
          onChange={handleChange}
        ></textarea>
      </div>
      <button type="submit">Create Post</button>
    </StyledBlogCreateForm>
  );
}

export default BlogCreate;
