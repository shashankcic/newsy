import React from 'react';
import { 
	IonPage, 
	IonContent,	
} from '@ionic/react';
import SmallHeader from '../../components/Header/SmallHeader.js';
import LargeHeader from '../../components/Header/LargeHeader.js';

const News = () => {
  return(
	<IonPage>
	  <SmallHeader title='Newsy' />
	  <IonContent fullscreen>
	  	<LargeHeader title='Newsy' />
	  </IonContent>
	</IonPage>
  )
}

export default News;