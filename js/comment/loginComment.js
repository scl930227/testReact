function $Id(id) {
    return document.getElementById(id);
}

// 基础的组件定义使用函数的行书定义 参考:https://www.cnblogs.com/wonyun/p/5930333.html
/*class UserGreeting extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h1>Welcome back!</h1>
        );
    }
}

class GuestGreeting extends React.Component {
    render() {
        return (
            <h1>Please sign up.</h1>
        );
    }
}

class Greeting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: props.isLoggedIn
        }
    }

    render() {
        if (this.state.isLoggedIn) {
            return <UserGreeting/>;
        }
        return <GuestGreeting/>;
    }
}*/

function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
}

function Greeting(props) {
    const isLoginIn = props.isLoggedIn;
    if (isLoginIn) {
        return <UserGreeting/>;
    }
    return <GuestGreeting/>;
}

// ReactDOM.render(
//     < Greeting isLoggedIn={false}/>,
//     document.getElementById('login')
// );

function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    );
}

function LogoutButton(props) {
    return (
        <button  onClick={props.onClick}>
            Logout
        </button>
    );
}

class LoginController extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        };

        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }

    handleLoginClick() {
        this.setState({
            isLoggedIn: true
        });
    }

    handleLogoutClick() {
        this.setState({
            isLoggedIn: false
        });
    }

    render() {
        const isLoginIn = this.state.isLoggedIn;
        let button = null;
        if (isLoginIn) {
            button = <LogoutButton onClick={this.handleLogoutClick}/>;
        } else {
            button = <LoginButton onClick={this.handleLoginClick}/>;
        }
        return (
            <div>
                <Greeting isLoggedIn={isLoginIn}/>
                {button}
            </div>
        )

    }
}
ReactDOM.render(
  < LoginController />,
  document.getElementById('loginController')
);