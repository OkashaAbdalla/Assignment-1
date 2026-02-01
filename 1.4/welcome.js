function welcomeUser(name = "Guest", isMember) {
  if (isMember === true && name === "Guest") {
    console.log("Welcome back, VIP Guest!");
  } else if (isMember === true) {
    console.log(`Welcome back, VIP ${name}!`);
  } else {
    console.log(`Hello and welcome, ${name}!`);
  }
}

// Call function 4 different ways as required
welcomeUser("Okasha", true);      // VIP with name
welcomeUser("Amina", false);      // Non-member
welcomeUser(undefined, true);     // VIP Guest (default name)
welcomeUser();                    // Guest (default name, non-member)