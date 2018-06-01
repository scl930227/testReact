// 定义组件
function ActionClick() {
        function handleClick(e) {
            e.preventDefault();
            console.log('点击了此处')
        }
    
    return (
        <a href="http://www.baidu.com" onClick={handleClick}>
            click me
        </a>
    );
}


function $(id){
    return typeof(id) === "string"?document.getElementById(id):id;
}

ReactDOM.render({
    <ActionClick/>,$('elFunctionWrap')
})

