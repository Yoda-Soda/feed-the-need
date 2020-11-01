const { isPositiveInt } = require('./is_positive_integer');

describe('positive integer validator', () => {
    test('it passes a positive integer', () => {
        //arrange
        const thingToTest = 1;
        //act
        const actual = isPositiveInt(thingToTest)
        //assert
        expect(actual).toBeTruthy()
    })

    test('it passes a large integer', () => {
        //arrange
        const thingToTest = 9999;
        //act
        const actual = isPositiveInt(thingToTest)
        //assert
        expect(actual).toBeTruthy()
    })

    test('it fails 0', () => {
        //arrange
        const thingToTest = 0;
        //act
        const actual = isPositiveInt(thingToTest)
        //assert
        expect(actual).toBeFalsy()
    })
    test('it fails negative numbers', () => {
        //arrange
        const thingToTest = -1;
        //act
        const actual = isPositiveInt(thingToTest)
        //assert
        expect(actual).toBeFalsy()
    })

    test('it fails decimals that are whole numbers', () => {
        //arrange
        const thingToTest = "1.0";
        //act
        const actual = isPositiveInt(thingToTest)
        //assert
        expect(actual).toBeFalsy()
    })

    test('it fails negative decimals that are whole numbers', () => {
        //arrange
        const thingToTest = "-1.0";
        //act
        const actual = isPositiveInt(thingToTest)
        //assert
        expect(actual).toBeFalsy()
    })

    test('it fails decimals', () => {
        //arrange
        const thingToTest = "1.1";
        //act
        const actual = isPositiveInt(thingToTest)
        //assert
        expect(actual).toBeFalsy()
    })

    test('it fails  negative decimals', () => {
        //arrange
        const thingToTest = "-1.1";
        //act
        const actual = isPositiveInt(thingToTest)
        //assert
        expect(actual).toBeFalsy()
    })

    test('it fails strings', () => {
        //arrange
        const thingToTest = "bob";
        //act
        const actual = isPositiveInt(thingToTest)
        //assert
        expect(actual).toBeFalsy()
    })
    test('it passes strings that are numbers', () => {
        //arrange
        const thingToTest = "1";
        //act
        const actual = isPositiveInt(thingToTest)
        //assert
        expect(actual).toBeTruthy()
    })
})