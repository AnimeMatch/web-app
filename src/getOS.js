export function getOS() {
    const userAgent = window.navigator.userAgent;
    if (userAgent.includes('Windows')) {
        return 'Windows';
      } else if (userAgent.includes('Macintosh')) {
        return 'Mac';
      } else if (userAgent.includes('Linux')) {
        return 'Linux';
      } else if (userAgent.includes('Android')) {
        return 'Android';
      } else if (userAgent.includes('iOS')) {
        return 'iOS';
      } else {
        return 'Outro';
      }
  }
  