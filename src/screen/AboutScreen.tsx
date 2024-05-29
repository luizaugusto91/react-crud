import { StatusBar } from "expo-status-bar";
import { View, Text, Image, StyleSheet, ImageBackground } from "react-native";
import UserImage from '../..//assets/img/augusto.jpg';
import BackgroundImage from '../..//assets/background/back.jpg';


export default function AboutScreen({ navigation }: any) {
    return (
        <View style={styles.page}>
            <ImageBackground resizeMode="stretch" source={BackgroundImage} style={styles.background}>
                <View style={styles.container}>
                    <Image
                        source={UserImage} // Substitua pela URL da imagem do usuário
                        style={styles.profileImage}
                    />
                    <Text style={styles.userInfo}><Text style={{fontWeight: 'bold'}}>Nome Completo:</Text> Luiz Augusto da Silva </Text>
                    <Text style={styles.userInfo}><Text style={{fontWeight: 'bold'}}>E-mail:</Text> luiz.augusto.91@hotmail.com</Text>
                    <Text style={styles.userInfo}><Text style={{fontWeight: 'bold'}}>Fone:</Text> (14) 988-043-570</Text>
                    <Text style={styles.userInfo}><Text style={{fontWeight: 'bold'}}>RA:</Text> 50769</Text>
                </View>
            </ImageBackground>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        //justifyContent: 'center',
        //justifyContent: 'center'alignItems: 'center',
    },
    background: {
        flex: 1,
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        // backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 20,
    },
    userInfo: {
        fontSize: 18,
        marginVertical: 5,
    },
});
