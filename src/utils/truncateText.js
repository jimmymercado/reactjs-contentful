const truncateText = (str, length = 100, ending = '...') => {
  return (str.length < length) ? str: str.substring(0, length - ending.length) + ending;

};

export default truncateText