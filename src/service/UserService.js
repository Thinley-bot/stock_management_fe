// UserService.js
const BASE_URL = 'http://localhost:8080'; // Your backend URL

export const userService = {
  register,
  login,
  fetchAllUsers,
  fetchUserById,
  fetchCurrentUser,
};

async function register(userData) {
  const response = await fetch(`${BASE_URL}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Registration failed');
  }
  return response.json();
}

async function login(credentials) {
  const response = await fetch(`${BASE_URL}/auth/authenticate`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Login failed');
  }
  return response.json();
}

async function fetchAllUsers() {
  try {
    const response = await fetch(`${BASE_URL}/users`);
    if (!response.ok) {
      throw new Error('Failed to fetch users. Please try again.');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching users:', error.message);
    throw new Error('Failed to fetch users. Please try again.');
  }
}

async function fetchUserById(userId) {
  try {
    const response = await fetch(`${BASE_URL}/users/${userId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch user. Please try again.');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching user:', error.message);
    throw new Error('Failed to fetch user. Please try again.');
  }
}

async function fetchCurrentUser(JWT_token) {
  try {
    const response = await fetch(`${BASE_URL}/users/current`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization:`Bearer ${JWT_token}`, 
      },
    });
    if (!response.ok) {
      throw new Error('Failed to fetch current user. Please try again.');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching current user:', error.message);
    throw new Error('Failed to fetch current user. Please try again.');
  }
}
