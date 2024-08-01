# Write your MySQL query statement below
-- WITH confirmedCount AS (
--     SELECT user_id, COUNT(user_id) FROM Confirmations WHERE action = 'confirmed' GROUP BY user_id
-- )
-- SELECT * FROM confirmedCount;
-- SELECT COUNT(user_id) / COUNT(confirmedCount) FROM Confirmations GROUP BY user_id;

-- WITH FINAL AS (SELECT user_id, ROUND((SUM(CASE WHEN action = 'confirmed' THEN 1 ELSE 0 END)/COUNT(user_id)), 2) AS 'confirmation_rate' FROM Confirmations GROUP BY user_id)

-- SELECT Signups.user_id, (CASE WHEN confirmation_rate IS NULL THEN 0 ELSE confirmation_rate END ) AS 'confirmation_rate'  FROM Signups LEFT JOIN FINAL ON Signups.user_id = FINAL.user_id;

-- SELECT Signups.user_id, 
-- ROUND(SUM(CASE WHEN Confirmations.action = 'confirmed' THEN 1 ELSE 0 END)/COUNT(Confirmations.user_id), 2)
-- AS 'confirmation_rate' FROM Signups LEFT JOIN Confirmations ON Signups.user_id = Confirmations.user_id;


SELECT Signups.user_id, ROUND(COALESCE(SUM(CASE WHEN Confirmations.action = 'confirmed' THEN 1 ELSE 0 END)/COUNT(Confirmations.user_id), 0), 2) AS 'confirmation_rate' FROM Signups LEFT JOIN Confirmations ON Signups.user_id = Confirmations.user_id GROUP BY user_id;























