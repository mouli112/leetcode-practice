const fetchData = (callback) => {
    setTimeout(() => {
      const data = 'Hello, callback!';
      callback(data);
    }, 1000);
  };
  
  fetchData((result) => {
    console.log(result);
  });
  