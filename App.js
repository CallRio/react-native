import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  View,
  Alert,
  TextInput,
  Dimensions,
  ImageBackground, 
  TouchableHighlight,
  Platform,
  Image,
} from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const image = {uri: 'https://cdn.pixabay.com/photo/2018/04/14/02/40/paper-3318159__340.jpg'};
const imlo = {uri:'https://d33wubrfki0l68.cloudfront.net/554c3b0e09cf167f0281fda839a5433f2040b349/ecfc9/img/header_logo.svg'} ;

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      usernameInputTxt: '',
      passwordInputTxt: '',
    };
  }
  
  _submit() {
    if (this.state.usernameInputTxt == '') {
      Alert.alert('Failed', 'Username is required'),[
        {text: 'Okay'},
      ];
      return;
    }
    if (this.state.passwordInputTxt == '') {
      Alert.alert('Failed', 'Password is required'),[
        {text: 'Okay'},
      ];
      return;
    }
    Alert.alert('Success', 'Logged in successfully'),[
      {text: 'Okay'},
    ];
  }

  render() {
    return (
      <View style={styles.container}>
          <ImageBackground source={image} style={styles.imbk}>
            <View style={{height: deviceHeight, width: deviceWidth, alignItems: 'center', justifyContent: 'center'}}>
            
            <Text style={styles.head}>Welcome to My World</Text>
              <View style={styles.imageContainer}>
                <Image
                  resizeMode="contain"
                  source={imlo}
                  style={styles.image}
                />
              </View>

              <View style={styles.formContainer}>
                <TextInput
                  style={styles.textInputStyle}
                  placeholder="Username"
                  returnKeyType= {'next'}
                  autoCapitalize= "none"
                  autoCorrect= {false}
                  onSubmitEditing={(event) => {
                    this.refs.passwordTextInputRef.focus();
                  }}
                  onChangeText={(usernameInputTxt) => this.setState({usernameInputTxt})}
                  value={this.state.usernameInputTxt}
                />

                <View style={styles.textInputBottomLine} />

                <TextInput
                  ref="passwordTextInputRef"
                  style={[styles.textInputStyle, {marginTop: 10}]}
                  placeholder="Password"
                  returnKeyType= "go"
                  autoCapitalize= "none"
                  secureTextEntry= {true}
                  autoCorrect={false}
                  onChangeText={(passwordInputTxt) => this.setState({passwordInputTxt})}
                  value={this.state.passwordInputTxt}
                  onSubmitEditing={(event) => {
                    this._submit();
                  }}
                />

                <View style={styles.textInputBottomLine} />

                <TouchableHighlight style={styles.button}
                  underlayColor="transparent"
                  onPress={() => this._submit()}
                >
                  <Text style={styles.buttonText}>Login</Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.buttonSignup}
                  underlayColor={'transparent'}
                  onPress={() => {
                    Alert.alert('Info', 'Forgot password clicked'),[
                      {text: 'Okay'},
                    ];
                  }}
                >
                  <Text style={[styles.buttonTextSignup, {color: '#6D6E70'}]}>Forgot Password?</Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.buttonSignup}
                  underlayColor={'transparent'}
                  onPress={() => {
                    Alert.alert('Info', 'Don\'t have account clicked'),[
                      {text: 'Okay'},
                    ];
                  }}
                >
                  <Text style={[styles.buttonTextSignup, {color: '#6D6E70'}]}>Don't have account? Click here</Text>
                </TouchableHighlight>

               

              </View>
            </View>
          </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '',
  },
  head:{
    fontSize:'200',
    color:'red',
    marginTop:'12012',
  },
  imbk:{
    height:'10',
    flex:1,
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 120,
    marginTop: 30,
  },
  formContainer: {
    marginTop: 30,
    paddingHorizontal: 30,
  },
  textInputStyle: {
    height: 40,
    fontSize: 16,
    paddingLeft:5,
    color: 'black',
  },
  textInputBottomLine: {
    height: 1,
    backgroundColor: (Platform.OS == 'ios') ? '#E6E7E9': 'transparent',
  },
  button: {
    height: 40,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#057DC1',

  },
  buttonText: {
    fontSize: 17,
    color: '#057DC1',
    fontWeight: 'bold',
  },
  buttonSignup: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  buttonTextSignup: {
    fontSize: 12,
  },
  viewTextRights: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 75,
  },
  textRights: {
    fontSize: 10,
    color: '#A3BF3A',
  },
});
