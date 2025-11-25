---
sidebar_position: 3
---

# Data Structures

There are two important data structures in Python that are commonly used:

## List

It is an ordered collection of items, represented by square brackets `[]`. As the description says, should be used when the order matters. For example, a line of people waiting for a bus.

```python
# Create a list of fruits
fruits = ["Apple", "Banana", "Cherry"]

# Access item by position
print(fruits[0]) # Output: Apple
print(fruits[1]) # Output: Banana
```

## Dictionary - Dict

In contrast with the list, a dict is a collection of key-value pairs. Like a real dictionary, that uses the word as reference to find its definition.

It is useful when you want to find information quickly using a label. For example, looking up a user e-mail by their username.

```python
# Create a dictionary of people
user = {
  "name": "John Doe",
  "age": 30,
  "city": "New York"
}

# Accessed by key

print(user["name"]) # Output: John Doe
print(user["age"])  # Output: 30
```
