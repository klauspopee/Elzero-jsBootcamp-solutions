function ageInTime(theAge) {
    if (theAge > 10 && theAge < 100) {
        console.log(`Your age with months is ${theAge * 12}`);
        console.log(`Your age with weeks is ${theAge * 12 * 4}`);
        console.log(`Your age with days is ${theAge * 12 * 4 * 7}`);
        console.log(`Your age with hours is ${theAge * 12 * 4 * 7 * 24}`);
        console.log(`Your age with minutes is ${theAge * 12 * 4 * 7 * 24 * 60}`);
        console.log(`Your age with seconds is ${theAge * 12 * 4 * 7 * 24 * 60 * 60}`);
    }else {
        console.log("Age Out Of Range")
    }

}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months