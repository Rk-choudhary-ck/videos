import React, { Component } from 'react';
import {
    Alert,
    BackHandler,
    SafeAreaView,
    StyleSheet,
    ScrollView,
    ActivityIndicator,
    View,
    Text,
    Image,
    StatusBar,
    Dimensions,
    Button,
    TouchableOpacity,
    TextInput,
  PermissionsAndroid,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { colors, fonts, fontSize, ScreenWidth } from './../config';
import { styles } from './../styles';
import { sendRequest } from './../functions';

export default class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fluidSizeIndex: 0,
        }
    }

   
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: colors.screenColor }}>
                <View style={[styles.header]}>
                    <Image source={require('./../../assets/images/logo.png')} style={{ width: 40, height: 40 }} />
                    <View style={{flex:1, justifyContent: 'center' }}>
                        <Text style={[styles.headerTitle, {textAlign:'center'}]}>AAP TAK News</Text>
                    </View>
                </View>
               
                <ScrollView>
                             <View style={{ flexDirection: 'row', margin:10}}>

                               
                                
                             </View>
                             
                    </ScrollView>
                   
               
            </View>
        );
    }
}



