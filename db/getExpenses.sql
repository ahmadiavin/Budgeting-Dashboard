-- SELECT * FROM expenditures
-- WHERE username = $1;

SELECT e.* FROM expenditures e
INNER JOIN budgetusers b
ON b.username = e.username
WHERE b.username = $1;