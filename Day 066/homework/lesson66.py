#დავალება_1

# Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

# This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

# All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

# def is_valid(braces):
#     stack = []
#     mapping = {')': '(', ']': '[', '}': '{'}
    
#     for char in braces:
#         if char in mapping.values():
#             stack.append(char)
#         elif char in mapping.keys():
#             if not stack or mapping[char] != stack.pop():
#                 return False
#         else:
#             return False
    
#     return len(stack) == 0

#დავალება_2

# In this kata you are required to, given a string, replace every letter with its position in the alphabet.

# If anything in the text isn't a letter, ignore it and don't return it.

# "a" = 1, "b" = 2, etc.

# def alphabet_position(text):
#     result = []
#     for char in text:
#         if char.isalpha():  
#             if char.isupper():  
#                 result.append(str(ord(char) - ord('A') + 1))
#             elif char.islower():  
#                 result.append(str(ord(char) - ord('a') + 1))
#     return ' '.join(result)

#დავალება_3

# This kata requires you to write a function which merges two strings together. It does so by merging the end of the first string with the start of the second string together when they are an exact match.

# "abcde" + "cdefgh" => "abcdefgh"
# "abaab" + "aabab" => "abaabab"
# "abc" + "def" => "abcdef"
# "abc" + "abc" => "abc"

# def overlap_merge(str1, str2):
#     max_overlap = 0
#     overlap_length = 0
    

#     for i in range(1, min(len(str1), len(str2)) + 1):
#         if str1[-i:] == str2[:i]:
#             overlap_length = i
#     return str1 + str2[overlap_length:]