#დავალება_1
# def sum_nums(numbers):
#     sum = 0
#     for i in range(0,len(numbers),2):
#         sum += numbers[i]
#     return sum

# igt = [0,1,2,3,4,5,6,7,8,9,10]
# result = sum_nums(igt)
# print("sum of the even index: ",result)

#დავალება_2
# def even_odd(number):
#      if number % 2 ==0:
#          return "even"
#      else:
#          return "odd"
# user_input = int(input("enter a number: "))
# print("your number: ",user_input,"is",even_odd(user_input))

#დავალება_3
# def is_prime(number):
#     if number <= 1:  
#         return False
#     if number <= 3: 
#         return True
#     if number % 2 == 0 or number % 3 == 0:  
#         return "not prime"

    
#     for i in range(5, int(number**0.5) + 1):
#         if number % i == 0:  
#             return False
#     return "Prime"

#დავალება_4
# def capitalised_names(names):
#     return [name.capitalize() for name in names]
# names = ["saba","luka","nika","data"]
# print(capitalised_names(names))

#დავალება_5
def abdated_list(numbers):
    updated_numbers =[]
    for i in numbers:
        if i % 2 == 0:
            updated_numbers.append(i // 2)
        else:
            updated_numbers.append(i * 2)
    return updated_numbers
nums = [1,2,3,4,5,6,7,8,9,10]
print(abdated_list(nums))
