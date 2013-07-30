describe("toContain Test", function (){
	it("MyName should contain oranges", function () {
		expect(MyName()).toContain("Lester");
	});
});

describe("toBeFalsy/toBeTruthy Test", function () {
	it("Compare() should be return true", function () {
		expect(Compare(5)).toBeTruthy();
	});
	
	it("Compare() should be return false", function () {
		expect(Compare(10)).toBeFalsy();
	});
	
	it("Compare() should be return false", function () {
		expect(Compare(11)).toBeFalsy();
	});
});

describe("toEqual Test", function () {
	it("add() should equal", function () {
		expect(add(3, 7)).toEqual(10);
	});
});