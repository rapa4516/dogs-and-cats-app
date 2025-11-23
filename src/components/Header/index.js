import { Image } from "react-native";
import { Container } from './styles';

import icon from '../../assets/images/icon.png';

export default function Header(){
    return (  
        <Container>
            <Image source={icon} style={{
            width: 110,
            height: 110,
            alignSelf: 'center', 
            marginTop: 3,       
            marginBottom: 15,   
            }} />
        </Container>
    );
}