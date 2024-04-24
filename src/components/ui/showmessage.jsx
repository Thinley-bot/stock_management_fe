import { Alert, AlertTitle } from '@mui/material';
import React from 'react';


const ShowMessage= ({ messageType, message, handleErrorClose }) => {
  const showError = () => {
    switch (messageType) {
      case "error":
        return (
          <Alert severity="error">
            <div className='flex flex-row justify-between'>
              <AlertTitle>Error</AlertTitle>
              <button onClick={handleErrorClose} className='font-extrabold'>X</button>
            </div>
            {message}
          </Alert>
        );
      case "warning":
        return (
          <Alert severity="warning">
            <div className='flex flex-row justify-between'>
              <AlertTitle>Warning</AlertTitle>
              <button onClick={handleErrorClose} className='font-extrabold'>X</button>
            </div>
            {message}
          </Alert>
        );
      case "info":
        return (
          <Alert severity="info">
            <div className='flex flex-row justify-between'>
              <AlertTitle>Info</AlertTitle>
              <button onClick={handleErrorClose} className='font-extrabold'>X</button>
            </div>
            {message}
          </Alert>
        );
      case "success":
        return (
          <Alert severity="success">
            <div className='flex flex-row justify-between'>
              <AlertTitle>Success</AlertTitle>
            </div>
            {message}
          </Alert>
        );
      default:
        return null;
    }
  };

  return (
    <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-70 z-50'>
      <div className='m-5'>
        {showError()}
      </div>
    </div>
  );
};

export default ShowMessage;
