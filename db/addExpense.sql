INSERT INTO expenditures
    ( date, description, category, price, username)
VALUES
    ($1, $2, $3, $4, $5);

SELECT * FROM expenditures
WHERE username = $5;

