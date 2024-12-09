fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log('Error:', error));

  let pizzaOrder = new Promise((resolve, reject) => {
    let pizzaDelivered = true;
    if (pizzaDelivered) {
      resolve("პიცა მოტანილია");
    } else {
      reject("პიცა მოტანილი არაა");
    }
  });

  pizzaOrder
    .then((message) => console.log(message))
    .catch((error) => console.log(error));

