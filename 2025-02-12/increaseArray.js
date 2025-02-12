
    function plusOne(digits) {
        for (let i = digits.length - 1; i >= 0; i--) {
            if (digits[i] === 9) {
                digits[i] = 0;

            } else {
                digits[i]++;
                return digits;
            }
        }
        return [1, ...digits];
    }


    console.log(plusOne([3, 4, 2]));
    console.log(plusOne([9, 4, 9]));
    console.log(plusOne([8, 9, 9,9]));

