// console.log('Hello world!');

// const randNumber = (ms) => {
//   let myPromise = new Promise((resolve, reject) => {
//     setInterval(() => {
//       let num = Math.floor(
//         Math.random() * (Math.floor(10) - Math.ceil(1) + 1) + Math.ceil(1)
//       );
//       num % 2 === 0 ? resolve(num) : reject(num);
//     }, ms);
//   });
//   myPromise
//     .then((value) => console.log(value))
//     .catch((value) => alert(`${value} не является четным числом`));
// };

// randNumber(1000);

// const firstPromise = new Promise((resolve) => {
//   console.log('Preparing data');
//   setTimeout(() => {
//     let firstPerson = {
//       name: 'Alex',
//     };
//     resolve(firstPerson);
//   }, 1000);
// });

// const secondPromise = new Promise((resolve) => {
//   setTimeout(() => {
//     let secondPerson = {
//       name: 'Polly',
//       age: 28,
//     };
//     resolve(secondPerson);
//   }, 2000);
// });

// const thirdPromise = new Promise((resolve) => {
//   setTimeout(() => {
//     let thirdPerson = {
//       name: 'Tomy',
//       age: 21,
//     };
//     resolve(thirdPerson);
//   }, 3000);
// });

// const lastPromise = new Promise((resolve) => {
//   setTimeout(() => {
//     console.log('Users completed');
//     resolve();
//   }, 4000);
// });

// firstPromise
//   .then((data) => {
//     console.log(data);
//     return secondPromise;
//   })
//   .then((secondData) => {
//     console.log(secondData);
//     return thirdPromise;
//   })
//   .then((thirdData) => {
//     console.log(thirdData);
//     return lastPromise;
//   });

let arrPromise = [];

for (let i = 0; i < 4; i++) {
  let ms = (Math.floor(Math.random() * (10 - 1 + 1)) + 1) * 1000;
  arrPromise.push(
    new Promise((resolve) => {
      setTimeout(() => {
        console.log(i);
        resolve();
      }, ms);
    })
  );
}
// console.log(arrPromise);
// Promise.all([arrPromise]).then((value) => console.log(value));
Promise.race([arrPromise]).then((value) => console.log(value));
// console.log(ms);
