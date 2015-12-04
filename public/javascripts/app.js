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
                <div className="navbar">
                    <div className="container">
                        <a className="navbar-brand" href="/"><img src="https://d1hjm33yswheja.cloudfront.net/img/inc-logo.svg" alt="Inc" width="48"/></a>
                        <ul className="nav navbar-nav">
                            <li><a href="/features/" className="nav-index">首页</a></li>
                            <li><a href="/about/" className="nav-service">服务</a></li>
                            <li><a href="/pricing/" className="nav-works">作品</a></li>
                            <li><a href="http://blog.sendtoinc.com/">博客</a>
                            </li><li className="sep"></li>
                            <li><a href="/accounts/login/">联系我们</a></li>
                        </ul>
                    </div>
                </div>
                <section>
                    <div className="container picarea">
                        <div className="row">
                            <div className="col col-xs-12">
                                <div className="text">
                                    <h1> 更好的服务:<br/>
                                        为您的企业提供便利</h1>
                                    <p> 承接响应式网站，移动app，微信公众号等业务</p>
                                    <div className="btn btn-success contactBtn btn-large">了解更多</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <RouteHandler />
                </section>
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