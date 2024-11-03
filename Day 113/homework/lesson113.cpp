#include <iostream>
#include <cmath>

bool isTrue(int n) {
    return pow(2, n) > n;
}
int main() {
    for (int n = 1; n <= 20; ++n) {
        if (isTrue(n)) {
            std::cout << "For n = " << n << ", 2^" << n << " > " << n << " is TRUE." << std::endl;
        } else {
            std::cout << "For n = " << n << ", 2^" << n << " > " << n << " is FALSE." << std::endl;
        }
    }
    
    return 0;
}