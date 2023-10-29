-- Write your PostgreSQL query statement below
SELECT v.customer_id, COUNT(v.customer_id) as count_no_trans 
FROM Visits v
WHERE v.visit_id not in (SELECT DISTINCT visit_id from transactions)
-- LEFT JOIN Transactions t ON v.visit_id = t.visit_id WHERE t.amount IS NULL
GROUP BY v.customer_id
ORDER BY v.customer_id