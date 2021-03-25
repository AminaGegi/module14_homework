
const myPromise = new Promise((resolve, reject) => {

    setTimeout( numb = Math.round((Math.random()*100)), 3000);

    if ( numb % 2 === 0) {
        resolve(numb);
    } else {
        reject(numb);
    }
});

// Выполняем promise
myPromise
    .then((result) => {
        console.log(`Завершено успешно. Сгенерированное число — ${result}`);
    })
    .catch((error) => {
        console.log(`Завершено с ошибкой. Сгенерированное число — ${error}`);
    })
;