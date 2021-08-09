//------------------------------------------------- Problem 01----------------------------------------------------------

// Function declare 

function seerToMon(ser) {

    // Assign condition for handling error

    if (typeof ser != "number" || ser < 0) {

        return "Enter a valid Number";

    } else {
        const mon = ser / 40;
        return mon;
    }


}

// Function calling

let userOne = seerToMon(250);
console.log(userOne);

let userTwo = seerToMon('Two');
console.log(userTwo);


//-------------------------------------------------- Problem 02------------------------------------------------------------

// Function declare 

function totalSales(shirtQuen, pantQuen, shoeQuen) {

    // Assigning variable

    let totalPrice = 0;

    const shirt = 100;
    const pant = 200;
    const shoe = 500;

    // Assign condition for handling error

    if (typeof shirtQuen != "number" || typeof pantQuen != "number" || typeof shoeQuen != "number" || shirtQuen < 0
        || pantQuen < 0 || shoeQuen < 0) {

        return "Please Enter a valid Number";

    } else {

        const shirtTotal = shirt * shirtQuen;
        const pantTotal = pant * pantQuen;
        const shoeTotal = shoe * shoeQuen;

        const productsTotal = shirtTotal + pantTotal + shoeTotal;

        totalPrice = totalPrice + productsTotal;

        return totalPrice;

    }


}

// Function calling

var firstUser = totalSales(5, 2, 1);
console.log(firstUser);

var secondUser = totalSales(1, -5, 4);
console.log(secondUser);

//------------------------------------------------ Problem 03-----------------------------------------------------

// Function declare

function deliveryCost(qnty) {

    // Assigning variable

    const firstDelivary = 100 * 100;
    const secondDelivary = firstDelivary + (qnty - 100) * 80;
    const thirdDelivery = firstDelivary + (100 * 80) + (qnty - 200) * 50;

    // Assign condition for handling error

    if (qnty >= 1 && qnty <= 100) {

        return qnty * 100;

    } else if (qnty >= 101 && qnty <= 200) {

        return secondDelivary;

    } else if (qnty >= 201) {

        return thirdDelivery;

    } else if (typeof qnty != "number" || qnty < 0) {
        return "Enter valid Quentity to Buy";
    }

}

// Function calling

var quentityOne = deliveryCost(80);
console.log(quentityOne);

var quentityTwo = deliveryCost(180);
console.log(quentityTwo);

var quentityThree = deliveryCost(250);
console.log(quentityThree);


//---------------------------------------------------problem 04------------------------------------------------

// Array declare

const friends = ["Abu", "Ali", "Rahim", "Alif", "Momunul", "Rubel"]

const num = [0, 10, 25, 14, 28]

// Function declare

function perfectFriend(friendsName) {

    // Assign condition for handling error and find out 5 charecter name

    for (const name of friendsName) {

        if (name.length == 5) {
            return name;
        }
        else if (typeof name == "number") {
            return "Please Enter a Valid Name";
        }
    }

}

// Function calling

var friendCalling = perfectFriend(friends);
console.log(friendCalling);

var numCalling = perfectFriend(num);
console.log(numCalling);

