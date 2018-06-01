
const i =1;


let indexStyle ={
    fontSize:'100px',
    color:'#fff000'
};
let calc = (x,y) => x*4 +y;
function show(x=5,y=6){
    return x+y;
}


// 渲染html element 标签



let arr= [
    <h1>用这种有什么意思呢?</h1>,
    <h1>用这种有什么意思呢?</h1>
];
ReactDOM.render(
    <div>

        {/*这就可以理解嘛..这种注释*/}
        <h1 style={indexStyle}>Hello, world!</h1>
        {arr}
        这个看起来好像比vue 用起来简单多了
        <p>哈哈哈</p> 而且还有表达式{ 1+1}<br/>
        比如这个就是表达式:{calc(2,4)} <br/>
        console.log('这是控制台,可以输入吗'){show()} <br/>
        {i===1? 'true':'false'}
    </div>
    , document.getElementById('app')
);
var Button = React.createClass({
    getInitialState: function() {
        return {
            data:0
        };
    },
    setNewNumber: function() {
        this.setState({data: this.state.data + 1})
    },
    render: function () {
        return (
            <div>
                <button onClick = {this.setNewNumber}>INCREMENT</button>
                <Content myNumber = {this.state.data}></Content>
            </div>
        );
    }
})


// componte 组件的生命的周期
var Content = React.createClass({
    componentWillMount:function() {
        console.log('Component WILL MOUNT!')
    },
    componentDidMount:function() {
        console.log('Component DID MOUNT!')
    },
    componentWillReceiveProps:function(newProps) {
        console.log('Component WILL RECEIVE PROPS!')
    },
    shouldComponentUpdate:function(newProps, newState) {
        return true;
    },
    componentWillUpdate:function(nextProps, nextState) {
        console.log('Component WILL UPDATE!');
    },
    componentDidUpdate:function(prevProps, prevState) {
        console.log('Component DID UPDATE!')
    },
    componentWillUnmount:function() {
        console.log('Component WILL UNMOUNT!')
    },

    render: function () {
        return (
            <div>
                <h3>{this.props.myNumber}</h3>
            </div>
        );
    }
});
ReactDOM.render(
    <div>
        <Button />
    </div>,
    document.getElementById('example')
);



var MyComponent = React.createClass({
    handleClick: function() {
        // 使用原生的 DOM API 获取焦点
        this.refs.myInput.focus();
    },
    render: function() {
        //  当组件插入到 DOM 后，ref 属性添加一个组件的引用于到 this.refs
        return (
            <div>
                <input type="text" ref="myInput" />
                <input
                    type="button"
                    value="点我输入框获取焦点"
                    onClick={this.handleClick}
                />
            </div>
        );
    }
});

ReactDOM.render(
    <MyComponent />,
    document.getElementById('input')
);