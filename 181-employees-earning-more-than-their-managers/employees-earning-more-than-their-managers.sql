-- Write your PostgreSQL query statement below
SELECT m.name AS Employee
FROM Employee as e
JOIN Employee as m ON e.id = m.managerId 
WHERE m.salary > e.salary