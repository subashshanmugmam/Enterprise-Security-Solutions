// Dashboard specific logic can be added here
document.addEventListener('DOMContentLoaded', () => {
    console.log('Dashboard loaded');

    // Example: simple sidebar toggle if we want specific dashboard behavior
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const sidebar = document.getElementById('sidebar');

    if (sidebarToggle && sidebar) {
        sidebarToggle.addEventListener('click', () => {
            sidebar.classList.toggle('-translate-x-full');
        });
    }
});
