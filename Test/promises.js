let numberArray = [1, 2, 9, 8, 7, 6, 3, 4, 5];

async function processItems() {
    const promiseArray = [];
    for (const item of numberArray) {
        const promise = new Promise((resolve, reject) => {
            if (item % 2 == 0) {
                resolve("The promised task was performed successfully for "+ item);
            } else {
                reject("The promised task was not performed for " +item);
            }
        });
        promiseArray.push(promise);
    }

    promiseArray.forEach(promise => {
        promise
            .then(result => console.log(result))
            .catch(error => console.log(error));
    });
}

processItems();







