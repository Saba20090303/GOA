#include <iostream>
#include <cmath>

using namespace std;
int f1(int n) 
    return 2 * n;

int f2(int n) {
    return n * n;
}

int g(int n) {
    return n * n;
}

int main() {
    int n = 10;
    int result_f1 = f1(n);
    int result_f2 = f2(n);
    int total_f = result_f1 + result_f2;

    cout << "f1(n) = " << result_f1 << endl;
    cout << "f2(n) = " << result_f2 << endl;
    cout << "f(n) = f1(n) + f2(n) = " << total_f << endl;

    return 0;
}