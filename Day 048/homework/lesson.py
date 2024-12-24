#დავალება_1
# Create a function that takes an integer as an 
# argument and returns "Even" for even numbers or "Odd" for odd numbers.

# def even_or_odd(number):
#     if number % 2 == 0:
#         return "Even"
#     else:
#         return "Odd"

#დავალება_2
# Complete the solution so that it reverses the string passed into it

# def solution(string):
#     return string[::-1]

#დავალება_3
# Write a function that accepts an integer n and 
# a string s as parameters, and returns a string of s repeated exactly n times.

# def repeat_str(repeat, string):
#     return repeat * string

#დავალება_4
# Create a function that returns the sum of the 
# two lowest positive numbers given an array 
# of minimum 4 positive integers. No floats or non-positive integers will be passed.

# def sum_two_smallest_numbers(numbers):
#     numbers.sort()
#     return numbers[0] + numbers[1]

#დავალება_5
# Given a Divisor and a Bound , Find the largest integer N , Such That ,

# def max_multiple(divisor, bound):
#     if bound % divisor == 0:
#         return bound
    
#     multiples = []
    
#     for num in range(divisor, bound):
#         if num % divisor == 0:
#             multiples.append(num)

#დავალება_6
# The first input array is the key to the correct answers 
# to an exam, like ["a", "a", "b", "d"]. 
# The second one contains a student's submitted answers.

# The two arrays are not empty and are the same length. 
# Return the score for this array of answers, 
# giving +4 for each correct answer, -1 for each 
# incorrect answer, and +0 for each blank answer, 
# represented as an empty string (in C the space character is used).

# If the score < 0, return 0.


# def check_exam(correct_answers,test_answers):
#     score = 0
    
#     for index in range(len(correct_answers)):
#         if correct_answers[index] == test_answers[index]:
#             score = score + 4
#         elif test_answers[index]  == "":
#             score = score + 0
#         else:
#             score = score - 1
    
#     if score < 0:
#         return 0
#     else:
#         return score