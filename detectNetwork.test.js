/*
 * 이 파일을 어떻게 사용해야 하는지 STEP을 진행하다보면 알 수 있습니다.
 * 만일 그 전에 이 파일을 이용하고 싶다면 주석을 참고하여 직접 연구해야 합니다.
 */

/**
 * 11번 줄에 있는 FILL_ME_IN을 수정하실 필요는 없습니다.
 * 하지만 이 파일의 다른 곳에서 FILL_ME_IN을 보시게 된다면 다른 것으로 바꾸셔야합니다.
 */

let FILL_ME_IN = "Fill this value in";

describe("Introduction to Mocha Tests - READ ME FIRST", function() {
  // Mocha 테스트는 그저 다음 기능을 하는 도구입니다!
  // - 함수를 실행할 때 오류가 발생하면, 실패합니다.
  // - 오류가 발생하지 않으면, 실패하지 않습니다.
  // mocha에 대해 더 알고 싶다면 다음을 참고하세요. mochajs.org

  // 먼저 아래의 테스트를 수정해 테스트가 정상적으로 작동하도록 해주세요.
  // 그리고 Diner's club과 American Express 테스트로 넘어가주세요

  it("오류가 발생하면 테스트가 실패합니다.", function() {
    // throw new Error("저를 지워주세요!");
  });

  it("오류가 발생하지 않으므로, 실패하지 않습니다.", function() {
    // 이 테스트는 실제로 아무것도 테스트하지 않습니다. 그러므로 그냥 여기는 통과하게 됩니다.
    let even = function(num) {
      return num % 2 === 0;
    };
    return even(10) === true;
  });

  // 우리는 테스트에서 예상 동작과 실제 동작을 비교하기를 원할 것입니다.
  // 예상 동작이 실제 동작과 다르다면, 테스트는 실패해야 합니다.
  it("예상 동작이 실제 동작과 일치하지 않을 때 오류가 발생합니다.", function() {
    let even = function(num) {
      return num % 2 === 0; // 체크하려는 함수에 뭔가 문제가 있군요!
    };

    if (even(10) !== true) {
      throw new Error("10은 짝수여야 합니다!");
    }
  });
});
/**
 * 아래의 테스트들은 detectNetwork 함수를 detectNetwork.js 파일로부터 불러와
 * 함수가 정상적으로 작동하는지 테스트합니다.
 * detectNetwork.js파일과 현재 파일을 수정해 모든 테스트가 통과하도록 만들어보세요.
 */
describe("Diner's Club", function() {
  // 주의하세요, 테스트에도 버그가 존재할 수 있습니다...

  it("has a prefix of 38 and a length of 14", function() {
    //throw new Error("Delete me!");

    if (detectNetwork("38345678901234") !== "Diner's Club") {
      throw new Error("Test failed");
    }
  });

  it("has a prefix of 39 and a length of 14", function() {
    if (detectNetwork("3934567890123") === "Diner's Club") {
      throw new Error("Test failed");
    }
  });
});

describe("American Express", function() {
  // 항상 if/throw 구문으로 오류를 체크하는 것은 귀찮은 일이기 때문에,
  // 여기에 도움을 줄 수 있는 함수를 하나 제공했습니다. 입력값이 true가 아닐 경우 에러를 발생시킵니다.
  let assert = function(isTrue) {
    if (!isTrue) {
      throw new Error("Test failed");
    }
  };

  it("has a prefix of 34 and a length of 15", function() {
    assert(detectNetwork("343456789012345") === "American Express");
  });

  it("has a prefix of 37 and a length of 15", function() {
    assert(detectNetwork("373456789012345") === "American Express");
  });
});

describe("Visa", function() {
  // Chai는 테스트에 필요한 헬퍼 함수들이 담긴 라이브러리입니다!
  // Chai는 이전에 만들었던 assert 함수와 동일한 기능을 하는 assert 함수를 제공합니다.
  // Chai가 제공하는 assert 함수를 어떻게 사용하는지 웹사이트의 공식 문서를 참고해보세요.
  //   http://chaijs.com/
  let assert = chai.assert;

  it("has a prefix of 4 and a length of 13", function() {
    assert(detectNetwork("4123456789012") === "Visa");
  });

  it("has a prefix of 4 and a length of 16", function() {
    assert(detectNetwork("4123456789012345") === "Visa");
  });

  it("has a prefix of 4 and a length of 19", function() {
    assert(detectNetwork("4123456789012345678") === "Visa");
  });
});

