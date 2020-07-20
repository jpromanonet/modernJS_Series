// Declare variable name in the global scope
// Everything from global Scope is avaible in everywhere
const name = "Nerd";

// Declare function
// function scope is into the function but is not global
function toUpper(text) {
  const upperCased = text.toUpperCase();
  console.log(upperCased);
}

// Function invocation
toUpper(name);
