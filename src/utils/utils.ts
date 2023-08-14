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
