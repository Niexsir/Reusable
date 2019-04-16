import "./tip.less";
/**
 * @param {String} position tip的出现的位置 top bottom left right 
 * @param {String} text 展示的文字 
 */
const tip = ({text='tip',position='top'}) => {
    const _ele = document.createElement('div');
    _ele.innerHTML = `<div class='tips tip-${position}'>${text}</div>`;
    return _ele.children[0]
}
export { tip }