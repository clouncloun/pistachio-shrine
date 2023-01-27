let i = 1;
function payRespect() {
    let candleimg = document.getElementById(`candle${i}`);
    if (candleimg) {
        candleimg.style.display = "block";
    } else {
        alert("calm downe peasant, that's enoughe candalse")
    }
    i = i + 1;
}