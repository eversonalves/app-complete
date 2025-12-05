import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chatbubbleEllipsesOutline, duplicateOutline, home, newspaperOutline, pencilOutline, personOutline, readerOutline } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {
    addIcons({home, chatbubbleEllipsesOutline, personOutline, duplicateOutline, newspaperOutline, readerOutline, pencilOutline});
  }
}
