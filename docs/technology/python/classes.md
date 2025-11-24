---
sidebar_position: 2  
---

# Classes in Python

I will use my past experiences with Object-Oriented Programming
to describe classes. Classes are objects with a clear structure
that can be persisted and called by other files and subsequently by functions.

Classes have their own characteristics that are inherited once the class is instantiated.

Consider the example of a house as a class, where each characteristic
is a class attribute, such as size, height, number of rooms, and so on:

![house](../python/img/python_house.jpeg)

A class is composed of three parts:

1. Class definition: its name.
2. Class constructor `__init__` that is initialized once the class
is instantiated.
3. The methods: class behaviors, things the class needs to do

## Example of Class

Follow an example of how to implement a class for the object `Car`:

```python
# 1. THE CLASS (The Blueprint)
class Car:
    # 2. THE CONSTRUCTOR (Initial Setup)
    # 'self' refers to the specific object being created right now
    def __init__(self, brand, color):
        self.brand = brand  # Attribute: Data it HAS
        self.color = color  # Attribute: Data it HAS
        self.is_running = False

    # 3. METHODS (Behaviors)
    # Actions the object CAN DO
    def start_engine(self):
        self.is_running = True
        print(f"The {self.brand} goes Vroom!")

# --- USING THE CLASS ---

# Create Objects (Instances)
my_car = Car("Toyota", "Black")
your_car = Car("Ferrari", "Red")

# Access Attributes
print(my_car.color)  # Output: Black

# Use Methods
my_car.start_engine() # Output: The Toyota goes Vroom!
```

### Inheritance

This is a key concept on the Object-Oriented Programming,
when characteristics from a parent class is called and utilized.

A given class can receive a parent class as argument, and can use
its functions, including its constructor.

Follow an example:

```python
# --- THE PARENT (Base Class) ---
class APIClient:
    def __init__(self, base_url):
        self.base_url = base_url
        print(f"   [Parent] Base URL set to {self.base_url}")

# --- THE CHILD (Subclass) ---
# We put the Parent class in parentheses
class SecureClient(APIClient):
    
    def __init__(self, base_url, api_key):
        # 1. First, let the parent do its job
        # We pass 'base_url' up to the parent
        super().__init__(base_url) 
        
        # 2. Now, do the child-specific work
        self.api_key = api_key
        print(f"   [Child] API Key set to {self.api_key}")

# --- USAGE ---
print("Creating client...")
client = SecureClient("https://google.com", "secret_123")

print("\nVerifying attributes:")
print(f"URL: {client.base_url}") # Inherited from Parent
print(f"Key: {client.api_key}")  # Defined in Child
```

This is the adoption of the concept of **DRY** that means
*Don't repeat yourself*. If the `super` is not utilized,
the constructor arguments are copied, generating duplicate code.
