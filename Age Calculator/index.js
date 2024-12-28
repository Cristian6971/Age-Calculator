const birthday = document.querySelector("#birthday");
const submitBtn = document.querySelector(".submit-btn");
const ageNumber = document.querySelector(".age-number");

function calculate() {
  const birthdayValue = birthday.value;
  if (!birthdayValue) {
    alert("Please enter your birthday");
  } else {
    const age = getAge(birthdayValue);
    ageNumber.innerText = `Your age is ${age} ${
      age > 1 ? "years" : "year"
    } old`;
  }
}

function getAge(birthdayValue) {
  const currentDate = new Date();
  const birthdayDate = new Date(birthdayValue);
  let age = currentDate.getFullYear() - birthdayDate.getFullYear();
  const monthDifference = currentDate.getMonth() - birthdayDate.getMonth();

  if (
    monthDifference < 0 ||
    (monthDifference === 0 && currentDate.getDate() < birthdayDate.getDate())
  ) {
    age--;
  }

  return age;
}

submitBtn.addEventListener("click", calculate);
