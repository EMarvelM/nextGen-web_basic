let weekTemperatures = [90, 87, 92, 85, 88, 93, 86];

// code below
const total = weekTemperatures.length;
let [hotTemp, warmTemp, mildTemp] = [0, 0, 0];
let index = hotTemp + warmTemp + mildTemp
let detailed = "";

if (index < total ) {
    if (weekTemperatures[index] > 90) {
        hotTemp += 1;
        detailed += "hot"
    } else if (weekTemperatures[index] > 85) {
        warmTemp += 1;
        detailed += "warm"
    } else {
        mildTemp += 1;
        detailed += "mild"
    }
    index += 1;
}

if (index < total ) {
    if (weekTemperatures[index] > 90) {
        hotTemp += 1;
        detailed += ", hot"
    } else if (weekTemperatures[index] > 85) {
        warmTemp += 1;
        detailed += ", warm"
    } else {
        mildTemp += 1;
        detailed += ", mild"
    }
    index += 1;
}

if (index < total ) {
    if (weekTemperatures[index] > 90) {
        hotTemp += 1;
        detailed += ", hot"
    } else if (weekTemperatures[index] > 85) {
        warmTemp += 1;
        detailed += ", warm"
    } else {
        mildTemp += 1;
        detailed += ", mild"
    }
    index += 1;
}

if (index < total ) {
    if (weekTemperatures[index] > 90) {
        hotTemp += 1;
        detailed += ", hot"
    } else if (weekTemperatures[index] > 85) {
        warmTemp += 1;
        detailed += ", warm"
    } else {
        mildTemp += 1;
        detailed += ", mild"
    }
    index += 1;
}

if (index < total ) {
    if (weekTemperatures[index] > 90) {
        hotTemp += 1;
        detailed += ", hot"
    } else if (weekTemperatures[index] > 85) {
        warmTemp += 1;
        detailed += ", warm"
    } else {
        mildTemp += 1;
        detailed += ", mild"
    }
    index += 1;
}

if (index < total ) {
    if (weekTemperatures[index] > 90) {
        hotTemp += 1;
        detailed += ", hot"
    } else if (weekTemperatures[index] > 85) {
        warmTemp += 1;
        detailed += ", warm"
    } else {
        mildTemp += 1;
        detailed += ", mild"
    }
    index += 1;
}

if (index < total ) {
    if (weekTemperatures[index] > 90) {
        hotTemp += 1;
        detailed += ", hot"
    } else if (weekTemperatures[index] > 85) {
        warmTemp += 1;
        detailed += ", warm"
    } else {
        mildTemp += 1;
        detailed += ", mild"
    }
    index += 1;
}

if (index < total ) {
    if (weekTemperatures[index] > 90) {
        hotTemp += 1;
        detailed += ", hot"
    } else if (weekTemperatures[index] > 85) {
        warmTemp += 1;
        detailed += ", warm"
    } else {
        mildTemp += 1;
        detailed += ", mild"
    }
    index += 1;
}

if (index < total ) {
    if (weekTemperatures[index] > 90) {
        hotTemp += 1;
        detailed += ", hot"
    } else if (weekTemperatures[index] > 85) {
        warmTemp += 1;
        detailed += ", warm"
    } else {
        mildTemp += 1;
        detailed += ", mild"
    }
    index += 1;
}

console.log("Total temperatures recorded:", total);
console.log("Hot days:", hotTemp);
console.log("Warm days:", warmTemp);
console.log("Mild days:", mildTemp);
console.log("Detailed breakdown:", detailed);
