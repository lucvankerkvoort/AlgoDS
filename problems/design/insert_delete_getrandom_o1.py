"""
LeetCode 380. Insert Delete GetRandom O(1)

Design a structure supporting insert, remove, and getRandom (uniform over
current elements), all averaging O(1).

Approach: a dynamic array for O(1) getRandom (random.choice needs index
access) paired with a hash map from value -> its index in the array. To
delete in O(1), swap the target with the last element (updating the
map), then pop the array's last slot -- avoiding an O(n) shift.

Time:  O(1) average per operation
Space: O(n)
"""

import random


class RandomizedSet:
    def __init__(self):
        self.values = []
        self.index = {}  # value -> index in self.values

    def insert(self, val: int) -> bool:
        if val in self.index:
            return False
        self.index[val] = len(self.values)
        self.values.append(val)
        return True

    def remove(self, val: int) -> bool:
        if val not in self.index:
            return False
        idx = self.index[val]
        last_val = self.values[-1]
        self.values[idx] = last_val
        self.index[last_val] = idx
        self.values.pop()
        del self.index[val]
        return True

    def get_random(self) -> int:
        return random.choice(self.values)


if __name__ == "__main__":
    rs = RandomizedSet()
    assert rs.insert(1) is True
    assert rs.remove(2) is False
    assert rs.insert(2) is True
    assert rs.insert(2) is False
    assert rs.get_random() in (1, 2)
    assert rs.remove(1) is True
    assert rs.insert(1) is True
    assert rs.get_random() in (1, 2)
    print("All tests passed.")
