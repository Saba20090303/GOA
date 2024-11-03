#include <iostream>

bool isIncreasing(int a, int b) {
    return a >= b
}
int main() {
    int a, b;
    std::cout << "შეიყვანეთ ორი რიცხვი (a და b): ";
    std::cin >> a >> b;
    if (isIncreasing(a, b)) {
        if (a * a * a >= b * b * b) {
            std::cout << "f(a) >= f(b), რაც ნიშნავს, რომ x^3 ზრდადია." << std::endl;
        }
    } else {
        std::cout << "a < b, შესაბამისად, ზრდადობა ვერ გამოგვადგება." << std::endl;
    }
    return 0;
}