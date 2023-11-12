SELECT class FROM Courses
GROUP BY Courses.class
HAVING COUNT(DISTINCT Student) >= 5