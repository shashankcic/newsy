import React from 'react';
import { 
	IonPage, 
	IonContent,	
} from '@ionic/react';
import SmallHeader from '../../components/Header/SmallHeader.js';
import LargeHeader from '../../components/Header/LargeHeader.js';

const Profile = () => {
  return(
	<IonPage>
	  <SmallHeader title='Profile' />
	  <IonContent fullscreen>
	  	<LargeHeader title='Profile' />
	  </IonContent>
	</IonPage>
  )
}

export default Profile;