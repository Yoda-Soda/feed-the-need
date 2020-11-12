describe('positive integer validator', () => {
    test('it passes a positive integer', () => {
        //arrange
        const thingToTest = 1;
        //act
        const actual = isPositiveInt(thingToTest)
        //assert
        expect(actual).toBeTruthy()
    })
})