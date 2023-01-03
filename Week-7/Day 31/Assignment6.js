function max() {
    var ar = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ar[_i] = arguments[_i];
    }
    var temp = 0;
    for (var _a = 0, ar_1 = ar; _a < ar_1.length; _a++) {
        var n = ar_1[_a];
        if (n > temp) {
            temp = n;
        }
    }
    console.log(temp);
}
max(10, 20, 45, 6, 87, 9, 0, 23, 100);
