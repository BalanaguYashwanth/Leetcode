-- Write your PostgreSQL query statement below
SELECT DISTINCT(p1.email)
FROM Person as p1
JOIN Person as p2 ON p1.email = p2.email AND p1.id != p2.id
