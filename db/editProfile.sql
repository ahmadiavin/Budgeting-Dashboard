UPDATE budgetusers
SET first_name = $1,
 last_name = $2, 
 age = $3
WHERE username = $4
RETURNING *;
