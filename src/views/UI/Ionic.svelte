 <script>
const greet = () => alert('hi')

function presentAlert() {
  const alert = document.createElement('ion-alert');
  alert.cssClass = 'my-custom-class';
  alert.header = 'Alert';
  alert.subHeader = 'Subtitle';
  alert.message = 'This is an alert message.';
  alert.buttons = ['OK'];

  document.body.appendChild(alert);
  alert.present();

  const { role } = alert.onDidDismiss();
  console.log('onDidDismiss resolved with role', role);
}

</script>

<ion-app>
  <ion-content>
    <ion-header>
      <ion-toolbar>
        <ion-title>My App</ion-title>
      </ion-toolbar>
    </ion-header>
  </ion-content>
  <ion-footer>
    <ion-button color="secondary" expand="block" on:click={presentAlert}>
      Greet
    </ion-button>
  </ion-footer>
</ion-app>