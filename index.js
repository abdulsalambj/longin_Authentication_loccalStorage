document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    const user = users.find(a => a.email === email && a.password === password);
    if (user) {
      localStorage.setItem('loggedInUser', JSON.stringify(user));
    document.location.href = 'home.html';
      } else {
        alert('Invalid email or password');
        document.location.href ='Register.html';
        }
        });