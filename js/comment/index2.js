function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Harper',
    lastName: 'Perez'
};

const element = (
    <h1>
        Hello, {formatName(user)}!
    </h1>
);

var Element2 =  React.createClass({
    render:function () {
        return  (
            <div>
                <h1>
                    Hello, 111
                </h1>
            </div>

        );
    }
});
ReactDOM.render(
    <Element2/>,
    document.getElementById('app')
);
ReactDOM.render(
    element,
    document.getElementById('app2')
);
function tick() {
    const element = (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    ReactDOM.render(
        element,
        document.getElementById('time')
    );
}

setInterval(tick, 1000);