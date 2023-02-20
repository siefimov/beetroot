// form 01 - displaying user's data when button "Submit" is clicked
const form = document.querySelector("#form01");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);

  const name = data.get("data");
  const email = data.get("email");
  const password = data.get("password");

  document.body.innerHTML += `<p>Name: ${name}</p>
                                  <p>Email: ${email}</p>
                                  <p>Password: ${password}</p>`;
});

// form 02 - displaying user's data when typing their into the input filed
const form02 = document.querySelector("#form02");

form02.addEventListener("input", (e) => {
  e.preventDefault();
  const data = new FormData(form02);

  const name = data.get("data");
  const email = data.get("email");
  const password = data.get("password");

  document.querySelector(".user-name").innerText = name;
  document.querySelector(".user-email").innerText = email;
  document.querySelector(".user-password").innerText = password;
});
