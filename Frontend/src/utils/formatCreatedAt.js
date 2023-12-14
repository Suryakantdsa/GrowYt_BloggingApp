export const formatCreatedAt = (createdAt) => {
    const date = new Date(createdAt);
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };
  