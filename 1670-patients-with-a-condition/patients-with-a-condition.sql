-- Write your PostgreSQL query statement below
SELECT *
FROM Patients
WHERE conditions LIKE '% DIAB1__%' OR conditions LIKE 'DIAB1__%'