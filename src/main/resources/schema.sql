DROP TABLE IF EXISTS member;

CREATE TABLE IF NOT EXISTS Member (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    creation DATE
);