// 1. 모의고사 (LV.1)
// https://programmers.co.kr/learn/courses/30/lessons/42840

function solution(answers) {
  let max = 0;
  let person_correct_count = new Object();
  let person = [3, 2, 1];
  const personAnswer = {
    1: [5, 4, 3, 2, 1],
    2: [5, 2, 4, 2, 3, 2, 1, 2],
    3: [5, 5, 4, 4, 2, 2, 1, 1, 3, 3],
  };

  while (person.length) {
    const personNumber = person.slice(-1)[0];
    let correctAnswerCount = 0;

    let personAnswerArr;
    let personAnswerLength;

    personAnswerArr = personAnswer[personNumber];
    personAnswerLength = personAnswerArr.length;

    for (let answer of answers) {
      if (
        answer ===
        personAnswerArr.slice(personAnswerLength - 1, personAnswerLength)[0]
      ) {
        correctAnswerCount++;
      }

      personAnswerLength--;

      if (!personAnswerLength) {
        personAnswerLength = personAnswerArr.length;
      }
    }

    person.pop();
    person_correct_count[personNumber] = correctAnswerCount;

    if (correctAnswerCount > max) {
      max = correctAnswerCount;
    }
  }

  let result = [];
  for (let [person, count] of Object.entries(person_correct_count)) {
    if (count === max) {
      result.push(Number(person));
    }
  }

  return result;
}
