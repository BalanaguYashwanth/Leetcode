# Write your MySQL query statement below
SELECT Users.user_id as 'buyer_id', Users.join_date,
SUM(CASE WHEN Orders.order_date >= '2019-01-01' AND Orders.order_date <= '2019-12-31' THEN 1 ELSE 0 END) AS 'orders_in_2019'
FROM Users LEFT JOIN Orders ON  Users.user_id = Orders.buyer_id GROUP BY Users.user_id
ORDER BY Users.user_id ASC;


