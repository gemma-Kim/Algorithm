// 1. 완주하지 못한 선수(LV.1)
// https://programmers.co.kr/learn/courses/30/lessons/42576?language=javascript

function solution(participant, completion) {
  let sortedParticipant = participant.sort();
  let sortedCompletion = completion.sort();

  for (let i = 0; i < sortedParticipant.length; i++) {
    if (sortedParticipant[i] !== sortedCompletion[i]) {
      return sortedParticipant[i];
    }
  }
}
