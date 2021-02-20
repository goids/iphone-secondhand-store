const handleSumTotal = (cart) => {
    const reducer = (accumulator, curreValue) => accumulator + curreValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
}

export default handleSumTotal;
