async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector("#username-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (username && password) {
    const response = await fetch("api/users", {
      method: "post",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: { "content-type": "application/json" },
    });

    if (response.ok) {
      console.log("Success!");
    } else {
      alert(response.statusText);
    }
  }
};

document.querySelector(".signup-form").addEventListener("submit", signupFormHandler);