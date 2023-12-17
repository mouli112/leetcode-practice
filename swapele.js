function customSort(array) {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length - 1; j++) {
        if (array[j] > array[j + 1]) {
          [array[j], array[j + 1]] = [array[j + 1], array[j]]; // Swap elements
        }
      }
    }
    return array;
  }
  
  let array = [0, 1, 2, 0, 1, 2];
  array = customSort(array);
  console.log(array);
  