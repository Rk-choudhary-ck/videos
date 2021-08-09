import React, {Component} from 'react';
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
  Linking,
  ImageBackground,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {colors, fonts, fontSize, ScreenWidth} from './../config';
import {styles} from './../styles';
import {sendRequest} from './../functions';

import VideoPlayer from 'react-native-video-player';

import {SliderBox} from 'react-native-image-slider-box';

const vidvvveo = require('../../assets/images/myvideo.webm');

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      category: [],
      isCatDataShow: true,
      dataLoader: false,
      catLoader: true,
      activeCat: null,
      fluidSizeIndex: 0,
      images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlh8F0_by1feDt-wwiRFzgVJuzDDxIacTkzw&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGYtPz4gyUsqrWYuicRxITOTDru4I1tO2xIw&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY3ceuBse_GlIaZDvzQJ6H-eum8u4lVW4hww&usqp=CAU',
      ],
    };
  }

  render() {
    return (
      <ImageBackground
        style={[styles.container, {flex: 1}]}
        source={require('../../assets/images/back.png')}
        resizeMode="cover">
        {/* <View style={{ backgroundColor: colors.screenColor}}> */}
        <View style={[styles.header]}>
          <Image
            source={require('./../../assets/images/logo.png')}
            style={{width: 40, height: 40}}
          />
          <View style={{flex: 1, justifyContent: 'center'}}>
            <Text style={[styles.headerTitle, {textAlign: 'center'}]}>
              JAI MAA AMBAY
            </Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row' }}>
        
          
          <ScrollView horizontal>
            <TouchableOpacity style={styles.btnhead}>
              <Text style={{color: colors.White}}>ALL</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnhead}>
              <Text style={{color: colors.White}}>Latest</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnhead}>
              <Text style={{color: colors.White}}>Favourite</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnhead}>
              <Text style={{color: colors.White}}>Trending</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnhead}>
              <Text style={{color: colors.White}}>Slow Motion</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnhead}>
              <Text style={{color: colors.White}}>More</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        <ScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
          
          <View style={{marginTop:5}}>
          <SliderBox
            images={this.state.images}
              onCurrentImagePressed={index =>
                console.warn(`image ${index} pressed`)
              }
            />
            </View>
          
          <View style={{flex: 1, padding:7}}>
            <VideoPlayer
              video={{
                uri:
                  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
              }}
              // disableControlsAutoHide={true}
              // disableFullscreen={true}
              thumbnail={{ uri: 'https://i.ytimg.com/vi/PIs2KOfh1XU/hqdefault.jpg' }}
              style={styles.imgclass}
            />
            <VideoPlayer
              video={{
                uri:
                  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
              }}
              thumbnail={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkpqOKPTc8330A1VqFlNW619x8uycklCbDsA&usqp=CAU' }}
              style={styles.imgclass}
            />
            <VideoPlayer
              video={{
                uri:
                  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
              }}
              thumbnail={{ uri: 'https://imgk.timesnownews.com/story/Bholenath_0.jpg?tr=w-400,h-300,fo-auto' }}
              style={styles.imgclass}
            />
            <VideoPlayer
              video={{
                uri:
                  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
              }}
              thumbnail={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlh8F0_by1feDt-wwiRFzgVJuzDDxIacTkzw&usqp=CAU' }}
              style={styles.imgclass}
            />
            <VideoPlayer
              video={{
                uri:
                  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
              }}
              thumbnail={{ uri: 'https://i.ytimg.com/vi/PIs2KOfh1XU/hqdefault.jpg' }}
              style={styles.imgclass}
            />
           
           
          </View>
        </ScrollView>
        {/* </View> */}
      </ImageBackground>
    );
  }
}
