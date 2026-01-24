CREATE TABLE IF NOT EXISTS todos (
    id SERIAL PRIMARY KEY,
    list_id INT,
    task TEXT,
    priority INT,
    completed BOOLEAN DEFAULT false,
    created_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
    updated_at TIMESTAMP NOT NULL DEFAULT current_timestamp,

    -- Foreign key constraint
    CONSTRAINT fk_list
        FOREIGN KEY (list_id)
        REFERENCES todo_lists(id)
        ON DELETE CASCADE
);