
let clickThis = [".MenuItem__chevronButton--3vJb0_tablet",".BetVision__wrapper--2aPxt",".BetVision__wrapper--2aPxt_phone",".BetVision__wrapper--2aPxt_tablet"];
const res = clickThis.filter((item) => item.includes('_tabletss')).map((it) => it.replace('_tabletss', ''))

console.log(res)
