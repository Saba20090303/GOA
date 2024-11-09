#include <iostream>
#include <cmath>

using namespace std;
bool checkInduction(int n) {
    if (n == 1) {
        
        return true;
    } else {
        bool previousStep = checkInduction(n - 1);
        return previousStep && (n < pow(2, n));
    }
}
int main() {
    int n;
    cout << "Enter a value for n: ";
    cin >> n;

    if (checkInduction(n)) {
        cout << "The inequality n < 2^n is true for n = " << n << endl;
    } else {
        cout << "The inequality is false for n = " << n << endl;
    }

    return 0;
}