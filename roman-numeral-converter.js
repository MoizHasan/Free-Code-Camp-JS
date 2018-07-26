function convertToRoman(num) {
    var roman = "";
    var symbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX","V", "IV", "I"];
    var dec = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    while (num > 0) {
        for (var i = 0; i < symbols.length; i++) {
            if (num >= dec[i]) {
                num -= dec[i];
                roman += symbols[i];
                i = -1;
            }
        }
    }
    return roman;
}

convertToRoman(1023);