import React from 'react';
import {View, Text, Modal} from 'react-native';
import colors from '../../styles/colors';
import CircleButton from '../components/CircleButton'


const LoginModal = props => {
    return(
        <Modal
        animationType="slide"
        visible={props.modalVisible}   >
            <View   style={{flex:1,backgroundColor: colors.background,  justifyContent:'center'}}>
                <View style={{alignItems:'center', marginBottom:20}}>
                    <Text style={{fontSize:16, fontWeight:'bold'}}>
                        Selamat datang kembali !!!
                    </Text>
                </View>
                <CircleButton
                    title="Masuk dengan Facebook"
                    bcolor="#3b5998"
                    tcolor={colors.onPrimary}
                    onPress={props.onPress}
                />

                 <CircleButton
                    title="Masuk dengan Goole"
                    bcolor={colors.surface}
                    tcolor={colors.onSurface}
                    onPress={props.onPress}
                />
            </View>
        </Modal>

    );
};

export default LoginModal;