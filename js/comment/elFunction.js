function $Id(id) {
    return document.getElementById(id);
}


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


ReactDOM.render(
    <ActionClick/>, $Id('elFunctionWrap')
);


/*
*创建一个类,添加一个构造函数,初始化this.state,该构造函数每个类都含有,
*在一个构造方法中可以使用super关键字来调用一个父类的构造方法。
*如果没有显式指定构造方法，则会添加默认的 constructor 方法。
*如果不指定一个构造函数(constructor)方法, 则使用一个默认的构造函数(constructor)。
* */
class Toggle extends React.Component {
    constructor(props) {     // 构造函数
        super(props);
        this.state = {
            isToggleOn: true
        };
        // 这个绑定是必要的，使`this`在回调中起作用
        ///这句话理解:https://blog.csdn.net/jutal_ljt/article/details/53381670
        //http://www.jb51.net/article/91447.htm
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick}> {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}



class LikeButton extends React.Component {
    constructor() {
        super();
        this.state = {
            liked: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({liked: !this.state.liked});
    }

    render() {
        const text = this.state.liked ? 'liked' : 'haven\'t liked';
        return (
            <div onClick={this.handleClick}>
                You {text} this. Click to toggle.
            </div>
        );
    }
}

ReactDOM.render(
    <LikeButton/>,
    document.getElementById('example')
);