describe("MasterCard", function() {
  // Chai는 좀 더 영어 문법에 가까운 코드로 테스트를 작성할 수 있게 도와줍니다.
  // Expect 문법은 그 중 한가지이며, 다른 문법도 있습니다.
  // 이와 관련해 더 알고 싶다면, 공식 문서를 참고하세요.
  //   http://chaijs.com/api/bdd/
  let expect = chai.expect;

  it("has a prefix of 51 and a length of 16", function() {
    expect(detectNetwork("5112345678901234")).to.equal("MasterCard");
  });

  it("has a prefix of 52 and a length of 16", function() {
    expect(detectNetwork("5212345678901234")).to.equal("MasterCard");
  });

  it("has a prefix of 53 and a length of 16", function() {
    expect(detectNetwork("5312345678901234")).to.equal("MasterCard");
  });

  // expect 대신에 should라는 문법을 사용해서 스타일을 조금 변경할 수도 있습니다.
  // 사실 둘 중 어떤 것을 사용하는지는 중요하지 않습니다.
  // 스타일에 관련해서는 다음 사이트를 참조하세요. http://chaijs.com/guide/styles/
  // 다만 중요한 것은 스타일의 일관성을 유지하는 것입니다.
  // (우리는 공부를 하는 중이기 때문에 두가지 방법 모두를 사용해 보았습니다.)
  // 테스트를 작성하는 중에, 두가지 방법을 동시에 사용하려고 하면 진행되지 않을 것입니다.
  // expect나 should 둘 중에 한가지 방법을 선택해서 사용하세요.
  let should = chai.should();

  it("has a prefix of 54 and a length of 16", function() {
    detectNetwork("5412345678901234").should.equal("MasterCard");
  });

  it("has a prefix of 55 and a length of 16", function() {
    detectNetwork("5512345678901234").should.equal("MasterCard");
  });
});

describe("Discover", function() {
  // 함수가 없는 테스트는 "pending"이라는 표시가 뜨며 실행되지 않습니다.
  // 아래 테스트를 작성하고 테스트가 통과하도록 만드십시오.
  let should = chai.should();

  it("has a prefix of 6011 and a length of 16", function() {
    detectNetwork("6011234567891234").should.equal("Discover");
  });
  it("has a prefix of 6011 and a length of 16", function() {
    detectNetwork("6511234567891234").should.equal("Discover");
  });
  it("has a prefix of 6011 and a length of 16", function() {
    detectNetwork("6441234567891234").should.equal("Discover");
  });
  it("has a prefix of 6011 and a length of 16", function() {
    detectNetwork("6451234567891234").should.equal("Discover");
  });
  it("has a prefix of 6011 and a length of 16", function() {
    detectNetwork("6461234567891234").should.equal("Discover");
  });
  it("has a prefix of 6011 and a length of 16", function() {
    detectNetwork("6471234567891234").should.equal("Discover");
  });
  it("has a prefix of 6011 and a length of 16", function() {
    detectNetwork("6481234567891234").should.equal("Discover");
  });
  it("has a prefix of 6011 and a length of 16", function() {
    detectNetwork("6491123467891234").should.equal("Discover");
  });

  // 19줄 일 때
  it("has a prefix of 6011 and a length of 19", function() {
    detectNetwork("6011234567891234123").should.equal("Discover");
  });
  it("has a prefix of 6011 and a length of 19", function() {
    detectNetwork("6511234567891234123").should.equal("Discover");
  });
  it("has a prefix of 6011 and a length of 19", function() {
    detectNetwork("6441234567891234123").should.equal("Discover");
  });
  it("has a prefix of 6011 and a length of 19", function() {
    detectNetwork("6451234567891234123").should.equal("Discover");
  });
  it("has a prefix of 6011 and a length of 19", function() {
    detectNetwork("6461234567891234123").should.equal("Discover");
  });
  it("has a prefix of 6011 and a length of 19", function() {
    detectNetwork("6471234567891234123").should.equal("Discover");
  });
  it("has a prefix of 6011 and a length of 19", function() {
    detectNetwork("6481234567891234123").should.equal("Discover");
  });
  it("has a prefix of 6011 and a length of 19", function() {
    detectNetwork("6491123467891234123").should.equal("Discover");
  });
});

