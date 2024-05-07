import React, { useState } from 'react';
import { useUserIdContext } from '../../pages/Common/UserIdContext';
import './SearchBar.css';
import {
  DATA_HOST,
  DATA_PORT,
  IMAGES_HOST,
  IMAGES_PORT,
  CHAT_HOST,
  CHAT_PORT,
  HttpGet,
  HttpPost,
} from "../../constants";

const DeactivateUser = () => {
  const [id, setId] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const { token, setIsUserLoggedIn } = useUserIdContext();


  const handleSubmit = async (event) => {
    event.preventDefault();

    const responseData = await HttpGet(0, "/deactivateUser/"+id, token);

    if (responseData == "Unauthorized") {
      setIsUserLoggedIn(false);
    }
    if (responseData == null) {
      throw new Error("Failed to deactivate");
    }
     console.log("Deactivated");
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        placeholder="Enter User ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button type="submit" onClick={handleSubmit}>Deactivate</button>
      {responseMessage.length > 0 && <div>{responseMessage}</div>}
    </form>
  );
};

export default DeactivateUser;
