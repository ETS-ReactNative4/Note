class MoveTo  {

    constructor(el) {
        this.el = el
    }

    init() {
        let that = this
        this.el.onmousedown = function(event) {
            let shiftX = event.clientX - that.el.getBoundingClientRect().left;
            let shiftY = event.clientY - that.el.getBoundingClientRect().top;

            // (1) 准备移动：确保 absolute，并通过设置 z-index 以确保球在顶部
            that.el.style.position = 'absolute';
            that.el.style.zIndex = 1000;

            // 将其从当前父元素中直接移动到 body 中
            // 以使其定位是相对于 body 的
            document.body.append(that.el);

            // 现在球的中心在 (pageX, pageY) 坐标上
            function moveAt(pageX, pageY) {
                // ball.style.left = pageX - ball.offsetWidth / 2 + 'px';
                // ball.style.top = pageY - ball.offsetHeight / 2 + 'px';
                
                that.el.style.left = pageX - shiftX + 'px';
                that.el.style.top = pageY - shiftY + 'px';
            }

            function onMouseMove(event) {
                moveAt(event.pageX, event.pageY);
            }

            // (2) 在 mousemove 事件上移动球
            document.addEventListener('mousemove', onMouseMove);

            // (3) 放下球，并移除不需要的处理程序
            that.el.onmouseup = function() {
                document.removeEventListener('mousemove', onMouseMove);
                that.el.onmouseup = null;
            };
        }
    }
}