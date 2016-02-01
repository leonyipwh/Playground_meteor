if (Meteor.isClient) {
  var uploader = new Slingshot.Upload("leoncloud");
  // counter starts at 0



  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      var bucketName = $('#bucketName').val();
      console.log(document.getElementById('bucketName').files[0]);

      uploader.send(document.getElementById('bucketName').files[0], function (error, downloadUrl) {

        // Meteor.users.update(Meteor.userId(), {$push: {"profile.files": downloadUrl}});

        console.log(downloadUrl);

      });
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup

  });

  Slingshot.GoogleCloud.directiveDefault.GoogleSecretKey = Assets.getText('gs-leoncloud.pem');

  Slingshot.createDirective("leoncloud", Slingshot.GoogleCloud, {
    bucket: "leoncloud",
    GoogleAccessId: Meteor.settings.GoogleCloudBucket.GoogleAccessId,
    GoogleSecretKey:Meteor.settings.GoogleCloudBucket.GoogleSecretKey,
    allowedFileTypes: ["image/png", "image/jpeg", "image/gif"],
    maxSize:10 * 1024 * 1024,

    authorize: function () {
    //Deny uploads if user is not logged in.
      // if (!this.userId) {
      //   var message = "Please login before posting files";
      //   throw new Meteor.Error("Login Required", message);
      // }
      return true;
    },

    key: function (file) {
      return file.name;
    }
  });
}
