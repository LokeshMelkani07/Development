// Callbacks , Promises , Async & Await in Js

const data = [
  {
    name: "Lokesh",
    degree: "btech",
  },
  {
    name: "Mohit",
    degree: "bca",
  },
  {
    name: "Rohit",
    degree: "bsc",
  },
];

function getData() {
  setTimeout(() => {
    let output = "";
    data.forEach((info, index) => {
      output += `<li>${info.name}</li>`;
    });
    document.body.innerHTML = output;
  }, 5000);
}

/*
function createData(newData, callback) {
    setTimeout(() => {
        data.push(newData);
        callback();
    }, 2000);
}

// getData();
createData(
  {
    name: "Sohit",
    degree: "mbbs",
  },
  getData
);
*/

// If we have promise we do not need to use callbacks

function createData(newData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      data.push(newData);
    }, 2000);
    let error = false;
    if (!error) {
      resolve("Everything is perfect");
    } else {
      reject("Nothing is going right ");
    }
  });
}

/*

// Calling Using Promises

createData({
  name: "Sohit",
  degree: "mbbs",
})
  .then(getData)
  .catch((err) => {
    console.log(err);
  });
*/

// Async and Await
// Synchronous means there is a sequence but Asynchronous means it will not wait. it will keep on running

// Calling above function using Async Await

async function start() {
  await createData({
    name: "Sohit",
    degree: "mbbs",
  });
  // await means it will wait for createData to finish and then next instructins will run
  console.log("Async and Await ");
  getData();
}

start();
