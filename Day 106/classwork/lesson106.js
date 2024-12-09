function bookPromise(bringBook) {
    return new Promise((resolve, reject) => {
      if (bringBook) {
        resolve("წიგნი მივიღე");
      } else {
        reject("წიგნი ვერ მივიღე");
      }
    });
  }

bookPromise(false)
.then((message) => {
    console.log(message);
})
.catch((error) => {
    console.log(error);
});
bookPromise(true)
.then((message) => {
    console.log(message);
})
.catch((error) => {
    console.log(error);
});