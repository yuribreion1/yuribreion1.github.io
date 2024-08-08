---
layout: default
title: Data Analysis with SQL databases - Part 1
parent: IT Topics
nav_order: 3
---

As part of business analyst activities, the knowledge of viewing and obtaining data from databases is crucial to evaluating business requirements and validating use-case scenarios. 
It is possible to simulate scenarios and load test data to train locally; you do not need to provision a database with the cloud providers. I'll share the steps that I utilized to train and test my knowledge.

[DBeaver](https://dbeaver.io) is a free cross-platform database tool for developers, database administrators, analysts, and everyone working with data. With this tool, you can create a simple database to run your first queries.

After the installation, a prompt will appear to ask you to create a sample database using SQLite. 
![create_sample_database](/assets/img/analysis_with_databases/create_sample_database.jpg "Create sample database")

It is also possible by clicking on **Help > Create Sample Base**.

The new database is visible on the top-left side of the tool:

![database_available](/assets/img/analysis_with_databases/database_available.jpg "Database available on Dbeaver")

Right-click on the database and select Connect. A prompt asks you to download the database driver: 

![download_database_drivers](/assets/img/analysis_with_databases/download_database_drivers.jpg "Download database driver")

Setup is complete, and now you're able to write your SQL queries on the database. 

Now, let's see what tables are on this database. To check them, expand the arrow on the database name:

![expand_tables](/assets/img/analysis_with_databases/expand_tables.gif "Expand tables")

Follow the tables available:
- Album
- Artist
- Customer
- Employee
- Invoice
- InvoiceLine

Other tables are available, but let's focus on the ones above

Let's create our first SQL queries. Right-click on the connection in the **SQL Editor > Open SQL script**. A text editor will be available for you

## Writing first SQL queries

There are tutorials explaining how to write queries as `SELECT * FROM TABLE`, but honestly, this isn't the best way to start your discovery of the database. Imagine if the CUSTOMER table had millions of rows. How expensive is this simple query to get plenty of records that will not help you with this initial analysis. 

My recommendation to you is to limit the number of rows initially; it will give you a notion of the columns and values on the table.

To limit the number of rows, use the following script: 
``` sql
SELECT * FROM CUSTOMER LIMIT 20; -- get 20 rows from the table CUSTOMER
```

A tab on the bottom will present the query result: 

![query_result](/assets/img/analysis_with_databases/query_result.jpg "Query result")

### Customers not related to a company

If you take a brief look at the image, you'll see rows where the company column is null. This situation makes us think: is it acceptable? Whether you agree or disagree, these situations can help you understand how the company works and how the data is organized.

Let's discover how many rows have customers where the company is null, thanks to the keyword `COUNT`:

``` sql
SELECT COUNT(*) FROM CUSTOMER WHERE COMPANY IS NULL;
```

![customer_null](/assets/img/analysis_with_databases/company_null.jpg "Query result from customer table")

There are 49 customers for whom the company is null, but **what percentage of all customers does the result represent**? How do we get the total number of customers from the database? Using the same SQL keyword without the WHERE clause:

``` sql
SELECT COUNT(*) FROM CUSTOMER;
```

The query result is 59. **Roughly, 83% of the customers are not related to a company**.

Now, you're capable of approaching a database and discovering the data structure in terms of tables and columns. And getting the first insights and information thanks to SQL scripts. 

In the next post, we'll combine tables to build the information that you'll need to collect.
