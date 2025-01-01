---
title: Crash landing on SQL Sub-Queries – A focused example
date: "2019-02-24T23:46:37.121Z"
template: "post"
draft: false
slug: "/posts/crash-landing-on-sql-sub-queries"
category: "Data"
tags:
  - "SQL"
  - "Sub Queries"
description: "SQL is one of the common and primary tools for data scientists to communicate with relational databases.  SQL, the abbreviation for Structured Query Language, is used to perform tasks such as creating, reading, updating, and deleting tables in a database. It has the reputation of being simple and easy to use. 

By the name of it, many of us can guess that a query within the query is a sub-query. Yes, this is correct. But not everything is a walk in the park with it, and one of the biggest challenges for newbies is to understand the use of sub-queries."
socialImage: "./image.jpg"
---

SQL Queries
Supposedly that you are knowledgeable enough to recognise the following  SQL:

1- SELECT column_name,
2- FROM table_name,
3- WHERE condition;

You might be surprised at the fact (which is not really obvious) that this is not the way a query is processed! To all intents and purposes, it is almost the other way around:

1- FROM the table_name
2- WHERE this condition is true
3- SELECT the rows of the column_name;

Ha, is it important to know that? Yes, because if you understand this logic, it will be more natural and crystal clear to visualise the wish of generating a sub-query later. With SQL, moreover,  understanding these behind the scenes is as important as knowing how to write the queries.

![Let’s say you have the following table order_data](/table1.jpg)

If we want to retrieve the average orders by merchant_name, the query will be:

```python
SELECT merchant_name,
AVG(total_orders) AS avg_orders
FROM order_data
GROUP BY merchant_name;
```

Which will give the following result:

So far, no mystery, right?

SQL Sub-Queries
Next, what if we want to filter only the merchants with average orders higher than 30,000? Normally, our first approach would be something like that:

 
```python
SELECT merchant_name,
AVG(total_orders) avg_orders
FROM order_data
WHERE avg_orders > 30000
GROUP BY merchant_name;
```

However, the first attempt generates an aggregation error.



It gave us an aggregation error, but why? Let’s do the steps according to the way the query is processed:
```python
1: FROM order_data — OK, the table exists, so let’s keep going;
2: WHERE avg_orders > 30000 
```

Hummmm, here we have an error, how could the values be filtered if the calculation wasn’t yet done?
That is a perfect example where a sub-query need to be used. What we need to do is to first generate the field avg_orders, so when the WHEN statement comes to filter, the calculation will be already there! As per the query logic, this process needs to be done on the FROM statement, as it comes before the filter WHEN. Let’s see how this query looks like:

```python
SELECT merchant_name, avg_orders
FROM -- Here we make our sub-query:
(SELECT merchant_name,(total_orders) AS avg_orders ) order_data
GROUP BY merchant_name) ABC -- End of the sub-query
WHERE avg_orders > 30000;
```

 

Success!

 

Can you see now what happened?

1: The FROM statement generated the grouped value we need;
2: WHEN filtered according to our specification;
3: Finally, SELECT took the columns we had specified.
 

Conclusion
When all is said and done, the key take-away is that we need sub-queries most of the time we would like to filter aggregated fields. Some tips to help you upon writing them:

Remember to generate an alias after the sub-query. On the example, there’s an “ABC” just after the end of it, but it can be anything you want. You can consider this as naming a newly created table from your sub-query result ^^ .

Even if SQL is case insensitive, it’s good practice to capitalise on the statements. It’s also good to write with indentation, as it improves the readability of your query. It’s surprisingly easy to get lost even with small queries.

And that’s it for today. I hope sub-queries are a bit more demystified for you now! Let me know your thoughts in the comments, and feel free to add some more practical examples as well!
