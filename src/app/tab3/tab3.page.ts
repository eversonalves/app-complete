import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCardSubtitle, IonCard, IonCardHeader, IonCardTitle, IonLabel, IonItem, IonIcon } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [IonIcon, IonItem, IonLabel, IonCardTitle, IonCardHeader, IonCard, IonCardSubtitle, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent],
})
export class Tab3Page {
  constructor() {}
}
