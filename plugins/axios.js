import axios from 'axios';

export default defineNuxtPlugin(() => {
  const instance = axios.create({
    baseURL: 'https://api.example.com'
  });

  return {
    provide: {
      axios: instance,
    },
  };
});