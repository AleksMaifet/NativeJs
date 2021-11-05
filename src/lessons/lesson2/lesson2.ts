console.log('lesson 2');

// Lexical environment
// http://jsflow.org/docs/lex-env/

//// Closure
// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA

//// Сurrying
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827

// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/

// Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0

// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9

	// const sum = (a: number) => {
	// 	return (b: number) => {
	// 		return a + b
	// 	}
	// }
	// console.log(sum(3)(6))

// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3

// const makeCounter = () => {
// 		let a = 1
// 		return () => {
// 			return a++
// 		}
// }
// const counter = makeCounter();
// console.log(counter()); // 1
// console.log(counter()); // 2
// const counter2 = makeCounter();
// console.log(counter2()); // 1
// console.log(counter()); // 3


// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;

// const makeCounter2 = () => {
// 	let b:number[] = [] ;
// 	return (...a:number[]) => {
// 		if(a) b = [...b,...a]
// 		return b.reduce((x,y) => x+y)
// 	}
// }
// const counteR = makeCounter2()
// console.log(counteR(2));



// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10

// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore

// const superSum = (a: number) => {
// 	if (a === null || a === undefined || a <= 0) return 0;
//
// 	let arrayNum: number[] = [];
//
// 	return function superSum2(...num: number[]) {
// 		arrayNum = [...arrayNum, ...num];
// 		if (arrayNum.length >= a) {
// 			// arrayNum.length = a
// 			return arrayNum.slice(0,a).reduce((x,y) => x+y)
// 		} else {
// 			return superSum2
// 		}
// 	}
// }
// // @ts-ignore
// console.log(superSum(3)(2,5)(3,9))
//
// // Task 05
// // решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion
//
// const sumTo = (a:number):number => {
// 	if(a === 1) return 1
// 	return a + sumTo(a - 1)
// }
//
// // console.log(sumTo(3))
//
// const factorial = (n:number):number =>{
// 	if(n === 1) return 1
// 	else {
// 		return n*factorial(n-1)
// 	}
// }
// // console.log(factorial(3))
//
// let list = {
// 	value: 1,
// 	number:2,
// 	next: {
// 		value: 2,
// 		next: {
// 			value: 3,
// 			next: {
// 				value: 4,
// 				number:200,
// 				cash: 300,
// 				next: null
// 			}
// 		}
// 	}
// };
//
// const a = (arr: any): any => {
// 	arr.cash && alert(arr.cash)
// 	if (arr.next) {
// 		return a(arr.next)
// 	}
// }

// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.
//
// const arr = [1, [2], [3, [[4]]]]
//
// const a = (arr:any):any => {
// 	if(Array.isArray(arr)){
// 		return arr.reduce((x:any,y:any) => x.concat(a(y)),[])
// 	} else {
// 		return arr
// 	}
// }
// console.log(a(arr))
// just a plug

// let pr = new Promise((res, rej) => {
//     let a = 10;
//     let b = 20;
//     let c = a + b;
//     console.log('с ', c);
//     rej(c);
//     // some sync request
//     setTimeout(() => {
//         res(10);
//         console.log('dvzmcvdmh');
//     }, 0);
//     //rej(0);
//     console.log('function end');
// });

let pr = new Promise((res, rej) => {
    // rej(0);
    res(10);
});

pr
    .then(res => {
        console.log('then ', res);
        throw 5000;
    })
    .catch(err => {
        console.log('catch ', err);
    })
    .then(res2 => {
        console.log('then ', res2);
    })
    .catch(err => {
        console.log('catch ', err);
    })
    .then(null, err => {
        console.log('catch ', err);
    })









    export default ()=>{};

