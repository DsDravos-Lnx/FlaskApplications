const calculatePrice = function () {
    const price = Number(document.getElementById('price').value)
    const amount = Number(document.getElementById('amount').value)
    
    let singlePrice = (price / amount)
    singlePrice = (singlePrice * 1.6)
    alert(singlePrice.toFixed(2))
}