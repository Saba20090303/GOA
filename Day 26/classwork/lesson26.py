#დავალება_1
def numbers(start, end):
    for i in range(start, end):
        print(i)


numbers(1,8)
numbers(5, 10)

#დავალება_2
def calculate_sum(start, end):
    result = 0
    for i in range(start, end):
        result = result + i
    print(result)


calculate_sum(2,5)

#დავალება_3
def calculate_arithmetic(start, end):
    numbers = []

    for i in range(start, end):
        numbers.append(i)
    
    result = sum(numbers) / len(numbers)

    print(result)

calculate_arithmetic(5, 11)

#დავალება_4
def print_char(name, index):
    print(name[index])

print_char("Luka", 3)

#დავალება_5