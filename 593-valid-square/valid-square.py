class Solution:
    def validSquare(self, p1: List[int], p2: List[int], p3: List[int], p4: List[int]) -> bool:
        def distance(p1,p2):
            return pow((p1[0]-p2[0]),2)+pow((p1[1]-p2[1]),2)
        
        def check(p1,p2,p3,p4):
            return distance(p1,p2) > 0 and distance(p1,p2) == distance(p2,p3) and distance(p2,p3) == distance(p3,p4) and distance(p3,p4) == distance(p4,p1) and distance(p1,p3) == distance(p2,p4) and  p1!=p3 and p2!=p4

        return check(p1,p2,p3,p4) or check(p1,p3,p2,p4) or check(p1,p2,p4,p3)

