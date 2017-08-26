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

	database.ref().on('child_added', function(snapshot) {
		console.log(snapshot.val());
		var newInfo = snapshot.val();
		console.log("name: " + newInfo.name);
		console.log("role: " + newInfo.role);
		console.log("start: " + newInfo.start);
		console.log("monthly: " + newInfo.monthly);
	})


$('#add-employee-btn').on('click', function() {
	console.log('i was clicked');
  var name = $('#employee-name-input').val();
  var role = $('#role-input').val();
  var start = $('#start-input').val();
  var monthly = $('#rate-input').val();
  console.log(name)
	// add multiple copies of data
	database.ref().push({
		name: name,
		role: role,
		start: start,
		monthlyR: monthly
	})

	database.ref().on('child_added', function(snapshot) {
		console.log(snapshot.val());
		var newInfo = snapshot.val();
		console.log("name: " + newInfo.name);
		console.log("role: " + newInfo.role);
		console.log("start: " + newInfo.start);
		console.log("monthly: " + newInfo.monthly);
	})
})