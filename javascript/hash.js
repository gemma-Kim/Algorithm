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

function getClothKinds(closet) {
  return Object.keys(closet);
}

function addClothKinds(closet, newClothKind) {
  closet[newClothKind] = [];
  return closet;
}

function addNewCloth(closet, clothKind, cloth) {
  let newCloset = closet;
  newCloset[clothKind].push(cloth);
  return newCloset;
}

function checkExistClothKind(closetKindArr, clothKind) {
  return closetKindArr.indexOf(clothKind) === -1;
}

function getKindCount(closet, clothKind) {
  return closet[clothKind].length + 1;
}

// 2. 위장(LV.2)
// https://programmers.co.kr/learn/courses/30/lessons/42578

function getClothKinds(closet) {
  return Object.keys(closet);
}

function addClothKinds(closet, newClothKind) {
  closet[newClothKind] = [];
  return closet;
}

function addNewCloth(closet, clothKind, cloth) {
  let newCloset = closet;
  newCloset[clothKind].push(cloth);
  return newCloset;
}

function checkExistClothKind(closetKindArr, clothKind) {
  return closetKindArr.indexOf(clothKind) === -1;
}

function getKindCount(closet, clothKind) {
  return closet[clothKind].length + 1;
}

function solution(clothes) {
  let closet = new Object();

  for (let i = 0; i < clothes.length; i++) {
    const clothKind = clothes[i][1];
    const cloth = clothes[i][0];

    const nowClosetKinds = getClothKinds(closet);
    if (checkExistClothKind(nowClosetKinds, clothKind)) {
      closet = addClothKinds(closet, clothKind);
    }

    closet = addNewCloth(closet, clothKind, cloth);
  }

  const possibleKinds = getClothKinds(closet);
  let possibleKindCount = 1;

  for (let kind of possibleKinds) {
    possibleKindCount *= getKindCount(closet, kind);
  }

  return possibleKindCount - 1;
}
