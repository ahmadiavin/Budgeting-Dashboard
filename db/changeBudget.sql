UPDATE budgetusers
SET budget = $1
WHERE username = $2
RETURNING *;
