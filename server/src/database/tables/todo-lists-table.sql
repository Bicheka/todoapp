CREATE TABLE IF NOT EXISTS todo_lists (
    id SERIAL PRIMARY KEY,
    list_title VARCHAR(255),
    done INT,
    total INT
)