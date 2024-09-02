# კიუ 6
def plus_or_minus(variables, test):
    
    def generate_expressions(variables, current_expression=""):
        
        if not variables:
            return [current_expression]

        expressions = []
        
        if current_expression:
            expressions.extend(generate_expressions(variables[1:], current_expression + "+" + variables[0]))
            expressions.extend(generate_expressions(variables[1:], current_expression + "-" + variables[0]))
       
        else:
            expressions.extend(generate_expressions(variables[1:], variables[0]))

        return expressions

    
    expressions = generate_expressions(variables)

    
    for expression in expressions:
        
        def evaluate_expression(values):
            return eval(expression, dict(zip(variables, values)))

        
        if all(evaluate_expression(values) == test(values) for values in [[1, 2, 3], [3, 0, -1, 0.5]]):
            return expression

    
    return None

# კიუ 6
def nth_evil_number(n):
    count = 0
    num = 0
    ones = 0
    
    while True:
        
        if ones % 2 == 0:
            count += 1
            
           
            if count == n:
                return num
        
        
        num += 1
        ones += (num and 1) * 2 - 1


# კიუ 7

def like_or_dislike(buttons):
    states = {
        'Like': 1,
        'Dislike': -1,
        'Nothing': 0
    }
    state = 0
    for button in buttons:
        if button == 'Like':
            state += 1
        elif button == 'Dislike':
            state -= 1
    if state > 0:
        return 'Like'
    elif state < 0:
        return 'Dislike'
    else:
        return 'Nothing'
    