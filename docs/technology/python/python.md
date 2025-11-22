---
sidebar_position: 5
---

# Initial steps with Python

1. Creating your local environment using [Visual Studio Code](https://code.visualstudio.com): 

![Configure Python environment](img/python-1.png)

2. Click to create a new virtual environment:

![Create virtual environment](img/python-2.png)

3. Click on Venv:

![Click on venv](img/python-3.png)

# Applicable that fetch data from an API

```python
import os
import logging
import requests
import csv
from math import ceil

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

BASE_URL = os.getenv('POKEMON_BASE_URL')

def fetch_data(base_url):
    try:
        response = requests.get(f"{base_url}/pokemon")
        response.raise_for_status()
        data = response.json()

        total = data.get('count')
        if total is None:
            logging.error("'total' property not found in API response.")
            return []

        logging.info(f"Total records to fetch: {total}")
        results = []

        limit = 20
        offset = 20

        total_pages = ceil(total / offset)

        for page in range(1, total_pages +1):
            paginated_response = requests.get(f"{base_url}/pokemon?offset={offset}&limit={limit}")
            paginated_response.raise_for_status()
            logging.info(f"Fetching items {offset} from page {page} of {total} - URL: {paginated_response.url}")
            paginated_data = paginated_response.json()
            if (offset > total):
                offset = limit
            else:
                offset = offset + limit
            results.extend(paginated_data.get('results', [])) 

        logging.info(f"Fetched a total of {len(results)} records.")
        return results

    except requests.exceptions.RequestException as e:
        logging.error(f"An error occurred while fetching data: {e}")
        return []

def save_to_csv(results, output_file='results.csv'):
    if not results:
        logging.warning("No results to write to CSV.")
        return

    try:
        headers = results[0].keys()

        with open(output_file, mode='w', newline='', encoding='utf-8') as file:
            writer = csv.DictWriter(file, fieldnames=headers)
            writer.writeheader()
            writer.writerows(results)

        logging.info(f"Results saved to {output_file}")
    except Exception as e:
        logging.error(f"An error occurred while saving to CSV: {e}")

if __name__ == "__main__":
    results = fetch_data(BASE_URL)
    
    save_to_csv(results)
```