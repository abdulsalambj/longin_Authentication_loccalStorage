
// const user = JSON.parse(localStorage.getItem('loggedInUser'));


// if (!user) {
//   window.location.href = 'index.html'; 
// } else {

 
//   document.getElementById('userName').textContent = `Welcome, ${user.name}`;
// }


// document.getElementById('logoutBtn').addEventListener('click', function() {
//   localStorage.removeItem('loggedInUser'); 
//   window.location.href = 'index.html';
// });


// const user = JSON.parse(localStorage.getItem('loggedInUser'));

// if (!user) {
//   document.location.href = 'index.html'; 
// } else {
//   const userNameElement = document.getElementById('userName');
//   if (userNameElement) {
//     userNameElement.textContent = `Welcome, ${user.name}`;
//   }
// }

// const logoutBtn = document.getElementById('logoutBtn');
// if (logoutBtn) {
//   logoutBtn.addEventListener('click', function() {
//     localStorage.removeItem('loggedInUser');
//     document.location.href = 'index.html';
//   });
// }
const user = JSON.parse(localStorage.getItem('loggedInUser'));

// Redirect if not logged in
if (!user) {
  window.location.href = 'index.html';
} else {
  document.getElementById('userName').textContent = `Welcome, ${user.name}`;
}

// Logout button
document.getElementById('logoutBtn').addEventListener('click', function () {
  localStorage.removeItem('loggedInUser');
  window.location.href = 'index.html';
});

// Handle new data entry
document.getElementById('submitBtn').addEventListener('click', function () {
  const input = document.getElementById('userInput');
  const value = input.value.trim();

  if (value !== '') {
    const allData = JSON.parse(localStorage.getItem('userData')) || [];

    const newEntry = {
      email: user.email,
      content: value
    };

    allData.push(newEntry);
    localStorage.setItem('userData', JSON.stringify(allData));

    input.value = '';
    renderUserData();
  }
});

// Render only current user’s data
function renderUserData() {
  const allData = JSON.parse(localStorage.getItem('userData')) || [];
  const userSpecificData = allData.filter(item => item.email === user.email);

  const list = document.getElementById('userDataList');
  list.innerHTML = '';

  userSpecificData.forEach((item, index) => {
    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.textContent = item.content;
    list.appendChild(li);
  });
}

// Load data on page load
renderUserData();