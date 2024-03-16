const dev = {
    VITE_URL_ANILIST: "localhost:8080",
    VITE_URL_DATABASE: "localhost:8081"
  };
  
  const prod = {
    VITE_URL_ANILIST: "10.0.0.160:8080",
    VITE_URL_DATABASE: "10.0.0.160:8081"
  };
  
  const config = {
    // Add common config values here
    MAX_ATTACHMENT_SIZE: 5000000,
    // Default to dev if not set
    ...(import.meta.env.VITE_ENV === "prod" ? prod : dev),
  };
  
  export default config;