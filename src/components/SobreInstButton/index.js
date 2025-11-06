import { Image, TouchableOpacity } from "react-native";
import CustomModal from "../CustomModal";
import { Text } from "../Text";
import { Header, Container } from "./styles";

import close from '../../assets/images/close.png';

export default function SobreInstButton ({visible, onClose, onSobreInst}){
    return(
        <CustomModal visible={visible} onClose={onSobreInst}>
            <Header>
                <Text style={{textAlign: 'center'}}>Sobre a instituicao</Text>

                <TouchableOpacity onPress={onClose} style={{ position: 'absolute', right: 0 }}>
                    <Image source={close} />
                </TouchableOpacity>

            </Header>

            <Container>
                    <Text style={{ fontSize: 11, lineHeight: 14, textAlign: 'justify'}}>
                    {"\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"}
                    Uma instituição é uma organização ou sistema de regras, normas e valores que estruturam o comportamento social, seja através de leis e constituições formais, seja por meio de costumes, tradições e costumes informais. Elas existem para satisfazer necessidades humanas, estruturar interações e processos de tomada de decisão, como família, escola, Estado e religião, e desempenham papéis cruciais na estabilização da sociedade e na forma como as pessoas interagem. 
                    </Text>
                </Container>

        </CustomModal>
    );
}