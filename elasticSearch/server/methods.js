if (Meteor.isServer) {
  Meteor.methods({
    get:function(query) {
      var result = HTTP.call("GET", 'https://aws-us-east-1-portal9.dblayer.com:10159/yesmaster/_search?q='+ query,
      {auth:'admin:19degrees'});
      console.log(result);
      return result;
    },
    post:function(query) {
      var result = HTTP.call("PUT", 'https://aws-us-east-1-portal9.dblayer.com:10159/yesmaster/products/2',
      {
        auth:'admin:19degrees',
        data: query
      });
      console.log(result);
    }
  });
}
