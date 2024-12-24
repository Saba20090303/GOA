# დავალება_1

def narcissistic(value):
    str_value = str(value)
    digit_amout = len(str_value)

    sum = 0

    for i in str_value:
        sum += int(i) ** digit_amout

    return value == sum