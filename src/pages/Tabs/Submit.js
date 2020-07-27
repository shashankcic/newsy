import React from 'react';
import { 
	IonPage, 
	IonContent,	
} from '@ionic/react';
import SmallHeader from '../../components/Header/SmallHeader.js';
import LargeHeader from '../../components/Header/LargeHeader.js';

const Submit = () => {
  return(
	<IonPage>
	  <SmallHeader title='Submit' />
	  <IonContent fullscreen>
	  	<LargeHeader title='Submit' />
	  </IonContent>
	</IonPage>
  )
}

export default Submit;