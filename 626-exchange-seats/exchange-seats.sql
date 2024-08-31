-- SELECT * FROM Seat S1 JOIN S2 ON S1.id = S2.id-1

-- SELECT * FROM Seat LIMIT 1 OFFSET 1;

SELECT id, 
CASE WHEN ((id%2 = 1) AND (LEAD(student) OVER (ORDER BY id) IS NULL))
THEN student 
ELSE
    (CASE WHEN (id%2=1) 
    THEN 
    LEAD(student) OVER (ORDER BY id)
    ELSE
    LAG(student) OVER (ORDER BY id)
    END)
END AS 'student'
From Seat