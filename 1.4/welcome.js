 // Personalized Welcome Function


// Function that welcomes a user based on name and membership status
function welcomeUser(name = "Guest", isMember) {
  // If the user is a member and no name was provided
  if (isMember && name === "Guest") {
    console.log("Welcome back, VIP Guest!");

  // If the user is a member and has a name
  } else if (isMember) {
    console.log(`Welcome back, VIP ${name}!`);

  // If the user is not a member
  } else {
    console.log(`Hello and welcome, ${name}!`);
  }
}

/*
 * Function Calls
 */

welcomeUser("Okasha", true);   // Member with a name
welcomeUser("Amina", false);   // Non-member
welcomeUser(undefined, true);  // Member with default name (Guest)
welcomeUser();                 // Non-member with default name
