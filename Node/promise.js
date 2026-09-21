const promise1 = new Promise((resolve, reject) => {
    const success = false;

    if (success) {
        resolve({
            id: 1245898,
            username: "prerna"
        });
    } else {
        reject({
            message: "data not fetched",
            success: false
        });
    }
});

const promise2 = new Promise((resolve, reject) => {
    const success = true;

    if(success) {
        resolve({
            email: "prernajainnn@gmail.com",
            username: "prerna"
        });
    } else {
        reject({
            message: "data not fetched",
            success: false
        });
    }
});

Promise.race([promise1, promise2])
.then((response) => {
    console.log("Promise.race:", response);
})
.catch((error) => {
    console.log("Promise.race:", error.message);
});

Promise.allSettled([promise1, promise2])
.then((response) => {
    console.log("Promise.allSettled:", response);
})
.catch((error) => {
    console.log("Promise.allSettled:", error.message);
});

Promise.any([promise1, promise2])
.then((response) => {
    console.log("Promise.any:", response);
    return response;
})
.then((response2) => {
    console.log("Promise.any second then:", response2.username);
})
.catch((error) => {
    console.log("Promise.any:", error.message);
});