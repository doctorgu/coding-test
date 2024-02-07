from numpy import vectorize
from dataclasses import dataclass
from scalar_to_vector_data import customers, orders
from time import process_time

"""
select	o.Id, o.TotalAmount,
		(select	FirstName from Customer where Id = o.CustomerId) FirstName
from	[Order] o
"""

@dataclass
class OrderCustomer:
    Id: int
    TotalAmount: int
    FirstName: str

def get_first_name(order):
    for customer in customers:
        if customer.Id == order.CustomerId:
            return OrderCustomer(Id=order.Id, TotalAmount=order.TotalAmount, FirstName=customer.FirstName)
        
    raise Exception(f'No CustomerId: {order.CustomerId}')

# Make test data larger
orders_dup = []
for i in range(500):
    orders_dup += orders

# loop version
start = process_time()
order_customers = []
for order in orders_dup:
    order_customers.append(get_first_name(order))
end = process_time()

# vectorize version
start_v = process_time()
get_order_customers = vectorize(get_first_name)
order_customers_v = get_order_customers(orders_dup)
end_v = process_time()

duration = (end - start)
duration_v = (end_v - start_v)

# loop is faster
print(f'loop: {duration}, vectorize: {duration_v}')
# loop: 0.359375, vectorize: 0.546875

