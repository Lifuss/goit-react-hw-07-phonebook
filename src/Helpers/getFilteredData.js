const getFilteredData = (data, filter) => {
  return data.filter(
    item =>
      item.name.toLowerCase().includes(filter.toLowerCase()) ||
      item.phone?.toLowerCase().includes(filter.toLowerCase())
  );
};

export default getFilteredData;
