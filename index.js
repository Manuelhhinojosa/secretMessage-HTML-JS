// if there is an encrypted message in the url, we grab that encrypted message and add it to a var named hash
const { hash } = window.location;
// then we remove the default # sigh from the encrypted message and replace it with an empty space
const message = atob(hash.replace("#", ""));

if (message) {
  document.querySelector("#message-form").classList.add("hide");
  document.querySelector("#message-show").classList.remove("hide");
  document.querySelector("h1").innerHTML = message;
}

// selecting form and adding event listener to it.
document.querySelector("form").addEventListener("submit", (e) => {
  // preventing browser from submiting form
  e.preventDefault();

  //
  document.querySelector("#message-form").classList.add("hide");
  //
  document.querySelector("#link-form").classList.remove("hide");

  // selecting the input element where the message will be entered
  const input = document.querySelector("#message-input");
  // converting the value of the input (the message entered by the user) to an encrypted string and adding that value to var.
  const encrypted = btoa(input.value);
  // selecting the input where the url with the encrypted message will be shared
  const linkInput = document.querySelector("#link-input");
  // adding the url as the input value for display
  linkInput.value = `${window.location}#${encrypted}`;
  // selecting the url for the user for easy copy
  linkInput.select();
});
