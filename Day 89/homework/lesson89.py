max_length = 0
lengths = []

while True:
    user_input = input("Enter a string (or 'max' to get the max length): ")
    if user_input.lower() == 'max':
        if lengths:
            print("The length of the largest string is:", max(lengths))
        else:
            print("No strings entered yet.")
    else:
        lengths.append(len(user_input))
        if len(user_input) > max_length:
            max_length = len(user_input)