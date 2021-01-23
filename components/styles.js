import { StyleSheet, Dimensions } from 'react-native';
import { colors, fonts, fontSize, ScreenWidth } from './config';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.screenColor,
        fontFamily: fonts.SourceSansPro,
    },

    filerButton: {
        borderWidth: 1,
        padding: 12,
        borderRadius: 30
    },
    filerOrderButton: {
        borderWidth: 1,
        padding: 8,
        borderRadius: 30
    },
    newsCatBtn: {
        backgroundColor: colors.Red,
        alignItems: 'center'
    },
    newsCategory: {
        color: colors.White,
        fontSize: fontSize.l,
        padding: 10   
    },
    newsCategoryActive: {
        color: colors.Red,
        fontSize: fontSize.l,
        padding: 10   
    },
    newsCatBtnActive: {
        borderColor: colors.Red,
        borderWidth:1,
        fontSize: fontSize.m,
    },
    newsTitle: {
        // backgroundColor: colors.LightGray,
        marginHorizontal:5,
        borderRadius: 4,
        // shadowColor: colors.Gray,
        shadowOffset: {
            width: 1,
            height: 4,
        },
        // shadowOpacity: 0.8,
        // shadowRadius: 3.84,
        // elevation: 5,
        borderWidth: 1,
        borderColor: colors.LightGray,
        padding: 5,
        marginBottom:10
    },

    searchBtn: {
        paddingVertical: 8,
        paddingHorizontal: 12,
        justifyContent: 'center',
    },
    backBtn: {
        paddingHorizontal: 12,
        justifyContent: 'center',
    },
    icon: {
        marginHorizontal: 4,
        justifyContent: 'center',
    },
    formMsgStyle:{
        borderWidth: 1,
        borderColor: colors.Gray,
        borderRadius: 4,
        padding:4,
        fontSize:12,
        // borderWidth:1,
        fontWeight:'bold',
        textAlign:'center',
        borderColor:'red',
        color:'red'
    },
    inputContainer: {
        marginVertical: 8,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: colors.Gray,
        borderRadius: 4,
        alignItems: 'center'
    },
    inputIcon: {
        fontSize: fontSize.xl, color: colors.White, padding: 6,
    },

    input: {
        height: 40,
        borderColor: 'white',
        color: colors.White,
        borderWidth: 1,
        flex: 1,
        borderWidth: 0
    },
    inputBox: {
        marginVertical: 7,
        borderBottomWidth: 1,
        borderBottomColor: colors.Gray,
        borderRadius: 4,
        marginHorizontal:10
    },

    btnGroup: {
        flexDirection: 'row',
        justifyContent: 'center'
    },

    header: {
        flexDirection: 'row',
        padding: 2,
        borderBottomWidth: 1,
        borderBottomColor: colors.Black,
        textAlign: 'center',
        // backgroundColor: colors.OrangeDark
    },
    headerTitle: {
        fontFamily: fonts.SourceSansProBold,
        color: colors.Red,
        fontSize: fontSize.l,
        // padding: 4,
        // marginLeft: 30
    },
    buttonItem: {
        backgroundColor: colors.MixLight,
        padding: 12,
        borderWidth: 1,
        borderColor:colors.Gray,
        borderRadius: 4,
        marginHorizontal: 4,
        backgroundColor:colors.Primary
    },
    btnGroupItem: {
        flex: 1,
        backgroundColor: colors.Primary,
        marginHorizontal: 4,
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 4,
        paddingHorizontal: 8,
        paddingVertical: 12,
        textAlign: 'center',
    },
    btnContainer: {
        marginVertical: 8,
    },
    btnIcon: {
        marginHorizontal: 8,
        color: colors.Light,
    },
    btnText: {
        fontFamily: fonts.SourceSansPro,
        fontSize: fontSize.l,
        textAlignVertical: 'center',
        textAlign: 'center',
        color: colors.Light,
        letterSpacing: 1,
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
    btnPrimary: {
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 4,
        backgroundColor: colors.Primary,
        paddingHorizontal: 8,
        paddingVertical: 12,
        textAlign: 'center',
    },
    btnTransparent: {
        flex: 1,
        paddingVertical: 6,
    },
    btnTransparentText: {
        fontFamily: fonts.SourceSansPro,
        fontSize: fontSize.m,
        color: colors.Gray
    },

    h1: {
        fontFamily: fonts.SourceSansProBold,
        fontSize: fontSize.xl,
        textAlign: 'center',
        marginVertical: 8,
    },

    profileEditBox: {
        position: 'absolute',
        width: '100%',
        height:'100%',
        justifyContent: 'center',
        backgroundColor: '#00000088'
    },

    /*Shop Screen*/
    shopBox: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        paddingVertical: 4,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#00000088'
    },
    shopBoxSticky: {
        flex: 1,
        paddingVertical: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    shopName: {
        fontFamily: fonts.SourceSansProBold,
        color: colors.Light,
        fontSize: fontSize.l
    },
    shopLocation: {
        fontFamily: fonts.SourceSansPro,
        color: colors.Light,
        fontSize: fontSize.m
    },
    detailBox: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'space-between'
    },
    detailBoxText: {
        textAlignVertical: 'center',
        color: colors.Dark,
        fontFamily:
            fonts.SourceSansProBold,
        fontSize: fontSize.l
    },
    detailBoxSubText: {
        color: colors.Gray,
        fontFamily:
            fonts.SourceSansPro,
        fontSize: fontSize.m,
        letterSpacing: 1,
    },

    filterItem: {
        flexDirection: 'row',
        backgroundColor: colors.Light,
        alignSelf: 'flex-start',
        paddingHorizontal: 8,
        paddingVertical: 8,
        marginHorizontal: 2,
        borderColor: colors.Gray,
        borderWidth: 1,
        borderRadius: 4,
    },
    filterItemText: {
        fontFamily: fonts.SourceSansPro,
        fontSize: fontSize.m,
        color: colors.White,
        textAlignVertical: 'center',
    },
    filterItemClose: {
        fontSize: fontSize.xl,
        color: colors.Gray,
        paddingHorizontal: 4
    },

    detailsList: {
        // justifyContent:'space-between',
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: colors.Gray,
        borderBottomWidth: 1,
    },
    detailsListIcon: {
        minWidth: 20,
        marginRight: 12,
        color: colors.White,
        fontSize: fontSize.xl,
        textAlign: 'center',
        textAlignVertical: 'center',
        justifyContent: 'center'
    },
    detailsListText: {
        color: colors.Dark,
        fontFamily: fonts.SourceSansPro,
        color: colors.Primary,
        fontSize: fontSize.l,
        textAlignVertical: 'center',
    },

    listItem: {
        padding: 4,
        flexDirection: 'row',
    },

    listItemTextL: {
        fontFamily: fonts.SourceSansProBold,
        color: colors.Primary,
        fontSize: 18,
    },
    listItemTextM: {
        fontFamily: fonts.SourceSansPro,
        color: colors.Gray,
        fontWeight: '600',
        fontSize: 14,
    },
    listItemTextS: {
        fontFamily: fonts.SourceSansPro,
        color: colors.White,
        fontWeight: '600',
        fontSize: 12,
    },
    listItemTextSx: {
        fontFamily: fonts.SourceSansPro,
        color: colors.Gray,
        fontWeight: '600',
        fontSize: 10,
    },

    inputM: {
        fontFamily: fonts.SourceSansPro,
        color: colors.Dark,
        marginHorizontal: 4,
        fontSize: 14,
    },

    slideImage: {
        width: (ScreenWidth / 4),
        height: (ScreenWidth / 4),
    },

    // edit profile
    profileImg: {
        width: 100,
        height: 100,
        borderRadius: 150 / 2,
        overflow: "hidden",
        borderWidth: 1,
        borderColor: "red"
    },
    //settings page
    inputStyle: {
        fontSize: 20,
        color: colors.Gray,
        marginTop: 10,

    },
    boxSetting: {
        marginVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: colors.Gray,
        borderRadius: 4,
        flexDirection:'row',
        
    },

    PriceList: {
        paddingHorizontal: 12,
        paddingVertical:8,
    },

    PriceListText: {
        color: colors.Dark,
        fontFamily: fonts.SourceSansPro,
        color: colors.Primary,
        fontSize: fontSize.m,
        flex: 1,
    },
});
export { styles }