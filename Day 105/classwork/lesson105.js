document.getElementById('getBook').addEventListener('click', function() {
    let bookPromise = new Promise((resolve, reject) => {
        // მეგობრის წიგნის მოტანის "სიმულაცია"
        let friendHasBook = Math.random() > 0.5; // შემთხვევითობა, რომ მეგობარს წიგნი აქვს
        
        setTimeout(() => {
            if (friendHasBook) {
                resolve("წიგნი წარმატებით მიიღეთ!");
            } else {
                reject("ბოდიშით, წიგნი ვერ მიიღეთ.");
            }
        }, 2000); // 2 წამი ლოდინი
    });
    bookPromise
        .then(message => {
            document.getElementById('message').textContent = message;
            document.getElementById('message').style.color = 'green';
        })
        .catch(error => {
            document.getElementById('message').textContent = error;
            document.getElementById('message').style.color = 'red';
        });
});