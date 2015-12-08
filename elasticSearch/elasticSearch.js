if (Meteor.isClient) {
  Template.elasticSearch.helpers({
    result:function() {
      return 'hihi';
    }
  });

  Template.elasticSearch.events({
    'click #button': function () {
      var query = 'leon';
      Meteor.call("get", query, function(error, result) {
        if(error){
          console.log("error", error);
        }
        else {
          var result = result.data.hits.hits;
          console.log(result);
          $('#result').html(result);
        }
      });
    },
    'click #post': function () {
      var query = {name:'omg',details:'421'};

      Meteor.call("post", query, function(error, result) {
        if(error){
          console.log("error", error);
        }
        else {
          console.log(result);
        }
      });
    }
  });
}
