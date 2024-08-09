# Write your MySQL query statement below
SELECT product_id, product_name FROM product where product_id IN 
(
    SELECT product_id FROM sales 
    GROUP BY product_id
    HAVING min(sale_date) >= '2019-01-01' AND max(sale_date) <= '2019-03-31'
);

-- (
--     SELECT product_id, max(sale_date) FROM sales 
--     GROUP BY product_id
--     HAVING product_id = 5 
-- );