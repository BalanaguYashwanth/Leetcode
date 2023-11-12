# Write your MySQL query statement below
SELECT u.name as name, COALESCE(SUM(r.distance),0) as travelled_distance
FROM Users as u
LEFT JOIN Rides as r ON u.id = r.user_id
GROUP BY r.user_id
ORDER BY travelled_distance DESC, name ASC
