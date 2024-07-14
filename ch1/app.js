const answer01 = document.querySelector(".answer-01");
const answer02 = document.querySelector(".answer-02");
const answer03 = document.querySelector(".answer-03");
const answer04 = document.querySelector(".answer-04");
const answer05 = document.querySelector(".answer-05");
const answer06 = document.querySelector(".answer-06");
const answer07 = document.querySelector(".answer-07");

let people = [
  {
    name: "Kim Suho",
    age: 35,
    job: "developer",
  },
  {
    name: "Hong Gildong",
    age: 40,
    job: "thief",
  },
  {
    name: "Pack Mujin",
    age: 42,
    job: "president",
  },
  {
    name: "Kent Beck",
    age: 62,
    job: "developer",
  },
  {
    name: "Martin Fowler",
    age: 65,
    job: "developer",
  },
  {
    name: "Uncle Bob",
    age: 22,
    job: "developer",
  },
  {
    name: "Lee Ilmin",
    age: 47,
    job: "developer",
  },
  {
    name: "IU",
    age: 27,
    job: "singer",
  },
  {
    name: "Mun Jaein",
    age: 63,
    job: "president",
  },
  {
    name: "Park Hyoshin",
    age: 40,
    job: "singer",
  },
];
let numbers = [
  5, 12, 34, 22, -6, 77, 30, 55, 102, 32, 1155, 324, 1142, 998, 921, 471, 753,
  662, 432,
];

let 홀수 = numbers.filter(function (v) {
  return v % 2 !== 0;
});
console.log("홀수들: ", 홀수);
answer01.innerHTML = 홀수.join(", ");

let 곱하기2 = numbers;
console.log("곱하기2: ", 곱하기2);

let 곱하기2한숫자순서대로정렬 = numbers;
console.log("곱하기2한숫자순서대로정렬: ", 곱하기2한숫자순서대로정렬);

let 나이가40이상인사람들 = people;
console.log("나이가40이상인사람들: ", 나이가40이상인사람들);

let 나이가50이상인사람들의이름 = people;
console.log("나이가50이상인사람들의이름: ", 나이가50이상인사람들의이름);

let 직업이developer인사람을나이순서대로정렬 = people;
console.log(
  "직업이developer인사람을나이순서대로정렬: ",
  직업이developer인사람을나이순서대로정렬
);

let 직업이developer인사람을나이순서대로정렬하고직업은대문자 = people;
console.log(
  "직업이developer인사람을나이순서대로정렬하고직업은대문자: ",
  직업이developer인사람을나이순서대로정렬하고직업은대문자
);
