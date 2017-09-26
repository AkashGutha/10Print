# 10Print in python
import random

Iterations = 1 << 16
Random = 0

while Iterations > 0:
    Random = random.randrange(0, 10, 1)

    # random generation
    if(Random >= 5):
        print("/", end="")
    else:
        print("\\", end="")

    Iterations = Iterations - 1
