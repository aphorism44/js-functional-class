import assert from 'assert';
import TestFunctions from '../functionalModules/TestFunctions.js';

describe("testFunctions", function() {
  describe("sum", function() {
    it("should return 2 for 1 + 1", function() {
      assert.equal(TestFunctions.sum(1,1), 2);
    });
    it("should return 0 for 1 + -1", function() {
      assert.equal(TestFunctions.sum(1,-1), 0);
    });
  });
  describe("difference", function() {
    it("should return -1 for 1, 2", function() {
      assert.equal(TestFunctions.difference(1,2), -1);
    });
  });
  describe("abs", function() {
    it("should return 1 for -1", function() {
      assert.equal(TestFunctions.abs(-1), 1);
    });
  });
  describe("absDiff", function() {
    it("should return 1 for 1,2", function() {
      assert.equal(TestFunctions.absDiff(1,2), 1);
    });
  });
});
