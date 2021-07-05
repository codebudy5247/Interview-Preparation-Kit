function timeOne() {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      console.log("Time 1");
      resolve();
    }, 3000);
  });
}
function timeTwo() {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      console.log("Time 2");
      resolve();
    }, 2000);
  });
}
function timeThree() {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      console.log("Time 3");
      resolve();
    }, 1000);
  });
}
timeOne().then(timeTwo).then(timeThree);

