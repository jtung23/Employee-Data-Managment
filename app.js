  var config = {
    apiKey: "AIzaSyBqdmep6pdZhQv2sOFIIoQv7dTrhAJvpn0",
    authDomain: "employee-management-proj.firebaseapp.com",
    databaseURL: "https://employee-management-proj.firebaseio.com",
    projectId: "employee-management-proj",
    storageBucket: "employee-management-proj.appspot.com",
    messagingSenderId: "680616188647"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

$('#add-employee-btn').on('click', function() {
	console.log('i was clicked');

	// add multiple copies of data
	database.ref().push({

	})
})