// routes using FlowRouter for routing and BlazeLayout for rendering

// route for the base page
FlowRouter.route('/',
{
  name: '/',
  action(){
    // console.log('/');
    BlazeLayout.render('layout1', { top: "header", main: "home", bottom: "footer"});
    }  
});

// route for the base page
FlowRouter.route('/home',
{
  name: 'home',
  action(){
    // console.log('/home');
    BlazeLayout.render('layout1', { top: "header", main: "home", bottom: "footer"});
  }
});

// route for the streaming page
FlowRouter.route('/Streaming',
{
  name: 'Streaming',
  action(){
    BlazeLayout.render('layout1', { top: "headerStreaming", main: "streaming", bottom: "footer" });
    // console.log('/streaming');
  }
});

// route for the signing page
FlowRouter.route('/signing',
{
  name: 'Signing',
  action(){
    BlazeLayout.render('layout1', { top: "headerSigning", main: "signing", bottom: "footer" });
    // console.log('/signing');
  }
});

// route for the sending
FlowRouter.route('/sending',
{
  name: 'Sending',
  action(){
    BlazeLayout.render('layout1', { top: "headerSending", main: "sending", bottom: "footer" });
    // console.log('/sending');
  }
});

// route for the followUp
FlowRouter.route('/followUp',
{
  name: 'FollowUp',
  action(){
    BlazeLayout.render('layout1', { top: "headerFollowUp", main: "followUp", bottom: "footer" });
    // console.log('/followUp');
  }
});