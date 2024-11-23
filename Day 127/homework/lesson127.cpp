#include <iostream>
#include <vector>
#include <chrono>

using namespace std;

void quadraticFunction(int n) {
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
        
        }
    }
}
void linearFunction(int n) {
    for (int i = 0; i < n; i++) {
    }
}
int main() {
    int n = 1000;

    auto start = chrono::high_resolution_clock::now();
    quadraticFunction(n);
    auto stop = chrono::high_resolution_clock::now();
    auto duration = chrono::duration_cast<chrono::milliseconds>(stop - start);
    cout << "Quadratic function time: " << duration.count() << " milliseconds" << endl;
    start = chrono::high_resolution_clock::now();
    linearFunction(n);
    stop = chrono::high_resolution_clock::now();
    duration = chrono::duration_cast<chrono::milliseconds>(stop - start);
    cout << "Linear function time: " << duration.count() << " milliseconds" << endl;

    return 0;
}