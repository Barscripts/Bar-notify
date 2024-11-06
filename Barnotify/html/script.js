window.addEventListener('message', function(event) {
    if (event.data.type === 'notification') {
        var notificationsContainer = document.getElementById('notifications-container');

        var notification = document.createElement('div');
        notification.className = 'notification ' + event.data.messageType;

        var notificationTitle = document.createElement('div');
        notificationTitle.className = 'notification-title';
        notificationTitle.innerText = event.data.title || '';
        notification.appendChild(notificationTitle);

        var notificationContent = document.createElement('div');
        notificationContent.className = 'notification-content';

        var notificationIcon = document.createElement('i');
        switch (event.data.messageType) {
            case 'info':
                notificationIcon.className = 'fas fa-info-circle';
                break;
            case 'success':
                notificationIcon.className = 'fas fa-check-circle';
                break;
            case 'error':
                notificationIcon.className = 'fas fa-exclamation-triangle';
                break;
            case 'warn':
                notificationIcon.className = 'fas fa-exclamation-circle';
                break;
            default:
                notificationIcon.className = 'fas fa-info-circle';
        }

        var notificationText = document.createElement('span');
        notificationText.innerText = event.data.message;

        notificationContent.appendChild(notificationIcon);
        notificationContent.appendChild(notificationText);
        notification.appendChild(notificationContent);

        var progressBar = document.createElement('div');
        progressBar.className = 'progress-bar';
        notification.appendChild(progressBar);

        notificationsContainer.appendChild(notification);

        notification.style.animation = 'slideIn 0.5s forwards';

        setTimeout(function() {
            notification.style.animation = 'fadeOut 0.5s forwards';
            setTimeout(function() {
                notificationsContainer.removeChild(notification);
            }, 500);
        }, 3000);

        if (notificationsContainer.children.length > 5) {
            notificationsContainer.removeChild(notificationsContainer.firstChild);
        }
    }
});
