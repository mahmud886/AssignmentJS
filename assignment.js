
//Kilometer to  Meter Converter

function kilometerToMeter(kilometer) {
    if (kilometer == null) {
        return "Kilometer can not be nulled"
    }
    if (kilometer < 0) {
        return "kilometer can not be contains negative value";
    } else {
        return kilometer * 1000;
    }
}

var kilometerToMeter = kilometerToMeter(100);
console.log(kilometerToMeter);


// Budget Calculator

function budgetCalculator(Watches, Phones, Laptops) {
    if (Watches < 0 || Phones < 0 || Laptops < 0) {
        return "values can not be negative";
    } else {
        const watchPrices = 50;
        const phonePrices = 100;
        const laptopPrices = 500;

        totalWatchesCost = Watches * watchPrices;
        totalPhonesCost = Phones * phonePrices;
        totalLaptopsCost = Laptops * laptopPrices;

        totalCost = totalWatchesCost + totalPhonesCost + totalLaptopsCost;
        return totalCost;
    }
    
}
var myBudget = budgetCalculator(3,2,1);
console.log(myBudget);



//  Calculate Hotel Rent Cost

function hotelCost(howManyDays) {
    if (howManyDays < 0) {
        return "Days must be positive value";
    }
    let totalHotelRent = 0;
    var firstTenDaysHotelRent = 0;
    var secondTenDaysHotelRent = 0;
    var continueDays = 0;


    if (howManyDays <= 10) {
        firstTenDaysHotelRent = howManyDays * 100;
    } else if (howManyDays > 10 && howManyDays <= 20) {
        firstTenDaysHotelRent = 10 * 100;
        secondTenDaysHotelRent =(howManyDays - 10)*80;
       
    }
    else if (howManyDays >= 21) {
        firstTenDaysHotelRent = 10 * 100;
        secondTenDaysHotelRent =10 * 80;
        continueDays = (howManyDays -20) * 50;
    }

    return totalHotelRent = firstTenDaysHotelRent + secondTenDaysHotelRent + continueDays;
}
var hotelRent = hotelCost(21);
console.log(hotelRent);



// Find maximum length of friendList name
function megaFriend(friendsList) {
    if (friendsList.length == 0) {
        return "Array length not be empty";
    }else{
     var maxLengthName = friendsList[0];
     for (var i = 0; i < friendsList.length; i++){
        if (friendsList[i].length > maxLengthName.length) {
            maxLengthName = friendsList[i];
        }
    }
    return maxLengthName;
  }
}
var myFriendsListArray = ["Snigdho", "Raj", "Khandokar", "Arnav Chaktrabardy", "Iqbal Mahmuddsadsadas"];
var maxNamedFriend = megaFriend(myFriendsListArray);
console.log(maxNamedFriend)



