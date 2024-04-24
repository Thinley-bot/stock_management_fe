import React, { useEffect, useState } from 'react';
import { userService } from '../service/UserService';
import { Link } from 'react-router-dom';
import Button from '../components/ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight, faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import logo from  '../assets/img/logo.png';

const Register = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    role: 'USER',
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  useEffect(()=>{
    if(success){
      setFormData({
        firstname:'',
        lastname:'',
        email:'',
        password:''
      })
    }
  },[success])

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await userService.register(formData);
      console.log('Registration successful', response);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 2000);
    } catch (error) {
      setError('An error occurred. Please try again.');
      setTimeout(() => {
        setError(false);
      }, 2000);
    }
  };
  return (
    <div className="bg-[url('/src/assets/img/background.png')] flex flex-row items-center justify-center h-screen w-full">
      <div className="bg-gray-900 px-20 pt-10 pb-20 bg-opacity-10 w-[30%] h-[65%] shadow-lg shadow-black">
        <form onSubmit={handleSubmit} className="flex w-full flex-col gap-2">
          {error && (
            <p className="text-center text-red-500">Registration failed. Please try again!</p>
          )}
          {success && (
            <p className="text-center text-green-500">Registration successful!</p>
          )}
          <div className="flex flex-col items-center justify-center">
            <img
              src={logo}
              alt="company logo"
              className="h-32 w-32"
            />
            <h1 className="text-2xl font-bold">REGISTER</h1>
          </div>
          <label>
            <FontAwesomeIcon icon={faUser} />
            &nbsp;&nbsp;&nbsp;FirstName
          </label>
          <input className="rounded border px-4 py-1" type="text" name="firstname" value={formData.firstname} onChange={handleChange} />
          <label>
            <FontAwesomeIcon icon={faUser} />
            &nbsp;&nbsp;&nbsp;LastName
          </label>
          <input className="rounded border px-4 py-1" type="text" name="lastname" value={formData.lastname} onChange={handleChange} />
          <label>
            <FontAwesomeIcon icon={faEnvelope} />
            &nbsp;&nbsp;&nbsp;Email
          </label>
          <input className="rounded border px-4 py-1" type="email" name="email" value={formData.email} onChange={handleChange} />
          <label>
            <FontAwesomeIcon icon={faLock} />
            &nbsp;&nbsp;&nbsp;Password
          </label>
          <input className="rounded border px-4 py-1" type="password" name="password" value={formData.password} onChange={handleChange} />
          <Button label="Submit" type="submit" onClick={() => {}} />
          <div className="mt-4 flex items-center justify-center">
            <Link to="/login">
              Login&nbsp; <FontAwesomeIcon icon={faArrowCircleRight} />
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
