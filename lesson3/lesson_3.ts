console.log('lesson 3');

// Event loop
// https://learn.javascript.ru/event-loop
// https://habr.com/ru/company/ruvds/blog/340508/
// https://www.youtube.com/watch?v=8aGhZQkoFbQ
// https://www.youtube.com/watch?v=j4_9BZezSUA
// https://www.jsv9000.app/

// Promise
// https://learn.javascript.ru/promise-basics
// https://www.youtube.com/watch?v=1idOY3C1gYU


// https://jsonplaceholder.typicode.com/posts/1
// https://habr.com/ru/company/oleg-bunin/blog/417461/?_ga=2.54695343.543933152.1602500664-1040035071.1596811661

// console.log('start ');
//
// let pr = new Promise((res, rej) => {
//     let a = 10;
//     let b = 20;
//     let c = a + b;
//     console.log('с ', c);
//     //rej(c);
//     // some sync request
//     setTimeout(() => {
//         res(10);
//         console.log('dvzmcvdmh');
//     }, 100);
//     //rej(0);
//     console.log('function end');
// });
//
// console.log(pr)
//
// pr.then( res => {
//     console.log('Promise chain res ', res);
// }, err => {
//     console.log('Promise chain err ', err);
// })
//
// let test = 20;
// console.log(test);
//
// let pr = new Promise((res, rej) => {
//    res(10);
// });
//
// pr
//     .then(res => {
//         console.log('then ', res);
//     })
//     .then(res2 => {
//         console.log('then ', res2);
//     })




// let pr = new Promise((res, rej) => {
//     rej(0);
//     //res(10);
// });
//
// pr
//     .then(res => {
//         console.log('then ', res);
//         throw 5000;
//     }, err => {
//         console.log('then err ', err);
//         throw 'Some error';
//     })
//     .then(res2 => {
//         console.log('then ', res2);
//     },  err2 => {
//         console.log('then err2 ', err2);
//     })


// let pr = new Promise((res, rej) => {
//     rej(0);
//     //res(10);
// });
//
// pr
//     .then(res => {
//         console.log('then ', res);
//         throw 5000;
//     })
//     .then(res2 => {
//         console.log('then ', res2);
//     },  err2 => {
//         console.log('then err2 ', err2);
//     })


// let pr = new Promise((res, rej) => {
//     rej(0);
//     //res(10);
// });
//
// pr
//     .catch(err => {
//         console.log('catch ', err);
//     })
//     .then(res => {
//         console.log('then ', res);
//         throw 5000;
//     })
//     .catch(err => {
//         console.log('catch ', err);
//     })
//     .then(res2 => {
//         console.log('then ', res2);
//     })
//     .catch(err => {
//         console.log('catch ', err);
//     })
    // .then(null, err => {
    //     console.log('catch ', err);
    // })


// let pr = new Promise((res, rej) => {
//     rej(0);
//     //res(10);
// });
//
// pr
//     .finally(() => {
//         console.log('fin 1');
//         throw 'Finally error';
//     })
//     .catch(err => {
//         console.log('catch ', err);
//     })
//     .finally(() => {
//         console.log('fin 2');
//     })
//     .then(res => {
//         console.log('then ', res);
//         throw 5000;
//     })
//     .finally(() => {
//         console.log('fin 3');
//     })
//     .catch(err => {
//         console.log('catch ', err);
//     })
//     .finally(() => {
//         console.log('fin 4');
//     })
//     .then(res2 => {
//         console.log('then ', res2);
//     })
//     .catch(err => {
//         console.log('catch ', err);
//     })
//     .finally(() => {
//         console.log('fin 5');
//     })





// just a plug
export default ()=>{};