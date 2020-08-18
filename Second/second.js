const Workers = [
    { name: "Влад", salary: 500 },
    { name: "Юля", salary: 1300 },
    { name: "Никита", salary: 1500 },
  ];
  
  const getWorthyWorkers = (workersArr) => {
    const worthyWorkers = [];
    
    workersArr.forEach(currentWorker => {
      if (currentWorker.salary > 1000) {
        worthyWorkers.push(currentWorker.name)
      }
    })
  
    return worthyWorkers;
  };
  
  console.log(getWorthyWorkers(Workers));


    // for (let i = 0; i < workersArr.length; i++) {
    //   const currentWorker = workersArr[i];
  
    //   if (currentWorker.salary > 1000) {
    //     worthyWorkers.push(currentWorker.name);
    //   }
    // }