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
  

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            category: [],
            isCatDataShow:true,
            dataLoader: true,
            catLoader: true,
            activeCat: null,

            fluidSizeIndex: 0,
        }
    }

    componentDidMount() {
        setTimeout(() => { this.showRewarded() }, 10000);

        this.getAllNews();
        fetch('https://automoney.co.in/blogs/api/cat').then((response) => response.json()).then((result) => {
            if (result != '') {
                this.setState({ category: result });
            }
            this.setState({ catLoader: false });
        }).catch((error) => {
            console.error(error);
        });

// admob
        AdMobRewarded.setTestDevices([AdMobRewarded.simulatorId]);
        AdMobRewarded.setAdUnitID('ca-app-pub-3940256099942544/5224354917');
        // AdMobRewarded.setAdUnitID('ca-app-pub-3851567482115672/9192478051');
    
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

    getAllNews = () => {
        this.setState({ activeCat: null, dataLoader: true });
        fetch('https://automoney.co.in/blogs/api/allnews').then((response) => response.json()).then((result) => {
            // alert(JSON.stringify(result));
            if (result != '') {
                this.setState({ data: result, isCatDataShow : true  });
            } 
            this.setState({ dataLoader: false });
        }).catch((error) => {
            console.error(error);
        });
    }

    getNews = (value) => {
        this.setState({ activeCat: value, dataLoader: true  });
        console.log('https://automoney.co.in/blogs/api/news/'+value);
        fetch('https://automoney.co.in/blogs/api/news/'+value).then((response) => response.json()).then((result) => {
            if (result != '') {
                this.setState({ data: result, isCatDataShow : true });
            } else {
                this.setState({isCatDataShow : false})
            }
            this.setState({ dataLoader: false });
        }).catch((error) => {
            console.error(error);
        });
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
               
                <View style={{ flexDirection: 'row' }}>
                    <ScrollView horizontal>
                             <TouchableOpacity style={this.state.activeCat == null  ? [styles.newsCatBtnActive,{color:colors.Red}] : styles.newsCatBtn} onPress={() => { this.getAllNews() }} >
                                <Text style={this.state.activeCat == null  ? styles.newsCategoryActive : styles.newsCategory}>ALL</Text>
                            </TouchableOpacity>
                            {Object.values(this.state.category).map((v) => {
                                return <TouchableOpacity style={this.state.activeCat == v.id  ? [styles.newsCatBtnActive,{color:colors.Red}] : styles.newsCatBtn} onPress={() => { this.getNews( v.id ) }} >
                                <Text style={this.state.activeCat == v.id  ? styles.newsCategoryActive : styles.newsCategory}>{v.title}</Text>
                                </TouchableOpacity>
                            })}
                    </ScrollView>
                </View>

                <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
                {this.state.dataLoader
                    ?  <View style={{flex: 1, justifyContent: 'center' }}>
                            <ActivityIndicator size="large" color={colors.Red} />
                        </View> :
                    <View style={{flex:1}}>
                            {this.state.isCatDataShow == true ?
                                Object.values(this.state.data).map((v) => {
                                    return <TouchableOpacity onPress={() => { this.props.navigation.navigate("News", { newsDetail: v }) }}>
                                        <View style={{ flexDirection: 'row', margin: 10 }}>
                                            <Image source={v.image == null ? require('./../../assets/images/news.jpg') : { uri: v.image }} style={{ width: "100%", height: 200 }} />
                                        </View>
                                        <View style={styles.newsTitle}>
                                            <Text style={{ fontSize: fontSize.xl }}>{v.title}</Text>
                                            <Text style={{ fontSize: fontSize.l, marginVertical: 5, padding: 4 }} numberOfLines={2} ellipsizeMode="tail" >{v.description}</Text>
                                        </View>
                                    </TouchableOpacity>
                                })
                                : <Text style={{ fontFamily: fonts.SourceSansProBold, fontSize: fontSize.m, color: colors.Red, flex:1, textAlignVertical:'center',textAlign:'center' }}>News not Found</Text>
                            }

                    </View>
                }   
                
                    </ScrollView>
                   
               
            </View>
        );
    }
}





