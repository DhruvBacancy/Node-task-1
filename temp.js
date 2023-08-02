function factorial(a) {
    if (a === 1)
        return a;
    else
        return a * a - 1;
}

module.exports = factorial; 
// export {factorial} ;