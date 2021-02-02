# 1. 프로그래머스: 더 맵게(LV.2)
# https://programmers.co.kr/learn/courses/30/lessons/42626

import heapq

def solution(scoville, K):
    heapq.heapify(scoville)
    count = 0
    while scoville[0] < K:
        try:
            heapq.heappush(scoville, heapq.heappop(scoville)+(2*heapq.heappop(scoville)))
        except IndexError:
            return -1
        count += 1
    return count


# 2. 프로그래머스: 구명보트(LV.2)
# https://programmers.co.kr/learn/courses/30/lessons/42885

def solution(people, limit):
    people.sort()
    boat = len(people)
    min_idx = 0
    max_idx = len(people) - 1
    while min_idx < max_idx:
        if people[min_idx] + people[max_idx] <= limit:
            boat -= 1
            min_idx += 1
            max_idx -= 1
        else:
            max_idx -= 1
    return boat


# 3. 프로그래머스: 영어 끝말잇기(LV.2)
# https://programmers.co.kr/learn/courses/30/lessons/12981

def solution(n, words):
    ws = []
    result = []
    for i in range(len(words)-1):
        ws.append(words[i])
        if words[i+1] in ws or words[i][-1] != words[i+1][0]:
            result = [(i+1)%n + 1,(i+1)//n + 1]
            break
    if result:
        return result
    return [0,0]


# 4. 프로그래머스: 기능개발(LV.2)
# https://programmers.co.kr/learn/courses/30/lessons/42586 

import math

def solution(progresses, speeds):
    lefted = [math.ceil((100 - progresses[i])/speeds[i]) for i in range(len(progresses))]
    result = []
    count = 1
    min_idx = 0
    max_idx = 1
    while max_idx < len(speeds):
        if lefted[min_idx] >= lefted[max_idx]:
            count += 1
            max_idx += 1
        else:
            result.append(count)
            count = 1
            min_idx = max_idx
            max_idx += 1
    result.append(count)
    return result
