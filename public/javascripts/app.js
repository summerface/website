var Router = ReactRouter; // 由于是html直接引用的库，所以 ReactRouter 是以全局变量的形式挂在 window 上
var Route = ReactRouter.Route;
var RouteHandler = ReactRouter.RouteHandler;
var DefaultRoute = ReactRouter.DefaultRoute;
var Link = ReactRouter.Link;
var Redirect = ReactRouter.Redirect;
var StateMixin = ReactRouter.State;
var C = window.components;
var Tab = React.createClass({
    mixins: [StateMixin],
    render: function() {
        var isActive = this.isActive(this.props.to, this.props.params, this.props.query);
        var className = isActive ? "active" : "";
        var link = (
            <Link {...this.props}></Link>
        );
        return <li className={className}>{link}</li>;
    }
});
// 应用入口
var App = React.createClass({
    render: function() {
        console.log(Router);
        return (
            <div className="indexApp">
                <div className="container">
                    <RouteHandler />
                </div>
            </div>
        );
    }
});

// 定义页面上的路由
var routes = (
    <Route>
        <Route handler={App}>
            <DefaultRoute name="index" handler={C.IndexComponent} />
        </Route>
        <Route name="404" path="/404" handler={C.Page404}/>
        <Redirect from="*" to="404" />

    </Route>

);
Router.run(routes, function(Handler) {
    console.log(Handler);
    React.render(<Handler />, document.getElementById("index"));
});