$('.dashboard-btn, .sidebar-close-btn').on('click', function() {
	$('#sidebar').toggleClass('sidebar-hidden');
	$('#sidebar').toggleClass('sidebar-visible');
  });