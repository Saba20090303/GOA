#include <iostream>
using namespace std;

void binarySearch(int arr[], int left, int right, int key) {
    if (right >= left) {
        int mid = left + (right - left) / 2;
        if (arr[mid] == key) {
            cout << "Element found at index " << mid << endl;
            return;
        }
        if (arr[mid] > key) {
            binarySearch(arr, left, mid - 1, key);
        }
        else {
            binarySearch(arr, mid + 1, right, key);
        }
    }
}
int main() {
    int arr[] = {2, 3, 4, 10, 40};
    int n = sizeof(arr) / sizeof(arr[0]);
    int key = 10;
    binarySearch(arr, 0, n - 1, key);
    return 0;
}