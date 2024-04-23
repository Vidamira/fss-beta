import { useState, useContext } from "react";
import { UserContext } from '../../context/userContext';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import StyledFormContainer from '../components/StyledFormContainer';
import StyledButton from '../components/StyledButton';
import { StyledLabel, StyledInput } from '../components/StyledForm';

export default function Admin() {
  const [isVisible, setIsVisible] = useState(false); 

  const navigate = useNavigate();
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const registerUser = async (e) => {
    e.preventDefault();
    const { name, email, password } = data;
    try {
      const { data } = await axios.post('/admin', {
        name,
        email,
        password,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        toast.success('Access granted. Hello!');
        navigate('/');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const toggleForm = () => {
    setIsVisible(!isVisible); 
  };

  const { user } = useContext(UserContext);

  return (
    <div>
      <StyledFormContainer>
        <h2 onClick={toggleForm}>{isVisible ? "Close" : "Add new user"}</h2>
        {isVisible && ( 
          <form onSubmit={registerUser}>
            <StyledLabel>Name</StyledLabel>
            <StyledInput
              type='text'
              placeholder='enter name..'
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
            <StyledLabel>Email</StyledLabel>
            <StyledInput
              type='email'
              placeholder='enter email..'
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
            <StyledLabel>Password</StyledLabel>
            <StyledInput
              type='password'
              placeholder='enter password..'
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
            <StyledButton type='submit'>add user</StyledButton>
          </form>
        )}
      </StyledFormContainer>
    </div>
  );
}
