import React from 'react';
import { View, Image, Text, TouchableOpacity, Linking } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import  * as MailComposer from 'expo-mail-composer';

import styles from './styles';
import logoImg from '../../assets/logo.png';

export default function Detail(){

    const navigation = useNavigation();
    const route = useRoute(); //utilizado para pegar informação da pagina atual
    const incident = route.params.incident;
    const message = `Ola ${incident.name}, caso ${incident.title}`;

    function navigationBack(){
        navigation.goBack();
    }
    
    function sendMail(){
        MailComposer.composeAsync({
            subject: `Héroi do caso: ${incident.title}`,
            recipients: [incident.email],
            body: message,
        })
    }
    
    function sendWhatsapp(){
        Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`);
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                
                <TouchableOpacity onPress={navigationBack}>
                    <Feather name="arrow-left" size={28} color="#E02041"/>
                </TouchableOpacity> 
            </View>   

            <View style={styles.incident}>
                <Text style={[styles.incidentProperty, {marginTop:0} ]}>ONG:</Text>
                <Text style={styles.incidentValue}>{incident.name} de { incident.city }/{incident.uf} </Text>
                
                <Text style={styles.incidentProperty}>CASO:</Text>
                <Text style={styles.incidentProperty}>{incident.title}</Text>
            
                <Text style={styles.incidentProperty}>VALOR:</Text>
                <Text style={styles.incidentValue}>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(incident.value)}</Text>

                <TouchableOpacity style={styles.detailsButton} onPress={() => navigationToDetail(incident)}>
                    <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                    <Feather name="arrow-right" size={16} color="#E02041"/>
                </TouchableOpacity>

                <View style={styles.contactBox}>
                    <Text style={styles.heroTitle}>Salve o dia </Text>
                    <Text style={styles.heroTitle}>Seja o herói desse caso. </Text>
                    <Text style={styles.heroDescription}>Entre em contato: </Text>

                    <View style={styles.actions}>
                        <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                            <Text style={styles.actionText}>WhatsApp</Text>
                        </TouchableOpacity> 
                        
                        <TouchableOpacity style={styles.action} onPress={sendMail}>
                            <Text style={styles.actionText}>E-mail</Text>
                        </TouchableOpacity> 
                    </View>
                </View>
            </View>
        </View>
    );
}