export const get_info = (
  valueList: string[],
  brainDump: string,
  chosenKeywords: any,
  background: string,
  intention: string,
  growth: string,
  ending: string,
  interest: string,
  event: string
) => {
  let info = `
      Below, inside """ is what a writer wrote for planning a novel
      """
      ${brainDump}
      """
      
      These are important elements for this novel : ${[
        ...chosenKeywords.map((item: any) => item.description),
      ]}\n\n
    `

  if (valueList.includes('background')) {
    info += `\n\n Background setting of world : ${background}`
  }
  if (valueList.includes('intention')) {
    info += `\n\n Core theme consciousness and planning intention of the novel : ${intention}`
  }
  if (valueList.includes('growth')) {
    info += `\n\n Changes that occur to the protagonist during the progression of the novel : ${growth}`
  }
  if (valueList.includes('ending')) {
    info += `\n\n The ending of this novel : ${ending}`
  }
  if (valueList.includes('interest')) {
    info += `\n\n Key Interesting thing for this novel: ${interest}`
  }
  if (valueList.includes('event')) {
    info += `\n\n The main event of this novel : ${event}`
  }

  return info
}

export const FICTION = "\
  위드는 사냥터에서 아르펜 제국의 영토가 대륙을 통일하기 직전이라는 소식을 들었다.\
  케이베른과 싸우면서 잃어버린 레벨을 복구하기 위해 조각 생명체들이 총동원된 상태였다.\
  “나의 힘을 맛보아라!”\
  블랙 드래곤의 뼈로 만든 육체를 얻어서 강력해진 빛날이!\
  “누구든 지킨다. 나를 넘지 못한다. 으랴아아아아!”\
  철혈의 워리어 바하모르그!\
  “검을 위하여!”\
  “다 맞추겠어요.”\
  기사 세빌과 하이엘프 엘틴이 동원되어서 무섭게 몬스터들을 돌파하는 중.\
  ― 마판: 로자임 왕국과 브렌트 왕국의 영토 65%를 흡수했습니다.\
  “꽤 많이 했네요.”\
  위드는 사냥터에 머물며 몬스터를 때려잡으면서도 대륙 통일을 위한 작업은 착실히 진행.\
  베르사 대륙 전체로 보면 불과 2, 3% 땅만이 아르펜 제국의 영토에 포함되지 않고 있었다.\
  남부 사막에서 북부의 끝까지, 대륙의 거의 모든 지방에서 황제로 인정을 받고 있는 상태였다.\
  던전 베탄은 일찍이 공략된 적이 없는 곳이었지만, 조각 생명체들의 무서운 돌파를 막지 못했다.\
  그다음에는 언데드들까지 몰려갔다.\
  ― 마판: 아르펜 제국의 명성이 악화되지 않도록 조심하느라 늦어졌습니다. 영주들이 경계하긴 했어도 대부분은 어쩔 수 없는 일로 생각하고 받아들이고 있습니다.\
  “흡수하지 못하는 땅들이 문제로군요.”\
  ― 마판: 예, 그렇습니다. 로자임 왕국과 브렌트 왕국에서 직접 지배하는 지역이라서 정복해야 될 것 같습니다.\
  로자임 왕국의 세라보그 성.\
  브렌트 왕국의 네할레스.\
  국왕이 직접 통치하는 수도 부근은 문화로 정복하기에는 오랜 시간이 걸리게 되리라.\
  ‘세라보그 성이라…….’\
  위드는 로열 로드에 막 접속했을 때가 떠올랐다.\
  그때만 하더라도 첫 가상현실에 들어와서 모든 것이 신기했었다.\
  철저히 연구하고 시작하긴 했지만 몸으로 느끼는 건 경이로운 기적 그 자체였으니까.\
  초보 수련관에서 허수아비를 치고, 성문 밖으로 나가서 몬스터들을 사냥했던 일들이 모두 추억이었다.\
  ‘리트바르 마굴에서 조각사로 전직하기도 했지.’\
  위드는 슬며시 미소를 지었다.\
  세라보그 성에서 비슷한 시기에 시작했던 유저 중에서 이렇게 출세한 사람이 또 있을까.\
  ‘크흠, 그러면 세라보그 성으로 갈 준비를 해 볼까?’\
  한 달 동안 사냥하면서 레벨은 거의 복구를 해 놓았다.\
  매일 1.5개 이상의 레벨을 올리는 엄청난 사냥 속도.\
  케이베른을 처치하고 전투력이 제법 상승하기도 했지만, 결정적인 건 조각 생명체들과 언데드 소환 덕분이었다.\
  그들을 잘 부려 먹을수록 증가하는 사냥 효율.\
  “똑바로 싸워. 게으름 피우지 말고.”\
  “알겠다, 주인.”\
  “몸을 가진 건 좋은데 맨날 사냥만 하는 것 같다.”\
  “원래 몸은 고생하라고 있는 거야.”\
  본격적으로 착취당하는 빛날이.\
  원래 성격이 좋기도 했지만 가끔씩 얼굴을 다듬어 주면 더욱 만족해했다.\
  “칼리스 님.”\
  ― 칼리스: 예! 위드 황제 폐하.\
  흑사자 길드의 칼리스.\
"