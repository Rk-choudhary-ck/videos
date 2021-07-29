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

import { AdMobRewarded} from 'react-native-admob';

const BannerExample = ({ style, title, children, ...props }) => (
    <View {...props} style={[styles.example, style]}>
      <Text style={styles.title}>{title}</Text>
      <View>{children}</View>
    </View>
  );
  
  const bannerWidths = [200, 250, 320];

export default class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fluidSizeIndex: 0,
        }
       
      this.newsData = this.props.route.params.newsDetail;
    }

    componentDidMount() {
        setTimeout(() => { this.showRewarded() }, 5000);
       
      // AdMob
      AdMobRewarded.setTestDevices([AdMobRewarded.simulatorId]);
      AdMobRewarded.setAdUnitID('ca-app-pub-1918796407964963/6733737928');
      // AdMobRewarded.setAdUnitID('ca-app-pub-3940256099942544/5224354917');

      AdMobRewarded.addEventListener('rewarded', reward =>
        console.log('AdMobRewarded => rewarded', reward),
      );
      AdMobRewarded.addEventListener('adLoaded', () =>
        console.log('AdMobRewarded => adLoaded'),
      );
      AdMobRewarded.addEventListener('adFailedToLoad', error =>
        console.warn(error),
      );
      AdMobRewarded.addEventListener('adOpened', () =>
        console.log('AdMobRewarded => adOpened'),
      );
      AdMobRewarded.addEventListener('videoStarted', () =>
        console.log('AdMobRewarded => videoStarted'),
      );
      AdMobRewarded.addEventListener('adClosed', () => {
        console.log('AdMobRewarded => adClosed');
        AdMobRewarded.requestAd().catch(error => console.warn(error));
      });
      AdMobRewarded.addEventListener('adLeftApplication', () =>
        console.log('AdMobRewarded => adLeftApplication'),
      );
      AdMobRewarded.requestAd().catch(error => console.warn(error));
      }
    
      componentWillUnmount() {
        AdMobRewarded.removeAllListeners();
      }
    
      showRewarded() {
        AdMobRewarded.showAd().catch(error => console.warn(error));
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
                                {/* <Image source={this.newsData.image == null ? require('./../../assets/images/news.jpg') : { uri: this.newsData.image }} style={{width:"100%",height:200}}/> */}
                                <Image source={this.newsData.urlToImage == null ? require('./../../assets/images/news.jpg') : { uri: this.newsData.urlToImage }} style={{width:"100%",height:200}}/>
                             </View>
                             <View style={styles.newsTitle}>
                            <Text style={{ fontSize: fontSize.xl }}>{this.newsData.title } </Text>
                                 <Text style={{fontSize:fontSize.l,marginVertical:5, padding:4, textAlign:'justify'}}>{this.newsData.content }</Text>
                            </View>
                    </ScrollView>
                   
               
            </View>
        );
    }
}



