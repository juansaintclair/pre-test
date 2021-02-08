import { assert } from "chai"
import { hello } from "../src/hello.js"

describe('hello()', function() {
      it('should return "Hello World"', function() {
        assert.equal(
            hello(),
            "Hello World"
        );
      });
  });
