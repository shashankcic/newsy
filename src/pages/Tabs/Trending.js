import React from 'react';
import { 
	IonPage, 
	IonContent,	
} from '@ionic/react';
import SmallHeader from '../../components/Header/SmallHeader.js';
import LargeHeader from '../../components/Header/LargeHeader.js';

const Trending = () => {
  return(
	<IonPage>
	  <SmallHeader title='Trending' />
	  <IonContent fullscreen>
	  	<LargeHeader title='Trending' />
	  </IonContent>
	</IonPage>
  )
}

export default Trending;