-- Write your PostgreSQL query statement below
SELECT S.name
FROM Orders as O
JOIN Company as C ON O.com_id = C.com_id AND C.name = 'RED'
RIGHT JOIN SalesPerson as S ON O.sales_id = S.sales_id
WHERE C.name != 'RED' OR C.name IS NULL
