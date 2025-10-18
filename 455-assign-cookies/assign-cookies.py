class Solution:
    def findContentChildren(self, g: List[int], s: List[int]) -> int:
        g.sort()
        s.sort()
        child_pointer = 0
        for cookie in s:
            if child_pointer < len(g) and cookie >= g[child_pointer]:
                child_pointer = child_pointer + 1

        return child_pointer

            

        