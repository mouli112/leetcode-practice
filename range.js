function rangeNumbers(start,end){
    if(end < start){
        return [];
    }else{
        const numbers = rangeNumbers(start,end-1);
        numbers.push(end);
        return numbers;
    }
  }
  console.log(rangeNumbers(1,5));