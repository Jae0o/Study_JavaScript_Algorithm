function solution(a, b, g, s, w, t) {
  let start = 0;
  // 제한 사항에 맞도록 최대 값을 설정
  let end = 10e9 * 2 * 10e5 * 2;
  let mid = Math.floor((start + end) / 2);

  const totalVillage = t.length;

  while (start <= end) {
    let golds = 0;
    let silvers = 0;
    let resource = 0;

    for (let i = 0; i < totalVillage; i++) {
      const villageGold = g[i];
      const villageSilver = s[i];

      const move = Math.round(mid / (2 * t[i])) * w[i];

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
}