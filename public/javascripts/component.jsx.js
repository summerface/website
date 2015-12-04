
(function(React, ReactRouter, Reflux, A, S,global) {
    global.components = {};

    global.components.IndexComponent = React.createClass({
        render:function(){
           return(
             <div>first node test</div>
             )
        }
    });
    global.components.Page404 = React.createClass({
        render:function() {
            return (
                <div className="Page404">
                    <h2 style={{margin: "2rem"}}>{"对不起，您访问的页面不存在(>﹏<)"}</h2>
                    <p><Link to="/">点此返回主页</Link></p>
                </div>
            );
        }
    });
}(window.React, window.ReactRouter, window.Reflux, window.actions, window.stores,window));