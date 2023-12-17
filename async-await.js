const fetchData = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = 'Hello, async/await!';
        resolve(data);
      }, 1000);
    });
  };

const runAsyncFunction = async () => {
    try {
      const result = await fetchData();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };
runAsyncFunction();
  