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
  let five = cardNumber[4];
  let six = cardNumber[5];

  let prefix1 = one;
  let prefix2 = one + two;
  let prefix3 = one + two + three;
  let prefix4 = one + two + three + four;
  let prefix5 = one + two + three + four + five;
  let prefix6 = one + two + three + four + five + six;

  // Diner's club카드 조건
  if (prefix2 === "38" || prefix2 === "39") {
    if (cardNumber.length === 14) {
      //위가 맞다면 디너스카드를 리턴하면 됩니다
      return "Diner's Club";
    }
  }

  // American Express 카드 조건
  if (prefix2 === "34" || prefix2 === "37") {
    if (cardNumber.length === 15) {
      //만약에 위의 조건이 아니라면, 아메리칸 카드를 리턴해보겠습니다
      return "American Express";
    }
  }

  // Visa 카드 조건 + Swirch
  // Visa 는 4로 시작하고, 길이가 13, 16, 19인것.

  // Switch는 항상 4903, 4905, 4911, 4936, 564182, 633110, 6333 혹은 6759로 시작하고
  // 16, 18, 혹은 19자리의 숫자입니다..
  // 잠시만요! Switch와 Visa의 카드번호를 검사할 때에 prefix에서 겹치는 부분이 있는 것 같습니다.
  if (
    prefix4 === "4903" ||
    prefix4 === "4905" ||
    prefix4 === "4911" ||
    prefix4 === "4936" ||
    prefix6 === "564182" ||
    prefix6 === "633110" ||
    prefix4 === "6333" ||
    prefix4 === "6759"
  ) {
    if (
      cardNumber.length === 16 ||
      cardNumber.length === 18 ||
      cardNumber.length === 19
    ) {
      return "Switch";
    }
  } else if (prefix1 === "4") {
    if (
      cardNumber.length === 13 ||
      cardNumber.length === 16 ||
      cardNumber.length === 19
    ) {
      return "Visa"; //Visa 카드번호는 항상 4로 시작하고 13, 16, 혹은 19자리의 숫자입니다.
    }
  }

  //MasterCard 카드 조건
  if (
    //MasterCard 카드번호는 항상 51, 52, 53, 54, 혹은 55로 시작하고 16자리의 숫자입니다.
    prefix2 === "51" ||
    prefix2 === "52" ||
    prefix2 === "53" ||
    prefix2 === "54" ||
    prefix2 === "55"
  ) {
    if (cardNumber.length === 16) {
      return "MasterCard";
    }
  }

  //Discover 카드 조건
  if (
    prefix3 === "644" ||
    prefix3 === "645" ||
    prefix3 === "646" ||
    prefix3 === "647" ||
    prefix3 === "648" ||
    prefix3 === "649" ||
    prefix4 === "6011" ||
    prefix2 === "65"
  ) {
    if (cardNumber.length === 16 || cardNumber.length === 19) {
      return "Discover";
    }
  }

  // Maestro 카드 조건
  // Maestro는 항상 5018, 5020, 5038 또는 6304로 시작하고 12에서부터 19까지 자리의 숫자입니다.
  if (
    prefix4 === "5018" ||
    prefix4 === "5020" ||
    prefix4 === "5038" ||
    prefix4 === "6304"
  ) {
    if (cardNumber.length >= 12 && cardNumber.length <= 19) {
      return "Maestro";
    }
  }

  //China UnionPay 카드 조건
  // China UnionPay는 항상 622126-622925, 624-626, 혹은 6282-6288로 시작하고
  //16-19자리의 숫자입니다.
  if (
    (Number(prefix6) >= 622126 && Number(prefix6) <= 622925) ||
    (Number(prefix3) >= 624 && Number(prefix3) <= 626) ||
    (Number(prefix4) >= 6282 && Number(prefix4) <= 6288)
  ) {
    if (cardNumber.length >= 16 && cardNumber.length <= 19) {
      return "China UnionPay";
    }
  }
}

// prefix가 겹칠 때는 어떻게 검사를 진행해야할까요?

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
// }\
