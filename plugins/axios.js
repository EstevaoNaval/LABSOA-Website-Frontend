import axios from 'axios';

export default defineNuxtPlugin(() => {
  const instance = axios.create({
    baseURL: 'https://api.example.com', // Set your API base URL here
  });

  return {
    provide: {
      axios: instance,
    },
  };
});