#დავალება_1
# def is_palindrome(word):
#     word = word.lower()
#     start = 0
#     end = len(word) - 1
#     while start < end:
#         if word[start] != word[end]:
#             return False
#         start += 1
#         end -= 1
#     return True
# words = ["radar", "level", "rotor", "hello", "Wrold", "racecar"]
# for word in words:
#     if is_palindrome(word):
#         print("{} is a palindrome".format(word))
#     else:
#         print("{} is not a palindrome".format(word))

#დავალება_2
# def process_list(lst):
#     new_lst = []
#     for num in lst:
#         if lst.count(num) >= 2:
#             if num not in new_lst:
#                 new_lst.append(num)
#     if not new_lst:
#         print("List is empty")
#     else:
#         print(new_lst)
# box = [
#     [1, 1, 2, 2, 3],
#     [1, 2, 3, 4, 5]]
# for i, lst in enumerate(box, 1):
#     print(f"box {i}:")
#     process_list(lst)

#დავალება_3
# def add_first_letter(words):
#     new_word = ""
#     for word in words:
#         new_word += word[0]
#     print(new_word)
# box = [
#     ["Hello", "this", "is", "best", "academy"],
#     ["Join", "Goa", "and", "become", "chad"]]
# for words in box:
#     add_first_letter(words)

#დავალება_4
# first_list = list(range(10, 21))
# second_list = list(range(30, 51, 5))
# combined_list = first_list + second_list
# print(combined_list)

