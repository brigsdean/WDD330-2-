// Alert.js

class Alert {
  constructor() {
    this.alertsData = [];
  }

  async fetchAlertsData() {
    try {
      const response = await fetch('../json/alerts.json');
      if (response.ok) {
        this.alertsData = await response.json();
      }
    } catch (error) {
      this.alertsData = [];
    }
  }

  createAlertElements() {
    if (this.alertsData.length === 0) {
      return; // No alerts, exit early
    }

    const alertSection = document.createElement('section');
    alertSection.classList.add('alert-list');

    this.alertsData.forEach((alert) => {
      const alertMessage = document.createElement('p');
      alertMessage.textContent = alert.message;
      alertMessage.style.backgroundColor = alert.background;
      alertMessage.style.color = alert.color;
      alertMessage.classList.add('alert-item'); // Adds the CSS class to each alert element

      alertSection.appendChild(alertMessage);
    });

    const mainElement = document.querySelector('main');
    mainElement.prepend(alertSection);
  }
}

export default Alert;