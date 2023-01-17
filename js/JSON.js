import { users } from "./data.js";

//convert to raw data using parse
localStorage.setItem("users", JSON.stringify(users));

const rere = JSON.stringify(users.Alex, ["email", "isLoggedIn"], 10);

console.log(rere, "rere");

//convert to JSON using JSON.stringify
const fromLocalStorage = localStorage.getItem("users");
console.log(fromLocalStorage, "FormLocalStorage");

const backToRawData = JSON.parse(fromLocalStorage, (key, value) => {
  const newData =
    typeof value === "string" && key != "email" ? value.toUpperCase() : value;
  return newData;
});
console.log(backToRawData, "CONNVERTEDJSON");

const skillsRecord = [];
for (let person in backToRawData) {
  const user = backToRawData[person];
  const friendsCount = user.skills.length;
  //   console.log(friendsCount, "skills");
  skillsRecord.push({
    user: person,
    skillCount: friendsCount,
  });
}

// console.log(skillsRecord, "skillRecord");

const sorted = skillsRecord
  .slice(0)
  .sort((a, b) => a.skillCount - b.skillCount);
console.log(sorted, "sorted");

const highestSkills = sorted[sorted.length - 1];
console.log(highestSkills, "hghtest");
