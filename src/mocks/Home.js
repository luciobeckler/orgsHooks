//Mocks utilizados na tela Home

//Imagens comuns
import logo from '../../assets/images/logo.png'
import estrela from '../../assets/images/estrela.png'
import estrelaCinza from '../../assets/images/estrelaCinza.png'

//Imagens específicas
import green from '../../assets/images/produtores/green.png'
import grow from '../../assets/images/produtores/grow.png'
import jennyJack from '../../assets/images/produtores/jennyJack.png'
import potager from '../../assets/images/produtores/potager.png'
import salad from '../../assets/images/produtores/salad.png'

const numeroAleatorio = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const Home = {
    topo: {
        imagem: logo,
        titulo: "Olá Lúcio!",
        descricao: "Encontre os melhores produtos"
    },
    produtores: {
        titulo: "Produtores",
        lista: [
            {
                nome: 'Green',
                imagem: green,
                distancia: `${numeroAleatorio(1, 500)}m`,
                estrela: numeroAleatorio(1, 5)
            },
            {
                nome: 'Grow',
                imagem: grow,
                distancia: `${numeroAleatorio(1, 500)}m`,
                estrela: numeroAleatorio(1, 5)
            },
            {
                nome: 'Jenny-Jack',
                imagem: jennyJack,
                distancia: `${numeroAleatorio(1, 500)}m`,
                estrela: numeroAleatorio(1, 5)
            },
            {
                nome: 'Potager',
                imagem: potager,
                distancia: `${numeroAleatorio(1, 500)}m`,
                estrela: numeroAleatorio(1, 5)
            },
            {
                nome: 'Salad',
                imagem: salad,
                distancia: `${numeroAleatorio(1, 500)}m`,
                estrela: numeroAleatorio(1, 5)
            }
        ]
    }
}

export default Home