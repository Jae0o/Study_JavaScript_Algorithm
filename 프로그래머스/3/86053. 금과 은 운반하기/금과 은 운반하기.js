const solution = (a, b, g, s, w, t) => {
  let start = 0;
  // 제한 사항에 맞도록 최대 값을 설정
  let end = 10e9 * 2 * 10e5 * 2;
  let mid = Math.floor((start + end) / 2);

  const totalVillage = t.length;

  while (start <= end) {
    // 해당 루프에 담을 전체 금
    let golds = 0;
    // 해당 루프에 담을 전체 은
    let silvers = 0;
    // 전체 자원 량
    let resource = 0;

    for (let i = 0; i < totalVillage; i++) {
      // 해당 마을의 옮길수 있는 금 용량
      const villageGold = g[i];
      // 해당 마을의 옮길 수 있는 은 용량
      const villageSilver = s[i];
      // 왕복 가능한 횟수
      const move = Math.round(mid / (2 * t[i])) * w[i];

      // 옮길 수 잇는 금 은 전체 광물 양을 넣음
      golds += Math.min(villageGold, move);
      silvers += Math.min(villageSilver, move);
      resource += Math.min(villageGold + villageSilver, move);
    }

    if (golds >= a && silvers >= b && resource >= a + b) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }

    mid = Math.floor((start + end) / 2);
  }

  return start;
};