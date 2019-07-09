import React, { Component } from 'react'
import { View, Text } from 'react-native'
import axios from 'axios'

// const AlbumList = () => {
//     return (
//         <View>
//             <Text>Album List</Text>
//         </View>
//     );
// }; // sostituzione functional component to class component
class AlbumList extends Component {
  state = { albums: [] }
  //1mo step: stato vuoto
  //debugger, key per stoppare il codice e fare il debugging in automatico
  componentDidMount() {
    //axios sostitutisce la fetch, rendendola più facile da scrivere
    axios
      .get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }))
    //secondo step, passiamo l'oggetto all'array albums(response.data è il modo con cui chrome ci dà i dati)
    //this.setState -> setState è una funzione che è implementata automanticamente dalla classe Component -> funzione di aggiornare il component "ehi, ecco qui dei dati, prendili"
  }

  render() {
    console.log(this.state)
    return (
      <View>
        <Text>Album List</Text>
      </View>
    )
  }
}

export default AlbumList
