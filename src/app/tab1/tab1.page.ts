import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItemOption, IonCardSubtitle, IonCol, IonRow, IonCardContent, IonCard, IonLabel, IonCardHeader, IonCardTitle, IonItem, IonIcon } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonIcon, IonItem, IonCardTitle, IonCardHeader, IonLabel, IonCard, IonCardContent, IonRow, IonCol, IonCardSubtitle, IonItemOption, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent],
})
export class Tab1Page {
  constructor() {}
}
