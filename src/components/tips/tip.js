import "./tip.less";
const tip = (text='tip') => {
    const _ele = document.createElement('div');
    _ele.innerHTML = `<div class='tips'>${text}</div>`;
    return _ele.children[0]
}
export { tip }