//  const form = document.getElementById('myForm');
//  const tableBody = document.getElementById('tableBody');

// // მოვლენის მსმენელი ფორმის გაგზავნის ღონისძიების დამატება
//  form.addEventListener('submit', (e) => {
// //     ნაგულისხმევი ფორმის წარდგენის ქცევის აღკვეთა
//    e.preventDefault();

// // ფორმის მონაცემების მიღება
//    const name = document.getElementById('name').value;
//    const email = document.getElementById('email').value;
//    const password = document.getElementById('password').value;

// // ფორმის მონაცემების გადამოწმება
//    if (name && email && password) {}
// ცხრილის ახალი მწკრივის შექმნა
//const row = document.createElement('tr');
//     row.innerHTML = `
//       <td>${name}</td>
//       <td>${email}</td>
//       <td>${password}</td>
//     `;

//     // ახალი როვის დამატება
//     tableBody.appendChild(row);

//     // 
//     document.getElementById('name').value = '';
//     document.getElementById('email').value = '';
//     document.getElementById('password').value = '';
//   } else {
//     alert('Please fill in both fields.');
//   }
// });

//  ღილაკის ელემენტის მიღება
// const button = document.getElementById('add-paragraph-button');

// // ღილაკზე  მოვლენის მსმენელი დამატება
// button.addEventListener('click', () => {
//   // 0-დან 1000-მდე რიცხვის გენერაცია
//   const randomNumber = Math.floor(Math.random() * 1001);

//   // ახალი აბზაცის ელემენტის დამატება
//   const paragraph = document.createElement('p');

//   //  აბზაცის ტექსტის შინაარსი შემთხვევით რიცხვზე დაყენება
//   paragraph.textContent = `Random number: ${randomNumber}`;

//   // აბზაცის სხეულის თეგის დაბრუნება
//   document.body.appendChild(paragraph);
// });

// Get the buttons and result elements
const myScoreP = document.getElementById('my-score');
const compScoreP = document.getElementById('comp-score');
const winsP = document.getElementById('wins');
const btnsDiv = document.getElementById('btns');

const choices = ['rock', 'paper','scissors'];

let myScore = 0;
let compScore = 0;

btnsDiv.addEventListener('click', function(e) {
    const btnId = e.target.id;

    const compChoice = choices[Math.floor(Math.random() * choices.length)];

    if(btnId === compChoice) {
        winsP.textContent = 'Its a tie!';
    } 
    
    else if((btnId === "rock" && compChoice === "paper") || (btnId === "scissors" && compChoice === "rock") || (btnId === "paper" && compChoice === "scissors")) {
        compScore++;
        compScoreP.textContent = compScore;
        winsP.textContent = 'You lost!';
    } 
    
    else {
        myScore++;
        myScoreP.textContent = myScore;
        winsP.textContent = 'You won!';
    }
});