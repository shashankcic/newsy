import React from 'react';
import { 
	IonPage, 
	IonContent,	
} from '@ionic/react';
import SmallHeader from '../../components/Header/SmallHeader.js';
import LargeHeader from '../../components/Header/LargeHeader.js';

const Search = () => {
  return(
	<IonPage>
	  <SmallHeader title='Search' />
	  <IonContent fullscreen>
	  	<LargeHeader title='Search' />
	  </IonContent>
	</IonPage>
  )
}

export default Search;