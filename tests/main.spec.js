describe("Shake-N-Bake", function() {

	"use strict";

	var rootElement,
		calledTimes,
		code,
		ShakeNBake;

	beforeAll(function() {
		ShakeNBake = window.ShakeNBake;
	});

	beforeEach(function(done) {
		calledTimes = 0;
		window.testExecution = function() {
			calledTimes += 1;
		};

		rootElement = document.createElement("div");
		document.body.appendChild(rootElement);

		code = '<div>\n' +
			'<div>\n' +
			'<script type="text/javascript">window.testExecution();</script>\n' +
			'</div>\n' +
			'</div>';
		rootElement.innerHTML = code;

		setTimeout(done, 125);
	});

	describe("environment without execution", function() {

		it("is unchanged", function() {
			expect(calledTimes).toBe(0);
		});

	});

	describe("processElement", function() {

		it("executes the code only once", function() {
			var fn = function() {
				ShakeNBake.processElement(rootElement);
			};
			expect(fn).not.toThrow();
			expect(calledTimes).toBe(1);
		});

	});

});
