if (Meteor.isServer) {
  Meteor.methods({
    get:function(query){
      this.unblock();
      var result = HTTP.call("GET", 'https://aws-us-east-1-portal9.dblayer.com:10159/yesmaster/_search?q='+ query,
      {auth:'admin:19degrees'});
      console.log(result);
      return result;
    }
  });
}
