# Write your MySQL query statement below
-- SELECT EmployeeUNI.unique_id, Employees.name FROM Employees 
-- LEFT JOIN EmployeeUNI ON Employees.id = EmployeeUNI.id; 

SELECT CASE 
WHEN Employees.id IN (SELECT id FROM EmployeeUNI) THEN EmployeeUNI.unique_id
ELSE null
END as unique_id, 
Employees.name
FROM Employees
LEFT JOIN EmployeeUNI ON Employees.id = EmployeeUNI.id;
