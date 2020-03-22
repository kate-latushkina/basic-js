module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let depth = 1, maxDepth = 1;
        arr.forEach(element => {
            if (Array.isArray(element)) {
                depth += this.calculateDepth(element);
                maxDepth = Math.max(maxDepth, depth);
                depth = 1;
            }
        });
        return maxDepth;
    }
};
