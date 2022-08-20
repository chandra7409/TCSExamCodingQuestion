// Problem Statement

// We want to estimate the cost of painting a property.Interior wall painting cost is Rs .18 per sq.ft.and exterior wall painting cost is Rs .12 per sq.ft.

// Take input as
// 1. Number of Interior walls
// 2. Number of Exterior walls
// 3. Surface Area of each Interior 4. Wall in units of square feet
// Surface Area of each Exterior Wall in units of square feet

// If a user enters zero as the number of walls then skip Surface area values as User may don’ t want to paint that wall.

// Calculate and display the total cost of painting the property
// Example 1:
//     6
// 3
// 12.3
// 15.2
// 12.3
// 15.2
// 12.3
// 15.2
// 10.10
// 10.10
// 10.00
// Total estimated Cost: 1847.4 INR
// Note: Follow in input and output format as given in above example
// #
// include < iostream >
//     using namespace std;
// int main() {
//     int ni, ne, i = 0;
//     float int_p = 18, ext_p = 12, cost = 0, temp;
//     scanf("%d %d", & ni, & ne);
//     if (ni < 0 || ne < 0) {
//         cout << "INVALID INPUT";
//     } else if (ni == 0 && ne == 0) {
//         cout << "Total estimated Cost : 0.0";
//     } else {
//         for (i = 0; i < ni; i++) {
//             cin >> temp;
//             cost += int_p * temp;
//         }
//         for (i = 0; i < ne; i++) {
//             cin >> temp;
//             cost += ext_p * temp;
//         }
//         cout << "Total estimated Cost : " << cost;
//     }
//     return 0;
// }