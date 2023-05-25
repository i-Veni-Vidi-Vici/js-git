const Component = require('../libs/component')
const a = require("../libs/appHooks");
// appHooks 모듈 mock 코드 추가
jest.mock("../libs/appHooks");
a.hookBanana.mockReturnValue('banana');
a.hookApple.mockReturnValue('potato');


describe('mock module', () => {
    test('giveme banana mock', () => {
        expect(Component.givemeBanana()).toEqual('banana')
    })

    test('giveme apple mock', () => {
        expect(Component.givemeApple()).toEqual('potato')
    })
})