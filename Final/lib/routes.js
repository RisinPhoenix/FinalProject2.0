FlowRouter.route('/',
{
  name: 'home',
  action(){
    // console.log('/');
    BlazeLayout.render('layout1', { top: "header", main: "home", bottom: "footer"});
    }  
});

FlowRouter.route('/home',
{
  name: 'home',
  action(){
    // console.log('/home');
    BlazeLayout.render('layout1', { top: "header", main: "home", bottom: "footer"});
  }
});


FlowRouter.route('/Streaming',
{
  name: 'Streaming',
  action(){
    BlazeLayout.render('layout1', { top: "headerStreaming", main: "streaming", bottom: "footer" });
    // console.log('/streaming');
  }
});

FlowRouter.route('/signing',
{
  name: 'Signing',
  action(){
    BlazeLayout.render('layout1', { top: "headerSigning", main: "signing", bottom: "footer" });
    // console.log('/signing');
  }
});

FlowRouter.route('/sending',
{
  name: 'Sending',
  action(){
    BlazeLayout.render('layout1', { top: "headerSending", main: "sending", bottom: "footer" });
    // console.log('/signing');
  }
});

FlowRouter.route('/followUp',
{
  name: 'FollowUp',
  action(){
    BlazeLayout.render('layout1', { top: "headerFollowUp", main: "followUp", bottom: "footer" });
    // console.log('/signing');
  }
});