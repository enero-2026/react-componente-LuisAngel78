import { StyleSheet, View, ScrollView, SafeAreaView } from 'react-native';
import Alumno from './Alumno';

export default function App() {
  const alumnos = [
  {
    nombre: 'CANDELARIA MORA SAMANTHA',
    matricula: '2114354',
    foto: require('./assets/fotos/sam.jpeg')
  },
  {
    nombre: 'CANTU SILVA JAVIER',
    matricula: '2111889',
    foto: require('./assets/fotos/javier.jpeg')
  },
  {
    nombre: 'CARMONA LOZANO ANGEL EMILIANO',
    matricula: '2069119',
    foto: require('./assets/fotos/Angel.jpeg')
  },
  {
    nombre: 'CASTILLO ACOSTA JORGE',
    matricula: '2132842',
    foto: require('./assets/fotos/Jorge.jpeg')
  },
  {
    nombre: 'DAVILA GONZALEZ ALDO ADRIAN',
    matricula: '1994122',
    foto: require('./assets/fotos/aldo.jpeg')
  },
  {
    nombre: 'DURAN BARRIENTOS FABRIZIO',
    matricula: '2018230',
    foto: require('./assets/fotos/fabrizio.jpeg')
  },
  {
    nombre: 'FLORES GONZALEZ SEBASTIAN',
    matricula: '2104564',
    foto: require('./assets/fotos/seb.jpeg')
  },
  {
    nombre: 'FLORES LÓPEZ DIEGO',
    matricula: '2066033',
    foto: require('./assets/fotos/diego.jpeg')
  },
  {
    nombre: 'FLORES MARTINEZ ERICK ADRIAN',
    matricula: '2132976',
    foto: require('./assets/fotos/Eric.jpeg')
  },
  {
    nombre: 'GARZA AVALOS DIEGO',
    matricula: '2066114',
    foto: require('./assets/fotos/DGarza.jpeg')
  },
  {
    nombre: 'GONZALEZ OVALLE CHRISTIAN GABRIEL',
    matricula: '2031243',
    foto: require('./assets/fotos/ovalle.jpeg')
  },
  {
    nombre: 'GRANJA PEÑA DIEGO',
    matricula: '2064733',
    foto: require('./assets/fotos/granja.jpeg')
  },
  {
    nombre: 'IBARRA RODRIGUEZ ALEXIS',
    matricula: '2031243',
    foto: require('./assets/fotos/alexis.jpeg')
  },
  {
    nombre: 'MARTINEZ ELIAS ANGEL SEBASTIAN',
    matricula: '2064733',
    foto: require('./assets/fotos/angelseb.jpeg')
  },
  {
    nombre: 'MENDIETA GONZALEZ ESMERALDA GABRIELA',
    matricula: '2094647',
    foto: require('./assets/fotos/Esme.jpeg')
  },
  {
    nombre: 'MIRELES VELAZQUEZ ALEJANDRO',
    matricula: '2005102',
    foto: require('./assets/fotos/alejandro.jpeg')
  },
  {
    nombre: 'MONSIVAIS SALAZAR ANDRES',
    matricula: '2064574',
    foto: require('./assets/fotos/monsivais.jpeg')
  },
  {
    nombre: 'PARRAZALEZ VALDESPINO MARTHA JULIETA',
    matricula: '2024783',
    foto: require('./assets/fotos/juli.jpeg')
  },
  {
    nombre: 'PEÑA MUNGARRO LUIS ANGEL',
    matricula: '2066077',
    foto: require('./assets/fotos/luisangel.jpeg')
  },
  {
    nombre: 'PUENTE REYNOSO JULIO CESAR',
    matricula: '2092151',
    foto: require('./assets/fotos/julio.jpeg')
  },
  {
    nombre: 'RAMIREZ LOPEZ BRYAN',
    matricula: '2103708',
    foto: require('./assets/fotos/Bryan.jpeg')
  },
  {
    nombre: 'RAMOS AVILA LILIANA VALERIA',
    matricula: '2115192',
    foto: require('./assets/fotos/Lili.jpeg')
  },
  {
    nombre: 'RICO JAUREGUI MAURICIO',
    matricula: '2037503',
    foto: require('./assets/fotos/mAU.jpeg')
  },
  {
    nombre: 'RIVERA LUNA ADRIAN',
    matricula: '2131513',
    foto: require('./assets/fotos/adrian.jpeg')
  },
  {
    nombre: 'RIVERA REYNA JOSE EMILIO',
    matricula: '2013503',
    foto: require('./assets/fotos/JoseEmilio.jpeg')
  },
  {
    nombre: 'RODRIGUEZ OLVERA ROSA ISELA',
    matricula: '2004613',
    foto: require('./assets/fotos/rosa.jpeg')
  },
  {
    nombre: 'RODRIGUEZ RODRIGUEZ ANGEL AZAEL',
    matricula: '2133022',
    foto: require('./assets/fotos/Azael.jpeg')
  },
  {
    nombre: 'SANCHEZ GALARZA JUAN CARLOS',
    matricula: '2026061',
    foto: require('./assets/fotos/juan.jpeg')
  },
  {
    nombre: 'SOLIS ORTIZ ALFREDO',
    matricula: '2095320',
    foto: require('./assets/fotos/Alfredo.jpeg')
  },
  {
    nombre: 'VELAZQUEZ ABREGO HERWIN DANIEL',
    matricula: '2025350',
    foto: require('./assets/fotos/Erwin.jpeg')
  },
  {
    nombre: 'VILLAGRA RODRIGUEZ ANDRES NEHUEL',
    matricula: '2103895',
    foto: require('./assets/fotos/andresnehuel.jpeg')
  },
  {
    nombre: 'ZACATENCO OLIVE RODRIGO',
    matricula: '1857791',
    foto: require('./assets/fotos/rodrigo.jpeg')
  },
  {
    nombre: 'ZAVALA CANTU TERESA MARGARITA',
    matricula: '2025218',
    foto: require('./assets/fotos/Teressa.jpeg')
  }
];

  return (
    <SafeAreaView style={estilos.container}>
      <ScrollView contentContainerStyle={estilos.contenido}>
        {alumnos.map((alumno) => (
          <Alumno 
            key={alumno.matricula} 
            nombre={alumno.nombre} 
            matricula={alumno.matricula} 
            foto={alumno.foto} 
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contenido: {
    paddingVertical: 10,
    backgroundColor: '#780000' // Un tono distinto para el fondo del scroll
  }
});