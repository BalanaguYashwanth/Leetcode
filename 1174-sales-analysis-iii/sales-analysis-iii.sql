# Write your MySQL query statement below
SELECT product.product_id, product.product_name FROM product 
LEFT JOIN sales ON sales.product_id = product.product_id
GROUP BY sales.product_id 
HAVING min(sales.sale_date) >= '2019-01-01' AND max(sales.sale_date) <= '2019-03-31';
-- (
--     SELECT product_id FROM sales 
    
-- );

-- (
--     SELECT product_id, max(sale_date) FROM sales 
--     GROUP BY product_id
--     HAVING product_id = 5 
-- );