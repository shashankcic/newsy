import React from 'react';
import { 
	IonPage, 
	IonContent,	
	IonItem,
	IonRow,
	IonLabel,
	IonCol,
	IonInput,
	IonButton,
} from '@ionic/react';
import SmallHeader from '../../components/Header/SmallHeader.js';
import LargeHeader from '../../components/Header/LargeHeader.js';
import userContext from '../../contexts/userContext';
import validateCreateLink from '../../validators/validateCreateLink';
import useForm from '../../hooks/useForm';
import firebase from '../../firebase';

const INITIAL_STATE = {
	description: "",
	url: "",
}

const Submit = (props) => {
  const {user} = React.useContext(userContext);
	const {handleChange, handleSubmit, values} = useForm(INITIAL_STATE, validateCreateLink, handleCreateLink);

	function handleCreateLink() {
		if(!user) {
			props.history.push('/login');
		} else {
			const {url, description} = values;
			const newLink = {
				url, 
				description,
				postedBy: {
					id: user.uid,
					name: user.displayName,
				},
				voteCount: 1,
				votes: [],
				created: Date.now(),
			};
			firebase.db.collection('links').add(newLink);
			props.history.push('/');
		}
	}

  return(
	<IonPage>
	  <SmallHeader title='Submit' />
	  <IonContent fullscreen>
	  	<LargeHeader title='Submit' />
			<IonItem lines='full'>
				<IonLabel position='floating'>Description</IonLabel>
				<IonInput 
					name='description'
					type='text'
					value={values.description}
					onIonChange={handleChange}
					required
				></IonInput>
			</IonItem>
			<IonItem lines='full'>
				<IonLabel position='floating'>URL</IonLabel>
				<IonInput 
					name='url'
					type='url'
					value={values.url}
					onIonChange={handleChange}
					required
				></IonInput>
			</IonItem>
			<IonRow>
				<IonCol>
					<IonButton
						expand='block'
						color='primary'
						type='submit'
						onClick={handleSubmit}
					>
						Submit
					</IonButton>
				</IonCol>
			</IonRow>
	  </IonContent>
	</IonPage>
  )
}

export default Submit;