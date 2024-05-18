// Assuming 'personObj' has a property 'premium' which is likely a boolean or number,
// and we want to convert it to a string and store it in 'result'.
// The variable 'X' is not defined, so I'll assume it's meant to be a part of an assignment or comparison.
// I'll treat it as a variable that should hold the result of the conversion.

// Define an interface to describe the structure of 'personObj'
interface Person {
  premium: boolean | number;
}

// Function to convert the 'premium' property to a string
function convertPremiumToString(person: Person): string {
  return person.premium.toString();
}

// Example usage:
// Initialize a 'personObj' with a 'premium' property
const personObj: Person = {
  premium: true // or a number, e.g., 1
};

// Convert 'premium' to a string and store it in 'X'
let X: string = convertPremiumToString(personObj);

// 'result' is not used in the original code snippet provided.
// If 'result' is meant to store the same value as 'X', we can assign it here.
let result: string = X;
