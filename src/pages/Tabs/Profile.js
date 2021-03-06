import React from 'react';
import { 
	IonPage, 
	IonContent,
	IonRow,
	IonItem,
	IonButton,
	IonIcon,
	IonLabel,
	IonGrid,
	IonList,
	IonCard,
	IonCardContent,
	IonCol,
} from '@ionic/react';
import SmallHeader from '../../components/Header/SmallHeader.js';
import LargeHeader from '../../components/Header/LargeHeader.js';
import { toast } from '../../helpers/toast';
import firebase from '../../firebase';
import userContext from '../../contexts/userContext';
import {
	personCircleOutline,
	mailOutline, 
} from 'ionicons/icons';

const Profile = (props) => {
  const {user} = React.useContext(userContext);

  async function logoutUser() {
  	try{
			await firebase.logout();
			props.history.push('/');
			toast("You have logged out successfully.");
  	} catch(err) {
			console.error("Logout Error",err);
			toast(err.message);
  	}
  }

  return(
	<IonPage>
	  <SmallHeader title='Profile' />
	  <IonContent fullscreen>
	  	<LargeHeader title='Profile' />
	  	{user ? (
				<>
					<IonCard>
						<IonCardContent>
							<IonList list='none'>
								<IonItem>
									<IonIcon icon={personCircleOutline} slot='start'></IonIcon>
									<IonLabel>
										<strong>{user.displayName}</strong>
										<p>Username</p>
									</IonLabel>
								</IonItem>

								<IonItem>
									<IonIcon icon={mailOutline} slot='start'></IonIcon>
									<IonLabel>
										<strong>{user.email}</strong>
										<p>Email</p>
									</IonLabel>
								</IonItem>							
							</IonList>
						</IonCardContent>
					</IonCard>
					<IonRow>
						<IonCol>
							<IonButton expand='block' routerLink={'/edit-profile'} color='primary' fill='outline'>
								Edit Profile
							</IonButton>
						</IonCol>
					</IonRow>
					<IonRow>
						<IonCol>
							<IonButton expand='block' onClick={logoutUser}>
								Log Out
							</IonButton>
						</IonCol>
					</IonRow>
				</>
			) : (
				<IonGrid>
					<IonRow>
						<IonCol>
							<IonButton expand='block' routerLink={'/register'} color='primary'>
								Sign Up
							</IonButton>
						</IonCol>
					</IonRow>
					<IonRow>
						<IonCol>
							<IonButton expand='block' routerLink={'/login'} color='primary' fill='outline'>
								Log In
							</IonButton>
						</IonCol>
					</IonRow>
				</IonGrid>
			)}
	  </IonContent>
	</IonPage>
  );
};

export default Profile;