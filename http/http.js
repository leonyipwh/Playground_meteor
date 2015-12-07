if (Meteor.isClient) {
  Template.hello.helpers({
    result:function() {
      return 'hihi';
    }
  });

  Template.hello.events({
    'click #button': function () {
      var query = 'leon';
      Meteor.call("get", query, function(error, result) {
        if(error){
          console.log("error", error);
        }
        else {
          console.log(result.data.hits.hits);
        }
      });
    }
  });
}
