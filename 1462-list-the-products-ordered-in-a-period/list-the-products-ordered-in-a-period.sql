
SELECT Products.product_name, SUM(Orders.unit) as unit FROM Products
LEFT JOIN Orders
ON Products.product_id = Orders.product_id 
WHERE Orders.order_date >= '2020-02-01' AND Orders.order_date <= '2020-02-29'
GROUP BY Products.product_id
HAVING SUM(Orders.unit) >= 100
-- WHERE (Orders.order_date >= 2020-02-01 AND Orders.order_date <= 2020-02-29) 



-- # Write your MySQL query statement below
-- SELECT Products.product_name, SUM(Orders.unit) FROM Products
-- LEFT JOIN Orders
-- ON Products.product_id = Orders.product_id
-- GROUP BY Products.product_id
-- -- HAVING Orders.order_date <= 2020-02-29
-- -- HAVING SUM(Orders.unit) > 100

-- SELECT Products.product_name,
-- CASE WHEN 
-- SUM(
--     CASE WHEN 
--     TRUE
--     THEN Orders.unit
--     ELSE 0 
--     END
-- ) > 100 THEN 100 END 
-- as unit FROM Products
-- LEFT JOIN Orders
-- ON Products.product_id = Orders.product_id
-- GROUP BY Products.product_id

    -- (Orders.order_date >= 2020-02-01 AND Orders.order_date <= 2020-02-29) 

