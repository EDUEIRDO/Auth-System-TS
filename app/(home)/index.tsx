/*import React, { useEffect } from 'react';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { View, Button } from 'react-native';

export default function App() {
    const signIns = async () => {
        try{
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn({
                webClientId: `autoDetect`,
                
            });
            setState({userInfo});
        }
    }

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: `autoDetect`
    });
  }, []);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);
    } catch (error) {
      if (error instanceof Error && 'code' in error) {
        const errorCode = (error as any).code;
  
        if (errorCode === statusCodes.SIGN_IN_CANCELLED) {
          // O usuário cancelou o login
        } else if (errorCode === statusCodes.IN_PROGRESS) {
          // O login já está em progresso
        } else if (errorCode === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
          // Os serviços do Google Play não estão disponíveis ou desatualizados
        } else {
          // Outro tipo de erro
          console.error(errorCode);
        }
      } else {
        // Tratamento para outros tipos de erro
        console.error('Unexpected error', error);
      }
    }
  };
  
  return (
    <View>
      <Button title="Sign in with Google" onPress={signIn} />
    </View>
  );
}
*/

import * as Google from 'expo-auth-session/providers/google';
import AuthSession from 'expo-auth-session'
import * as WebBrowser from 'expo-web-browser';
import { useEffect } from 'react';
import { Button } from 'react-native';

WebBrowser.maybeCompleteAuthSession();

export default function App() {
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: '1026221959018-4b597brl5hm1ugu2qcru635joaena2ur.apps.googleusercontent.com',
    webClientId: '1026221959018-6ui5k9kpvnlq4bagqm7ok92mmio6prsm.apps.googleusercontent.com',
  });

  useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response;
    }
  }, [response]);

  return (
    <Button
      disabled={!request}
      title="Sign in with Google"
      onPress={() => {
        promptAsync();
      }}
    />
  );
}
