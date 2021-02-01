const assert = require('assert');

function multiplyBy(multiplier, ...parametrs) {
    return parametrs.map(item => {
        return multiplier * item;
    });
}

assert.deepStrictEqual(multiplyBy(2, 3, 4, 5), [6, 8, 10]);
assert.deepStrictEqual(multiplyBy(10, 20, 40, 100, 200, 3), [200, 400, 1000, 2000, 30]);

console.log('Looks good');

function flatWhite(array) {
    result = [];
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            result = result.concat(...array[i]);
        } else {
            result = result.concat(array[i]);
        }
    }
    return result;
}

assert.deepStrictEqual(flatWhite(['doppio', ['hot'], 'milk']), ['doppio', 'hot', 'milk']);
assert.deepStrictEqual(flatWhite([
    ['espresso', 'hot'], 'milk'
]), ['espresso', 'hot', 'milk']);


console.log('Looks good');

function extendWith(obj1, obj2) {
    return {
        ...obj2,
        ...obj1
    };

}

assert.deepStrictEqual(extendWith(

        {
            flatWhite: ['doppio', 'hot', 'milk'],
            isValid: true
        },

        {
            isValid: false,
            additionalProp: {
                thisIsGoodProp: 123
            }
        }

    ),

    {
        flatWhite: ['doppio', 'hot', 'milk'],
        isValid: true,
        additionalProp: {
            thisIsGoodProp: 123
        }
    }

);

assert.deepStrictEqual(extendWith(

        {
            isValid: false,
            myMax: 9990
        },

        {
            isValidos: false,
            myMin: 8999
        }

    ),

    {
        isValid: false,
        myMax: 9990,
        isValidos: false,
        myMin: 8999
    }

);


console.log('Looks good');

function extendWithEndless(...parametrs) {
    let rez = {};
    for (let elem of parametrs) {
        rez = {
            ...rez,
            ...elem
        };
    }
    return rez;
}

assert.deepStrictEqual(extendWithEndless(

        {
            flatWhite: ['doppio', 'hot', 'milk'],
            isValid: true
        },

        {
            isValid: false,
            additionalProp: {
                thisIsGoodProp: 123
            }
        },

        {
            prop3: true
        },

        {
            prop4: true
        },

        {
            isValid: [false, false]
        },

    ),

    {
        flatWhite: ['doppio', 'hot', 'milk'],
        isValid: [false, false],
        additionalProp: {
            thisIsGoodProp: 123
        },
        prop3: true,
        prop4: true
    }

);


console.log('Looks good');