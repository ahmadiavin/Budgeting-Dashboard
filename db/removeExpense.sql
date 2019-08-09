DELETE FROM expenditures 
WHERE id = $1;
SELECT * FROM expenditures
WHERE username = $2;