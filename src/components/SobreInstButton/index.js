import { Image, TouchableOpacity, ScrollView } from "react-native";
import CustomModal from "../CustomModal";
import { Text } from "../Text";
import { Header, Container } from "./styles";

import close from '../../assets/images/close.png';
import imagem from '../../assets/images/sobre.png';
export default function SobreInstButton ({visible, onClose, onSobreInst}){
    return(
        <CustomModal visible={visible} onClose={onSobreInst}>
            <Header>
                <Text weight="600" style={{ fontSize: 21}}>Sobre a instituicao</Text>

                <TouchableOpacity onPress={onClose} style={{ position: 'absolute', right: 0 }}>
                    <Image source={close} />
                </TouchableOpacity>

            </Header>

            <Container>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <Text style={{ fontSize: 14, lineHeight: 17, textAlign: 'justify', marginBottom: 16}}>
                    {"\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"}
                    Uma instituição é uma organização ou sistema de regras, normas e valores que estruturam o comportamento social, seja através de leis e constituições formais, seja por meio de costumes, tradições e costumes informais. Elas existem para satisfazer necessidades humanas, estruturar interações e processos de tomada de decisão, como família, escola, Estado e religião, e desempenham papéis cruciais na estabilização da sociedade e na forma como as pessoas interagem. 
                    </Text>
                    <Image source={imagem} style={{
                    width: 275,
                    height: 175,
                    borderRadius: 4,
                    alignSelf: "center",
                    marginBottom: 16,
                    }}/>
                </ScrollView>
            </Container>

        </CustomModal>
    );
}