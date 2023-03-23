def get_answer():
  for a in range(-10, 1000 + 1):
    for b in range(-10, 1000 + 1):
      for c in range(-10, 1000 + 1):
        res1 = a * b + c
        res2 = a + b * c
        if res1 == 2020 and res2 == 2021:
          return (a, b, c)
          
  return (0, 0, 0)

(a, b, c) = get_answer()
print(a, b, c)