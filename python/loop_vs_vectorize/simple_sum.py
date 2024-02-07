from numpy import sum
from time import process_time

lst = [i for i in range(10_000_000)]

start = process_time()
tot = 0
for v in lst:
    tot += v
end = process_time()
duration = end - start

start_v = process_time()
tot_v = sum(lst)
end_v = process_time()
duration_v = end_v - start_v

# vectorize is faster
print(f'loop: {duration}, vectorize: {duration_v}')
# loop: 1.6875, vectorize: 0.8125