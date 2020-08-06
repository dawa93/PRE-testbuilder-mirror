/**
 * 아래의 detectNetwork 함수는 어떤 카드 번호를 input으로 받아,
 * 카드 회사의 이름('MasterCard', 'American Express)을 return 하는 함수입니다.
 *
 * 예) detectNetwork('343456789012345') // 'American Express'
 *
 * 그럼 어떻게 카드 번호만 가지고, 카드회사를 알 수 있을까요?
 *
 * 2가지 방법이 있습니다.
 *  1. 앞 자리 숫자들 (이번 과제에서는 prefix라 부릅니다.)
 *  2. 숫자들의 길이 (이번 과제에서는 length라고 부릅니다.)
 */

function detectNetwork(cardNumber) {
  /**
   * 주의사항: 'cardNumber'는 항상 문자열입니다.
   * 'Diner's Club' 카드 번호는 항상 38이나 39로 시작을하고, 14 자리 숫자입니다.
   * 'American Express' 카드 번호는 항상 34 나 37로 시작하고, 15 자리 숫자입니다.
   * 이 글을 읽으셨다면, detectNetwork함수가 'Diner's Club', 'American Express'를
   * 정확히 검사할 수 있도록 만들고 브라우저 console 화면으로 돌아가세요.
   */
  //카드 넘버의 첫 번째와 두 번째 자리가 38,39인지 확인
  let one = cardNumber[0];
  let two = cardNumber[1];
  let three = cardNumber[2];
  let four = cardNumber[3];

  if (one + two === "38" || one + two === "39") {
    if (cardNumber.length === 14) {
      //위가 맞다면 디너스카드를 리턴하면 됩니다
      return "Diner's Club";
    }
  }

  if (one + two === "34" || one + two === "37") {
    if (cardNumber.length === 15) {
      //만약에 위의 조건이 아니라면, 아메리칸 카드를 리턴해보겠습니다
      return "American Express";
    }
  }

  if (one === "4") {
    if (
      cardNumber.length === 13 ||
      cardNumber.length === 16 ||
      cardNumber.length === 19
    ) {
      return "Visa"; //Visa 카드번호는 항상 4로 시작하고 13, 16, 혹은 19자리의 숫자입니다.
    }
  }

  if (
    //MasterCard 카드번호는 항상 51, 52, 53, 54, 혹은 55로 시작하고 16자리의 숫자입니다.
    one + two === "51" ||
    one + two === "52" ||
    one + two === "53" ||
    one + two === "54" ||
    one + two === "55"
  ) {
    if (cardNumber.length === 16) {
      return "MasterCard";
    }
  }

  if (
    one + two + three === "644" ||
    one + two + three === "645" ||
    one + two + three === "646" ||
    one + two + three === "647" ||
    one + two + three === "648" ||
    one + two + three === "649" ||
    one + two + three + four === "6011" ||
    one + two === "65"
  ) {
    if (cardNumber.length === 16 || cardNumber.length === 19) {
      return "Discover";
    }
  }
  //
}

// you don't have to worry about this code. keep this code.

if (typeof window === "undefined") {
  module.exports = detectNetwork;
}
// 민우님이랑 같이 한것
// if (Number(one + two + three) >= 644 && Number(one + two + three) <= 649) {
//   if (cardNumber.length === 16 || cardNumber.length === 19) {
//     return "Discover";
//   }
// } else if (one + two + three + four === "6011" || one + two === "65") {
//   if (cardNumber.length === 16 || cardNumber.length === 19) {
//     return "Discover";
//   }
// }

// 혼자 만든것
//if (
//   (Number(one + two + three) >= 644 && Number(one + two + three) <= 649) ||
//   one + two + three + four === "6011" ||
//   one + two === "65"
// ) {
//   if (cardNumber.length === 16 || cardNumber.length === 19) {
//     return "Discover";
//   }
// }
