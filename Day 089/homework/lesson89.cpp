int main() {
    // Define the integer types
    signed char sc;
    short int si;
    int i;
    long int li;
    long long int lli;

    // Print the minimum and maximum values of each type
    std::cout << "Minimum and Maximum Values of Integer Types:" << std::endl;
    std::cout << "-------------------------------------------" << std::endl;
    std::cout << "Type\t\tMinimum Value\t\tMaximum Value" << std::endl;
    std::cout << "-------------------------------------------" << std::endl;

    std::cout << "signed char\t" << SCHAR_MIN << "\t\t" << SCHAR_MAX << std::endl;
    std::cout << "short int\t" << SHRT_MIN << "\t\t" << SHRT_MAX << std::endl;
    std::cout << "int\t\t" << INT_MIN << "\t\t" << INT_MAX << std::endl;
    std::cout << "long int\t" << LONG_MIN << "\t\t" << LONG_MAX << std::endl;
    std::cout << "long long int\t" << LLONG_MIN << "\t\t" << LLONG_MAX << std::endl;

    return 0;
}