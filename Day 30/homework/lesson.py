#დავალება_1
# def revers_upp(name):
#     return name[::-1]

# name="VaNo MoTiashvili"
# result = revers_upp(name)
# print(result.upper())

#დავალება_2 გავტეხე ვიეს კოდი
# def even_odd(names):
#     even=[]
#     odd=[]
#     if len(names) % 2 ==0:
#         return names.append(even)
#     else:
#         return names.append(odd)
    
# names= ["vano" , "davit" , "zuka" , "yiyliyo"]
# result =even_odd(names)
# print(result)

#დავალება_2
# def even_odd(names):
#     even=[]
#     odd=[]
#     for name in names:
#         if len(name) % 2 ==0:
#             even.append(name.upper())
#         else:
#             odd.append(name.capitalize())
#     return odd, even

# names = ["vano" , "davit" , "zuka" , "yiyliyo"]
# even_list, odd_list = even_odd(names)
# print("original: ", names)
# print("odd: ",even_list)
# print("odd: ",odd_list)

#დავალება_3
# def even_odd(names):
#     even=[]
#     odd=[]
#     for name in names:
#         if len(name) % 2 ==0:
#             even.append(name.upper())
#         else:
#             odd.append(name.capitalize())
#     return odd, even

# names = ["vano" , "davit" , "zuka" , "yiyliyo"]
# even_list, odd_list = even_odd(names)
# print("original: ", names)
# print("odd: ",even_list)
# print("odd: ",odd_list)

#დავალება_4
# def modify_case(strings):
#     result_list=[]
#     for string in strings:
#         if string.isupper():
#             result_list.append(string.lower())
#         elif string.islower():
#             result_list.append(string.upper())
#         else:
#             result_list.append(string)
#     return result_list

# test_case = ["vano" , "DAVIT" , "LUKA" , "nika"]
# result_list = modify_case(test_case)
# print(result_list)

#დავალება_5
# def manipulate_string(input_str):
#     index = input_str.find('n')
#     if index % 2 == 0:
#         return input_str.upper()
#     else:
#         return input_str.capitalize()

# test_case = "vano motiashvili"
# result = manipulate_string(test_case)
# print(result)