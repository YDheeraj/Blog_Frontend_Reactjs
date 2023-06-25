export const formatDate = () => {
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    const date = new Date().toLocaleDateString('en-US', options);
    return date;
  };