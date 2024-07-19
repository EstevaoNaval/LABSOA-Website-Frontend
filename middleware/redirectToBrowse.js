export default defineNuxtRouteMiddleware((to, from) => {
    if (to.path === '/compound') {
      return navigateTo('/compound/browse');
    }
  });