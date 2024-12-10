# Write your MySQL query statement below
SELECT activity_date as day, COUNT(DISTINCT user_id) as active_users  FROM Activity
WHERE activity_date >= '2019-06-28' and activity_date <= '2019-07-27'
GROUP BY  activity_date
-- HAVING activity_date >= 2019-06-28 and activity_date <= 2019-07-27
--  COUNT(DISTINCT user_id, activity_date), activity_date