document.getElementById('home').addEventListener('click', function() {
  document.getElementById('content').innerHTML = '<div class="content-box"><h2>Welcome to School News and Updates</h2><p>This is the homepage content. Stay tuned for the latest news and updates.</p></div>';
});

document.getElementById('events').addEventListener('click', function() {
  document.getElementById('content').innerHTML = '<div class="content-box"><h2>Upcoming Events</h2><p>List of upcoming events will be displayed here. Check back soon for more details.</p></div>';
});

document.getElementById('sports').addEventListener('click', function() {
  document.getElementById('content').innerHTML = '<div class="content-box"><h2>Sports Updates</h2><p>Latest sports news and updates will be displayed here. Don’t miss out on the action.</p></div>';
});
