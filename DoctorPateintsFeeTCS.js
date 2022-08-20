// Problem Statement
// A doctor has a clinic where he serves his patients.The doctor’ s consultation fees are different
// for different groups of patients depending on their age.If the patient’ s age is below 17, fees is 200 INR.If the patient’ s age is between 17 and 40, fees is 400 INR.If patient’ s age is above 40, fees is 300 INR.Write a code to calculate earnings in a day
// for which one array / List of values representing age of patients visited on that day is passed as input.
// Note:

//     Age should not be zero or less than zero or above 120
// Doctor consults a maximum of 20 patients a day
// Enter age value(press Enter without a value to stop):
//     Example 1:
//     Input
// 20
// 30
// 40
// 50
// 2
// 3
// 14
// Output
// Total Income 2000 INR
// Note: Input and Output Format should be same as given in the above example.
// For any wrong input display INVALID INPUT
// Output Format
// Total Income 2100 INR

// int x, count = 0, flag = 0, fee_s = 0;

// while (cin >> x) {

//     if (x <= 0 and x > 120) {
//         flag = 1;
//         break;
//     }

//     count++;

//     if (x < 17) fee_s += 200;

//     else if (x >= 17 and x <= 40) fee_s += 400;

//     else fee_s += 300;
// }

// if (count > 20 and flag != 1)
//     console.log( << "INVALID INPUT";

// else console.log( << "Total income : " << fee_s << " INR";
// return 0;
// }



function Doctor(x) {
    let count = 0,
        flag = 0,
        fee_s = 0;

    while (x > 0) {

        if (x <= 0 && x > 120) {
            flag = 1;
            break;
        }

        count++;

        if (x < 17) fee_s += 200;

        else if (x >= 17 && x <= 40) fee_s += 400;

        else fee_s += 300;
    }

    if (count > 20 && flag != 1)
        console.log("INVALID INPUT");
    else
        console.log("Total income : " + fee_s + " INR");
    return 0;
}
let x = 20;
Doctor(x);