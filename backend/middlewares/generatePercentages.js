const generatePercentages = (irrigation, watering) => {
    let hours = Date.now() - Number(irrigation);
    hours = Math.round(hours / 1000 / 60 / 60);
    let percentage = Number(hours) / Number(watering) * 100;
    if (percentage >= 100) percentage = 0;
    else percentage = 100 - percentage;
    return percentage.toFixed(2).toString();
}

module.exports = generatePercentages;