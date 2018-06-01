/*
* jsx 命名规范:
* React 可以渲染 HTML 标签 (strings) 或 React 组件 (classes)。
*
React DOM 首先会比较元素内容先后的不同，而在渲染过程中只会更新改变了的部分。ps:是不是意味着要劲量的使单个组件不要太大?
* */

//要渲染 HTML 标签，只需在 JSX 里使用小写字母的标签名。
//注意， todo 原生 HTML 元素名以小写字母开头，而自定义的 React 类名以大写字母开头，比如 HelloMessage 不能写成 helloMessage。
// 除此之外还需要注意组件类只能包含一个顶层标签，否则也会报错。如el2
//单个标签直接写,不推荐x
const el1 = <h1>这是第一个标签元素</h1>;

ReactDOM.render(
    el1, document.getElementById('el1')
);
//建议使用div 或者括号包裹起来
const el2 = <div>
    <h1>这是第二个标签元素</h1>
    <span>代码中嵌套多个 HTML 标签，需要使用一个标签元素包裹它</span>
</div>;
ReactDOM.render(
    el2, document.getElementById('el2')
);

//使用括号包裹起html标签, 推荐
const el3 = (
    <div>
        <h1>这是第三个标签元素</h1>
        <span>代码中嵌套多个 HTML 标签，需要使用一个标签元素包裹它</span>
    </div>
);
ReactDOM.render(
    el3, document.getElementById('el3')
);

//要渲染 React 组件，只需创建一个大写字母开头的本地变量。
const El4 = React.createClass({
    render: function () {
        return <div>
            <h1>这是第4个组件</h1>
            <span>以组件方式定义</span>
        </div>
    }
});
ReactDOM.render(
    <El4/>, document.getElementById('el4')
);

//组件定义方式2
function El5(props) {
    return <div>
        <h1>这是第5个标签组件 {props.selfVal}</h1>
        <span>以组件方式定义</span>
    </div>
}

ReactDOM.render(
    <El5/>, document.getElementById('el5')
);

//方式3 使用 ES6 class 来定义一个组件:
class El6 extends React.Component {
    render() {
        return <div>
            <h1>这是第6个标签组件</h1>
            <span>以组件方式定义</span>
        </div>
    }
}

ReactDOM.render(
    <El6/>, document.getElementById('el6')
);


//拓展写法
const el7 = <El5 selfVal='重写为第7组件'/>;
ReactDOM.render(
    el7, document.getElementById('el7')
);


//todo 尝试样式

const elStyle = (
    <div>
        <h1 className='titleStyle'>这是测试样式</h1>
    </div>
);
ReactDOM.render(
    elStyle, document.getElementById('el8')
);
// 大括号内大引号为字符串,不带则为变量
const elStyle2= (
    <div>
        <h1 className={'ttBlue'}>这是测试样式2s</h1>
    </div>
);
ReactDOM.render(
    elStyle2, document.getElementById('el9')
);