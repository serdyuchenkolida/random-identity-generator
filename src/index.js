// random-identity-generator.js

// Function to generate a random number within a range
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to generate a random gender
function getRandomGender() {
  return Math.random() < 0.5 ? "male" : "female";
}

// Function to generate a random name based on gender and nationality
function getRandomName(gender, nationality) {
  const maleNamesUS = ["James", "John", "Robert", "Michael", "William", "David", "Joseph", "Richard", "Thomas", "Charles"];
  const femaleNamesUS = ["Mary", "Jennifer", "Linda", "Patricia", "Elizabeth", "Susan", "Jessica", "Sarah", "Karen", "Nancy"];
  const maleNamesUK = ["David", "Paul", "John", "Michael", "Andrew", "James", "Mark", "Robert", "Stephen", "Richard"];
  const femaleNamesUK = ["Susan", "Karen", "Sarah", "Michelle", "Jane", "Emma", "Amanda", "Laura", "Claire", "Julie"];
  const maleNamesFrance = ["Jean", "Pierre", "Paul", "Michel", "Jacques", "Louis", "Philippe", "Henri", "Daniel", "Robert"];
  const femaleNamesFrance = ["Marie", "Jeanne", "Sylvie", "Sophie", "Isabelle", "Charlotte", "Anne", "Catherine", "Christine", "Valérie"];
  const maleNamesJapan = ["Hiroshi", "Takeshi", "Masashi", "Kenji", "Akira", "Yoshiro", "Takashi", "Kazuki", "Tatsuya", "Kaito"];
  const femaleNamesJapan = ["Yui", "Sakura", "Airi", "Yuna", "Saki", "Hina", "Riko", "Nana", "Mio", "Haruka"];
  const maleNamesIndia = ["Ravi", "Suresh", "Rajesh", "Amit", "Vikram", "Rahul", "Sanjay", "Nitin", "Anil", "Sunil"];
  const femaleNamesIndia = ["Aarti", "Anita", "Pooja", "Priya", "Deepika", "Swati", "Neeta", "Divya", "Monika", "Neha"];
  const maleNamesRussia = ["Dmitry", "Ivan", "Sergei", "Andrei", "Alexei", "Mikhail", "Nikolai", "Vladimir", "Yuri", "Pavel"];
  const femaleNamesRussia = ["Elena", "Olga", "Tatiana", "Natalia", "Irina", "Svetlana", "Anna", "Marina", "Yulia", "Ekaterina"];

  let names;
  switch (nationality) {
    case "US":
      names = gender === "male" ? maleNamesUS : femaleNamesUS;
      break;
    case "UK":
      names = gender === "male" ? maleNamesUK : femaleNamesUK;
      break;
    case "France":
      names = gender === "male" ? maleNamesFrance : femaleNamesFrance;
      break;
    case "Japan":
      names = gender === "male" ? maleNamesJapan : femaleNamesJapan;
      break;
    case "India":
      names = gender === "male" ? maleNamesIndia : femaleNamesIndia;
      break;
    case "Russia":
      names = gender === "male" ? maleNamesRussia : femaleNamesRussia;
      break;
    default:
      // Default to US names if nationality is not specified or invalid
      names = gender === "male" ? maleNamesUS : femaleNamesUS;
      break;
  }

  return names[getRandomNumber(0, names.length - 1)];
}

// Function to generate a random age between 18 and 80
function getRandomAge() {
  return getRandomNumber(18, 80);
}

// Function to generate a random nationality
function getRandomNationality() {
  const nationalities = ["US", "UK", "France", "Japan", "India", "Russia"]; // Add more nationalities as needed
  return nationalities[getRandomNumber(0, nationalities.length - 1)];
}

// Function to generate a random identity
function generateRandomIdentity() {
  const gender = getRandomGender();
  const nationality = getRandomNationality();
  const name = getRandomName(gender, nationality);
  const age = getRandomAge();

  return {
    name: name,
    gender: gender,
    nationality: nationality,
    age: age,
  };
}

// Export the function for use as an npm package
module.exports = generateRandomIdentity;

// Usage example
console.log(generateRandomIdentity());
