import "./tip.less";
const tip = ({text='tip',position='top'}) => {
    const _ele = document.createElement('div');
    _ele.innerHTML = `<div class='tips tip-${position}'>${text}</div>`;
    return _ele.children[0]
}
export { tip }