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
