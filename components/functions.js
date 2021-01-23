import { Alert, Linking } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { colors } from 'react-native-elements';
// import Snackbar from 'react-native-snackbar';
import { ajaxurl, colors, fonts, Google_Api, Firebase_Api } from './config';
// import RNFetchBlob from 'rn-fetch-blob';

var errorCount = 0;
const sendRequest = (request, callback) => {
    url = Object.keys(request).map(function (k) {
        return encodeURIComponent(k) + '=' + encodeURIComponent(request[k])
    }).join('&');
    console.log("========URL=========\n", ajaxurl + "?" + url);
    fetch(ajaxurl,
        {
            method: 'POST',
            headers:
            {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(request)
        }).then((response) => response.json()).then((result) => {

            console.log(result);
            if (typeof result == "object")
                callback(result);
            else {
                Alert.alert("Something Went Wrong");
            }
        }).catch((error) => {
            console.log("========ERROR=========\n", error);
            setTimeout(() => {
                if (errorCount == 3) {
                    errorCount = 0;
                    Alert.alert(
                        "Network Error",
                        // JSON.stringify(request) + "\n" + error,
                        error + "\n" +
                        "Please check Internet Connection and try again!",
                        [{
                            text: "Retry",
                            onPress: () => sendRequest(request, callback),
                        }, {
                            text: "Cancel",
                            style: "cancel"
                        }],
                        { cancelable: false }
                    );
                } else {
                    sendRequest(request, callback);
                }
                errorCount++;
            }, 500);
        });
}


const sendRequestImg = (request, images, callback) => {
    url = Object.keys(request).map(function (k) {
        return encodeURIComponent(k) + '=' + encodeURIComponent(request[k])
    }).join('&');

    var sendData = [];
    Object.keys(request).forEach((val, key) => {
        if (val != null)
            sendData.push({ name: val, data: request[val].toString() })
    });


    // alert(Object.keys(images).length);
    // console.log("Images======>>>\n\n",Object.values(images));

    if (Object.keys(images).length > 0) {
        images.forEach((val, key) => {
            if (val != null)
                sendData.push(val);
        });
    }

    console.log("========URLSK=========\n", ajaxurl + "?" + url);
    RNFetchBlob.fetch('POST', ajaxurl, {
        'Content-Type': 'multipart/form-data',
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
        sendData
    ).then((response) => response.json()).then((result) => {
        console.log("========RESULT=========\n");
        console.log(result);
        if (typeof result == "object")
            callback(result);
        else {
            Alert.alert("Something Went Wrong");
        }
    }).catch((error) => {
        console.log("========ERROR=========\n", error);
        setTimeout(() => {
            if (errorCount == 3) {
                errorCount = 0;
                Alert.alert(
                    "Network Error",
                    // JSON.stringify(request) + "\n" + error,
                    error + "\n" +
                    "Please check Internet Connection and try again!",
                    [{
                        text: "Retry",
                        onPress: () => sendRequestImg(request, callback),
                    }, {
                        text: "Cancel",
                        style: "cancel"
                    }],
                    { cancelable: false }
                );
            } else {
                console.log("Image Save Request Error");
                // sendRequestImg(request, callback);
            }
            errorCount++;
        }, 500);
    });
}


/*Email Validation*/
const validateEmail = (email) => {
    const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return expression.test(String(email).toLowerCase())
}
/********/

const sendPushNotification = async (tokens, props) => {
    const FIREBASE_API_KEY = Firebase_Api
    const message = {
        registration_ids: tokens,
        notification: {
            title: props.title,
            body: props.body,
            vibrate: 1,
            sound: 1,
            show_in_foreground: true,
            priority: "high",
            content_available: true,
        },
    }

    let headers = new Headers({
        "Content-Type": "application/json",
        Authorization: "key=" + FIREBASE_API_KEY,
    })

    let response = await fetch("https://fcm.googleapis.com/fcm/send", {
        method: "POST",
        headers,
        body: JSON.stringify(message),
    })
    response = await response.json()
    console.log(response)
}
export {
    sendRequest, validateEmail, sendPushNotification, sendRequestImg
}