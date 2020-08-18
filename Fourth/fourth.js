  const mixedArray = [3, 13, 74, 14, 66, 13, 22, 4];

  const isEven = num => {
      return num % 2 === 0;
      //проверка на четность (целочисленный остаток от деления)
  }

  const filterArray = (arrayToFilter, filterFn) => {
      const filteredArray = [];

      arrayToFilter.forEach(num => {
          if (filterFn(num)) {
              filteredArray.push(num);
          }
      })

      return filteredArray;
  }

  console.log(filterArray(mixedArray, isEven));
  //для проверки результата, в функцию filterArray помимо самого массива,
  //также надо добавить функицию фильтрации.
  //В JS можно передавать код функции по её имени.