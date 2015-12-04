
var C = window.components;

var App = React.createClass({
    componentDidMount:function(){
        $("a.scroll").bind("click",function(b){
                var a=$(this);
                $("html, body").stop().animate({scrollTop:$(a.attr("href")).offset().top+600},1500,"easeInOutExpo");
                b.preventDefault();
            }
        );
    },
    render: function() {
        return (
            <div className="indexApp">
                <div className="navbar .navbar-fixed-top">
                    <div className="container">
                        <a className="navbar-brand" href="/"><img src="https://d1hjm33yswheja.cloudfront.net/img/inc-logo.svg" alt="Inc" width="48"/></a>
                        <ul className="nav navbar-nav">
                            <li><a href="/" className="scroll">首页</a></li>
                            <li className="sep"></li>
                            <li><a href="#index" className="scroll" >服务</a></li>
                            <li className="sep"></li>
                            <li><a href="#work" className="scroll" >作品</a></li>
                            <li className="sep"></li>
                            <li><a href="http://blog.sendtoinc.com/" >博客</a>
                            </li><li className="sep"></li>
                            <li><a href="#contact" className="scroll">联系我们</a></li>
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
                </section>
                <Index/>
                <Works/>
                <Contact/>
            </div>
        );
    }
});
var Index = React.createClass({
    render:function(){
       return(
           <div id="index" className="indexArea">
               <h2>承接中小型业务</h2>
               <p className="lead">再小的个体，也需要有自己的品牌。 那么，在电子商务化时代，每个人在互联网上，也要有个属于自己个家！
                   本工作室专为个人或中小企业主提供“自适应网站+微信公众号”一体化建站服务。
               </p>
               <div className="container">
                   <div className="row">
                       <div className="col-xs-4">
                           <a  className="navPic nav1 active">
                               <img src="https://d1hjm33yswheja.cloudfront.net/img/icon-share.png" alt="share"/>
                               <h4>响应式网站</h4>
                               <p>网站采用html5响应式设计，自动识别PC端、手机、平板,使网站在各类设备上均有良好的访问体验。</p>
                           </a>
                       </div>
                       <div className="col-xs-4">
                           <a className="navPic nav2">
                               <img src="https://d1hjm33yswheja.cloudfront.net/img/icon-box.png" alt="share"/>
                               <h4>移动APP</h4>
                               <p>我们提供 IOS 和 安卓 软件的开发，APP 质量包您满意</p>
                           </a>
                       </div>
                       <div className="col-xs-4">
                           <a className="navPic nav3">
                               <img src="https://d1hjm33yswheja.cloudfront.net/img/icon-inbox.png" alt="share"/>
                               <h4>微信公众号</h4>
                               <p>为微信公众号实现100多项功能扩展。</p>
                           </a>
                       </div>
                   </div>
                   <div className="screens">
                       <img src="https://d1hjm33yswheja.cloudfront.net/img/home-screen-link.jpg" alt=""  className="screen" style={{"display":"inline"}}/>
                       <img src="https://d1hjm33yswheja.cloudfront.net/img/home-screen-note.jpg" alt="" className="screen"/>
                       <img src="https://d1hjm33yswheja.cloudfront.net/img/home-screen-email.jpg" alt="" className="screen"/>
                   </div>
               </div>
           </div>
       )
    }
});
var Contact = React.createClass({
    render:function(){
        return(
            <div id="contact" className="contactArea">
                <h2 style={{"color":"white","fontWeight":"bold"}}>联系我们</h2>
                <div className="contactAreaBtn">
                    <div className="btn btn-success btn-large">发送邮件至jiye@ebupt.com</div>
                </div>
            </div>
        )
    }
});
var Works = React.createClass({
    render:function(){
        return(
            <div id="work" className="workArea">
                <h2>作品展示</h2>
                <div className="row" style={{"marginTop":"50"}}>
                    <div className="col-sm-4">
                        <img src="../images/ontee.png"/>
                    </div>
                    <div className="col-sm-4">
                        <img src="../images/ontee.png"/>
                    </div>
                    <div className="col-sm-4">
                        <img src="../images/ontee.png"/>
                    </div>
                </div>
            </div>
        )
    }
});
React.render(
    <App />,
    document.getElementById('index')
);
