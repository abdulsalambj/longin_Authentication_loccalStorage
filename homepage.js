
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


const user = JSON.parse(localStorage.getItem('loggedInUser'));

if (!user) {
  document.location.href = 'index.html'; 
} else {
  const userNameElement = document.getElementById('userName');
  if (userNameElement) {
    userNameElement.textContent = `Welcome, ${user.name}`;
  }
}

const logoutBtn = document.getElementById('logoutBtn');
if (logoutBtn) {
  logoutBtn.addEventListener('click', function() {
    localStorage.removeItem('loggedInUser');
    document.location.href = 'index.html';
  });
}