// Maestro, China UnionPay와 Switch를 검사하는 것은 Advanced 과제입니다.
// 원하시는 분들은 도전해보세요!
describe("Maestro", function() {
  let expect = chai.expect;

  //5018, 5020, 5038 또는 6304로 시작하고 12에서부터 19까지 자리의 숫자입니다
  //has a prefix of 5018 and a length of 12
  //has a prefix of 5020 and a length of 12
  //has a prefix of 5038 and a length of 12
  //has a prefix of 6304 and a length of 12
  let tail = "5678901";
  for (let cardNumber = 12; cardNumber <= 19; cardNumber++) {
    tail = tail + 1;
    it("has a prefix of 5018 and a length of" + cardNumber, function() {
      expect(detectNetwork(5018 + tail)).to.equal("Maestro");
    });
    it("has a prefix of 5020 and a length of" + cardNumber, function() {
      expect(detectNetwork(5020 + tail)).to.equal("Maestro");
    });
    it("has a prefix of 5038 and a length of" + cardNumber, function() {
      expect(detectNetwork(5038 + tail)).to.equal("Maestro");
    });
    it("has a prefix of 6304 and a length of" + cardNumber, function() {
      expect(detectNetwork(6304 + tail)).to.equal("Maestro");
    });
  }
});

describe("should support China UnionPay", function() {
  let expect = chai.expect;
  //China UnionPay 카드 조건
  // China UnionPay는 항상 622126-622925, 624-626, 혹은 6282-6288로 시작하고
  //   //16-19자리의 숫자입니다.
  //624 ~626
  let tail624 = "456789012345";
  for (let cardNumber = 16; cardNumber <= 19; cardNumber++) {
    tail624 = tail624 + 1;
    it("has a prefix of 624 and a length of " + cardNumber, function() {
      expect(detectNetwork(624 + tail624)).to.equal("China UnionPay");
    });
    it("has a prefix of 625 and a length of " + cardNumber, function() {
      expect(detectNetwork(625 + tail624)).to.equal("China UnionPay");
    });
    it("has a prefix of 626 and a length of " + cardNumber, function() {
      expect(detectNetwork(626 + tail624)).to.equal("China UnionPay");
    });
  }
  // 6282 ~ 6288

  let tail6282 = "56789012345";

  for (let cardNumber = 16; cardNumber <= 19; cardNumber++) {
    tail6282 = tail6282 + 1;
    for (let prefix4 = 6282; prefix4 <= 6288; prefix4++) {
      it(
        "has a prefix of " + prefix4 + "and a length of " + cardNumber,
        function() {
          expect(detectNetwork(prefix4 + tail6282)).to.equal("China UnionPay");
        }
      );
    }
  }

  //622126 ~ 622925
  let tail622126 = "789012345";

  for (let cardNumber = 16; cardNumber <= 19; cardNumber++) {
    tail622126 = tail622126 + 1;
    for (let prefix6 = 622126; prefix6 <= 622925; prefix6++) {
      it(
        "has a prefix of " + prefix6 + "and a length of " + cardNumber,
        function() {
          expect(detectNetwork(prefix6 + tail622126)).to.equal(
            "China UnionPay"
          );
        }
      );
    }
  }
});

describe("should support Switch", function() {
  let expect = chai.expect;

  // Switch는 항상 4903, 4905, 4911, 4936, 564182, 633110, 6333 혹은 6759로 시작하고
  // 16, 18, 혹은 19자리의 숫자입니다..

  let tailFor4 = "56789012345";
  let tailFor6 = "7890123456";

  for (let cardNumber = 16; cardNumber <= 19; cardNumber++) {
    if (cardNumber !== 17) {
      tailFor4 = tailFor4 + "1";
      tailFor6 = tailFor6 + "1";

      it("has a prefix of 6333 and a length of " + cardNumber, function() {
        expect(detectNetwork(6333 + tailFor4)).to.equal("Switch");
      });
      it("has a prefix of 6759 and a length of " + cardNumber, function() {
        expect(detectNetwork(6759 + tailFor4)).to.equal("Switch");
      });
      it("has a prefix of 4903 and a length of " + cardNumber, function() {
        expect(detectNetwork(4903 + tailFor4)).to.equal("Switch");
      });
      it("has a prefix of 4905 and a length of " + cardNumber, function() {
        expect(detectNetwork(4905 + tailFor4)).to.equal("Switch");
      });
      it("has a prefix of 4911 and a length of " + cardNumber, function() {
        expect(detectNetwork(4911 + tailFor4)).to.equal("Switch");
      });
      it("has a prefix of 4936 and a length of " + cardNumber, function() {
        expect(detectNetwork(4936 + tailFor4)).to.equal("Switch");
      });
      it("has a prefix of 564182 and a length of " + cardNumber, function() {
        expect(detectNetwork(564182 + tailFor6)).to.equal("Switch");
      });
      it("has a prefix of 633110 and a length of " + cardNumber, function() {
        expect(detectNetwork(633110 + tailFor6)).to.equal("Switch");
      });
    }
  }
});
