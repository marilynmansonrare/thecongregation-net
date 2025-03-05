document.getElementById('passwordForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const password = document.getElementById('password').value.toUpperCase();
  
  if (password === 'VII') {
    document.getElementById('message').classList.remove('hidden');
    setTimeout(() => {
      document.getElementById('coordinates').classList.remove('hidden');
    }, 3000);
  } else {
    alert('WRONG PASSWORD');
  }
});
