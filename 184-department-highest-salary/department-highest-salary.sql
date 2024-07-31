-- Write your PostgreSQL query statement below
WITH OUTPUT AS (SELECT * FROM Employee WHERE (departmentId, employee.salary) IN (SELECT departmentId, MAX(salary) FROM Employee GROUP BY departmentId))

SELECT Department.name AS "Department", OUTPUT.name AS "Employee", OUTPUT.salary AS "Salary" FROM OUTPUT LEFT JOIN Department ON OUTPUT.departmentId = Department.id;
-- SELECT MAX(salary) FROM Employee GROUP BY departmentId;