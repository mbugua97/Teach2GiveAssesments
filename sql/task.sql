
-- 1. Write a query that delivers the names of all employees who work in the same department as the employee with the highest salary.
-- Table: employees
-- employee_id	employee_name	department_id	salary
-- 1	John Doe	1	100000
-- 2	Jane Smith	1

SELECT employee_name
FROM employees
WHERE department_id = (
    SELECT department_id
    FROM employees
    ORDER BY salary DESC
    LIMIT 1
);

-- 2. Write a query to calculate the 7-day moving average of sales for each product in a given range using SQL window functions.
-- Table: sales
-- sale_id	product_id	sale_date	sales_amount
-- 1	1	2023-06-01	100
-- 2	1	2023-06-02	150
-- 3	1	2023-06-03	200
-- 4	1	2023-06-04	250
-- 5	2	2023-06-01	300
-- 6	2	2023-06-02	350
-- 7	2	2023-06-03	400
-- 8	2	2023-06-04	450

SELECT
    product_id,
    sale_date,
    sales_amount,
    AVG(sales_amount) OVER (
        PARTITION BY product_id
        ORDER BY sale_date
        ROWS BETWEEN 6 PRECEDING AND CURRENT ROW
    ) AS moving_avg
FROM sales;

-- 3. Write a query to find the names of any customers who have made a purchase in all categories.
-- Table: customers
-- customer_id	customer_name
-- 1	Alice
-- 2	Bob
-- 3	Charlie
-- Table: categories
-- category_id	category_name
-- 1	Electronics
-- 2	Clothing
-- 3	Groceries
-- Table: purchases
-- purchase_id	customer_id	category_id
-- 1	1	1
-- 2	1	2
-- 3	1	3
-- 4	2	1
-- 5	2	2

SELECT c.customer_name
FROM customers c
JOIN purchases p ON c.customer_id = p.customer_id
GROUP BY c.customer_id, c.customer_name
HAVING COUNT(DISTINCT p.category_id) = (SELECT COUNT(*) FROM categories);



-- 4. Write a query that retrieves products with the same name but different prices.
-- Table: products
-- product_id	product_name	price
-- 1	Laptop	1000
-- 2	Laptop	1200
-- 3	Phone	800
-- 4	Tablet	600
-- 5	Tablet	650

SELECT product_name
FROM products
GROUP BY product_name
HAVING COUNT(DISTINCT price) > 1;



-- 5. Write a query that delivers the second-highest salary in an "employees" table.
-- Table: employees
-- employee_id	employee_name	department_id	salary
-- 1	John Doe	1	100000
-- 2	Jane Smith	1	95000
-- 3	Alice Brown	2	120000
-- 4	Bob Johnson	2	110000
-- 5	Charlie Black	3	80000

SELECT MAX(salary) AS second_highest_salary
FROM employees
WHERE salary < (SELECT MAX(salary) FROM employees);

-- 6. Write a query that delivers the total sales for each customer in a database, including any with no sales.
-- Table: customers
-- customer_id	customer_name
-- 1	Alice
-- 2	Bob
-- 3	Charlie
-- Table: sales
-- sale_id	customer_id	sale_amount
-- 1	1	500
-- 2	1	300
-- 3	2	400
-- 4	2	200


SELECT c.customer_name, COALESCE(SUM(s.sales_amount), 0) AS total_sales
FROM customers c LEFT JOIN sales s ON c.customer_id = s.customer_id
GROUP BY c.customer_id, c.customer_name;


-- 7. Write a query that delivers the name of any department with more than five employees, along with the average salary of these employees.
-- Table: employees
-- employee_id	employee_name	department_id	salary
-- 1	John Doe	1	100000
-- 2	Jane Smith	1	95000
-- 3	Alice Brown	1	90000
-- 4	Bob Johnson	1	85000
-- 5	Charlie Black	1	80000
-- 6	David Green	1	75000
-- 7	Eve White	2	110000
-- Table: departments
-- department_id	department_name
-- 1	HR
-- 2	Finance

select d.department_name,AVG(e.salary) as average_salary
from departments d
join employees e on d.department_id = e.department_id
group by d.department_id, d.department_name
having COUNT(e.employee_id) > 5;



-- 8. Write a query that delivers a list of employees without an assigned manager.
-- Table: employees
-- employee_id	employee_name	manager_id
-- 1	John Doe	NULL
-- 2	Jane Smith	1
-- 3	Alice Brown	1
-- 4	Bob Johnson	2
-- 5	Charlie Black	NULL

SELECT employee_name
FROM Employees
WHERE manager_id IS NULL;




-- 9. You have a SQL database table named "orders", with columns "order_id", "customer_id", and "order_date". Write a query to update the order date for order number 2045 to "2023-07-23" and save the changes permanently to the database with the COMMIT function.
-- Table: orders
-- order_id	customer_id	order_date
-- 2043	1	2023-06-01
-- 2044	2	2023-06-02
-- 2045	3	2023-06-03
-- 2046	1	2023-06-04
 
UPDATE orders
SET order_date = '2023-07-23'
WHERE order_id = 2045;

COMMIT;
