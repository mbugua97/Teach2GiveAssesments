CREATE TABLE items (
    id INT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL
);
INSERT INTO items(id, name, price) 
VALUES (1, 'Item1', 50.00);
INSERT INTO items(id, name, price) 
VALUES (2, 'Item2', 20.00);
INSERT INTO items(id, name, price) 
VALUES (3, 'Item3', 40.00);
INSERT INTO items(id, name, price) 
VALUES (4, 'Item4', 30.00);
INSERT INTO items(id, name, price) 
VALUES (5, 'Item5', 10.00);

CREATE TABLE item_changes (
    change_id INT PRIMARY KEY AUTO_INCREMENT,
    item_id INT,
    change_type VARCHAR(10),
    change_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (item_id) REFERENCES items(id)
);
