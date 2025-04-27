document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
  
    let users = JSON.parse(localStorage.getItem('users')) || [];
  
  
    if (users.find(a => a.email === email)) {
      alert('Email already registered');
      document.location.href = 'home.html';
      return;
    }
  
    const newUser = { name, email, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
  
    
    localStorage.setItem('loggedInUser', JSON.stringify(newUser));
    
    document.location.href = 'index.html';
  });
  