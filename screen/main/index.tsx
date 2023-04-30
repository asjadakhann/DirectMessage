import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import {
  Button,
  Dimensions,
  Image,
  InputAccessoryView,
  Keyboard,
  Linking,
  Platform,

  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Appearance ,
  View,
} from 'react-native';
import Share, { Social } from 'react-native-share';




function Main ({}){
  
  const [message, setMessage] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const screenHeight = Dimensions.get('window').height;
  // const shareWhatsapp = () =>{  
  //   Linking.openURL(`whatsapp://send?phone=${number}&text=${message}`);
  //   }
  const options={
    url: message,
    social: Share.Social.MESSENGER,
  }
 
  const shareOther = () =>{

    Share.open(options)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    err && console.log(err);
  });
  }
    const openWhatsApp = () => {
      const apiEndpoint = 'https://wa.me/';
      const url = `${apiEndpoint}${number}?text=${message}`;
      Linking.openURL(url);
    };
    const shareEmail = () =>{  
      Linking.openURL(`mailto:${email}?body=${message}`);
      }
      const shareInstagram = async () =>{  

      // Instagram deep link with username
      const deepLink = `instagram://sharesheet?text=${message}`;
    
      // Check if Instagram app is installed
      const canOpen = await Linking.openURL(deepLink);
      if (canOpen) {
        // Open Instagram app
        await Linking.openURL(deepLink);
      } else {
        // Redirect to Instagram website in browser
        const instagramUrl = Platform.OS === 'ios' ? 'http://instagram.com/' : 'https://www.instagram.com/';
        await Linking.openURL(instagramUrl);
      }
        };
       
  return (
    <>
    
    
    <ScrollView style={{marginTop:0, flex:1, backgroundColor:'#FFFFFF'}}>
    
      <Text
            style={{fontSize: 15, marginLeft: 20, marginTop: 80, color: '#757575', fontWeight:'bold'}}>
            Phone No
          </Text>
      <TextInput style={styles.input}
      inputAccessoryViewID="Done"
      autoCapitalize="none"
      autoCorrect={false}
      onChangeText={(text) => setNumber(text)}
      value={number}
      placeholder={"+923XXXXXXXXX"}
      placeholderTextColor='#B2B2B2'
      >
        </TextInput>
         <Text
            style={{fontSize: 15, marginLeft: 20, marginTop: 30, color: '#757575', fontWeight:'bold'}}>
            Email
          </Text>
      <TextInput style={styles.input}
      inputAccessoryViewID="Done"
      autoCapitalize="none"
      autoCorrect={false}
      onChangeText={(text) => setEmail(text)}
      value={email}
      placeholder={"you@gmail.com"}
      placeholderTextColor='#B2B2B2'
      >


      </TextInput>
      <Text
            style={{fontSize: 15, marginLeft: 20, marginTop: 30, color: '#757575', fontWeight:'bold'}}>
            Message
          </Text>
      <TextInput
            style={[styles.input, {height: screenHeight/3}]}
            multiline={true}
            onChangeText={(text) => setMessage(text)}
            value={message}
            // placeholderTextColor = {'#ececec'}
            // returnKeyType={'done'}
            // placeholder="Enter Phone"
            // keyboardType='number-pad'
            autoCapitalize="none"
            autoCorrect={false}
            numberOfLines={20}
            textAlignVertical="top"
            inputAccessoryViewID="Done"
          />
           <View
                style={{
                  marginLeft: 15,
                  marginTop: 20,
                  marginRight: 15,
                  alignSelf:'center',
                }}>
                <TouchableOpacity
                onPress={openWhatsApp}
                  style={{
                    width:300,
                    backgroundColor: '#FFFFFF',
                    
                    shadowOpacity: 0.1,
                    borderRadius: 15,
                    shadowRadius: 15,
                    elevation: 5,
                  }}>
                  <View
                    style={{
                      height: 50,
                     
                      flexDirection: 'row',
                      alignItems: 'center',
                     
                    }}>
                    <Image
                      style={{
                        width: 35,
                        height: 35,
                        marginLeft: 15,
                        backgroundColor: '#FFFFFF',
                        alignItems: 'flex-start',
                        
                      }}
                      source={require('../../assets/icon/whatsapp.png')}></Image>
                    <View
                      style={{
                        flex:1,
                        
                        alignItems:'center'
                      }}>
                      <View>
                        <Text
                          style={{
                            fontSize: 15,
                            // marginLeft: 15,
                            color:'#757575',
                          }}>
                         Send to WhatsApp
                        </Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  marginLeft: 15,
                  marginTop: 20,
                  marginRight: 15,
                  alignSelf:'center',
                }}>
                <TouchableOpacity
                onPress={shareEmail}
                  style={{
                    width:300,
                    backgroundColor: '#FFFFFF',
                    
                    shadowOpacity: 0.1,
                    borderRadius: 15,
                    shadowRadius: 15,
                    elevation: 5,
                  }}>
                  <View
                    style={{
                      height: 50,
                     
                      flexDirection: 'row',
                      alignItems: 'center',
                     
                    }}>
                    <Image
                      style={{
                        width: 35,
                        height: 35,
                        marginLeft: 15,
                        backgroundColor: '#FFFFFF',
                        alignItems: 'flex-start',
                        
                      }}
                      source={require('../../assets/icon/mail.png')}></Image>
                    <View
                      style={{
                        flex:1,
                        
                        alignItems:'center'
                      }}>
                      <View>
                        <Text
                          style={{
                            fontSize: 15,
                            // marginLeft: 15,
                            color:'#757575',
                          }}>
                         Send to Email
                        </Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  marginLeft: 15,
                  marginTop: 20,
                  marginRight: 15,
                  alignSelf:'center',
                }}>
                <TouchableOpacity
                onPress={shareInstagram}
                  style={{
                    width:300,
                    backgroundColor: '#FFFFFF',
                    
                    shadowOpacity: 0.1,
                    borderRadius: 15,
                    shadowRadius: 15,
                    elevation: 5,
                  }}>
                  <View
                    style={{
                      height: 50,
                     
                      flexDirection: 'row',
                      alignItems: 'center',
                     
                    }}>
                    <Image
                      style={{
                        width: 35,
                        height: 35,
                        marginLeft: 15,
                        backgroundColor: '#FFFFFF',
                        alignItems: 'flex-start',
                        
                      }}
                      source={require('../../assets/icon/instagram.png')}></Image>
                    <View
                      style={{
                        flex:1,
                        
                        alignItems:'center'
                      }}>
                      <View>
                        <Text
                          style={{
                            fontSize: 15,
                            // marginLeft: 15,
                            color:'#757575',
                          }}>
                         Send to Instagram
                        </Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  marginLeft: 15,
                  marginTop: 20,
                  marginRight: 15,
                  alignSelf:'center',
                  marginBottom:50,
                }}>
                <TouchableOpacity
                onPress={shareOther}
                  style={{
                    width:300,
                    backgroundColor: '#FFFFFF',
                    
                    shadowOpacity: 0.1,
                    borderRadius: 15,
                    shadowRadius: 15,
                    elevation: 5,
                  }}>
                  <View
                    style={{
                      height: 50,
                     
                      flexDirection: 'row',
                      alignItems: 'center',
                     
                    }}>
                    <Image
                      style={{
                        width: 30,
                        height: 30,
                        marginLeft: 15,
                        backgroundColor: '#FFFFFF',
                        alignItems: 'flex-start',
                        
                      }}
                      source={require('../../assets/icon/more.png')}></Image>
                    <View
                      style={{
                        flex:1,
                        
                        alignItems:'center'
                      }}>
                      <View>
                        <Text
                          style={{
                            fontSize: 15,
                            // marginLeft: 15,
                            color:'#757575',
                          }}>
                         Send to Others
                        </Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
              {Platform.OS == 'ios' &&
      <InputAccessoryView nativeID="Done">
          
          <View style={styles.accessory}>
            <Button
              onPress={() =>{ Keyboard.dismiss()}}
              title="Done"
            
            />
        
          </View>
          </InputAccessoryView>
}
    </ScrollView>
    </>
  )
};

const styles = StyleSheet.create({
  input: {
    textAlignVertical:'center',
    color:'#000000',
    fontSize:15,
    marginTop:10,
    marginLeft:20,
    marginRight:20,
    borderColor: '#E8E8E8',
    borderWidth: 0.17,
    borderRadius: 5,
    padding: 10,
    shadowColor: '#000000',
    shadowOpacity: 0.5,
    backgroundColor:'#ffffff',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 1,
    elevation: 2,
    

  },
  accessory: {
    width: Dimensions.get('window').width,
    height: 48,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    paddingHorizontal: 8
  },
});

export default Main;
