import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default function Alumno(props) {
  const [abierto, setAbierto] = useState(false);

  return (
    <View style={estilos.contenedor}>
      {/* 1. Eliminamos el objeto {uri: ...} para usar la imagen local correctamente */}
      <Image source={props.foto} style={estilos.foto} />
      
      <View style={estilos.info}>
        <Text style={estilos.nombre}>{props.nombre}</Text>
        
        {abierto && (
          <Text style={estilos.matricula}>Matrícula: {props.matricula}</Text>
        )}

        <Button 
          title={abierto ? "Cerrar detalles" : "Ver más datos"} 
          onPress={() => setAbierto(!abierto)} 
          color="#003049"
        />
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    flexDirection: 'row',
    backgroundColor: '#c1121f',
    padding: 15,
    margin: 10,
    borderRadius: 8,
    alignItems: 'center'
  },
  foto: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 15,
    borderWidth: 2,
    borderColor: '#fff',
    backgroundColor: '#333' // Esto te ayuda a ver el círculo mientras carga
  },
  info: {
    flex: 1
  },
  nombre: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  matricula: {
    color: '#fdf0d5',
    fontSize: 14,
    marginVertical: 5
  }
});