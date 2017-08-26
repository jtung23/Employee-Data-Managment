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

	$('#employee-table').append('<tr class="info-row"><td class="employee-name-input"></td><td class="role-input"></td><td class="start-input"></td><td></td><td class="rate-input"></td><td></td></tr>');
	$('.employee-name-input').html(newInfo.name);
	$('.role-input').html(newInfo.role);
	$('.start-input').html(newInfo.start);
	$('.rate-input').html(newInfo.monthly);
// add to last row child
	})


$('#add-employee-btn').on('click', function() {
	event.preventDefault();

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
		monthly: monthly
	})




})


