// import { getOS } from './getOS';

// const dev = {
//     // VITE_URL_ANILIST: "http://localhost:8081",
//     // VITE_URL_DATABASE: "http://localhost:8080"
//     VITE_HOST: "127.0.0.1"
//   };
  
//   const prod = {
//     // VITE_URL_ANILIST: `http://${import.meta.env.VITE_SERVER_IP}:8081`,
//     // VITE_URL_DATABASE: `http://${import.meta.env.VITE_SERVER_IP}:8080`
//     VITE_HOST: "10.0.0.214"
//   };
  
//   var config = {
//     // Add common config values here
//     MAX_ATTACHMENT_SIZE: 5000000,
//     // Default to dev if not set
//     ...(import.meta.env.VITE_ENV === "prod" ? prod : dev),
//   };
  
//   if (!import.meta.env.VITE_ENV){
//     const os = getOS();
//     config = {
//       MAX_ATTACHMENT_SIZE: 5000000,
//       ...(os === "Linux" ? prod : dev),
//     };
//   }
  
//   export default config;