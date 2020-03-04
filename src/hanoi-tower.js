module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let diskTurn = Math.pow(2, disksNumber) - 1;
    let speenAtSecond = turnsSpeed / 3600;
    return {
        turns: diskTurn,
        seconds: diskTurn / speenAtSecond,
    }
}