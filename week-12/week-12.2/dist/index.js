"use strict";
function sumOfAge(user1, user2) {
    return user1.age + user2.age;
}
const age = sumOfAge({
    name: "Raju",
    age: 29,
}, {
    name: " shyam",
    age: 56,
});
console.log(age);
