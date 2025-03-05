
document.getElementById("passwordForm").onsubmit = function(e) {
  e.preventDefault();
  const password = document.getElementById("password").value.toUpperCase();
  if (password === "VII") {
    document.getElementById("message").style.display = "block";
    setTimeout(() => {
      document.getElementById("coordinates").style.display = "block";
    }, 3000);
  } else {
    alert("Wrong password.");
  }
};
