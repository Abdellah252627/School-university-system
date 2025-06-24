self.addEventListener('push', function(event) {
  let data = {};
  try {
    data = event.data.json();
  } catch {
    data = { title: 'إشعار جديد', message: event.data.text() };
  }
  self.registration.showNotification(data.title || 'إشعار جديد', {
    body: data.message || '',
    icon: '/logo192.png',
    badge: '/logo192.png',
    data: data.url || undefined
  });
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  if (event.notification.data) {
    event.waitUntil(clients.openWindow(event.notification.data));
  }
}); 