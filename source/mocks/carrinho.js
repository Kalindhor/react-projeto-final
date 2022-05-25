import topo from '../../assets/topo.png';
import logoVendedor from '../../assets/logo.png';
import antena2g from '../../assets/Itens/antena2g3g.png';
import antenawifi from '../../assets/Itens/antenaWifi.png';
import modem from '../../assets/Itens/modem.png';
import nodemcu from '../../assets/Itens/nodeMcu.png';
import pendrive from '../../../assets/Itens/pendrive.png';

const carrinho ={
    topo:{
        titulo:"Carrinhos",
        imagem:topo
    },
    detalhes:{
        titulo:"Detalhes do Carrinho",
        tituloProduto:"Kit IoT",
        descricao:"Um kit Iot que revoluciona a vida dos estudantes",
        logoVendedor:logoVendedor,
        nomeVendedor:"Nuvem's Shopping",
        preco:"R$ 99,00"
    },
    itemx:{
        list:[{
            nome:"Pendrive",
            imagem:pendrive,
        }]
    },
    itens:{
        titulo:"Itens do carrinho",
        lista:[
            {
                nome:"Antena 2G/3G",
                imagem: antena2g,
            },

            {
                nome:"Antena WiFi",
                imagem: antenawifi,
            },

            {
                nome:"Modem",
                imagem:modem,
            },

            {
                nome:"Node MCU",
                imagem:nodemcu,
            },
            {
                nome:"Pen Drive",
                imagem:pendrive,
            }

           
            
        ]
    }
}

export default carrinho;