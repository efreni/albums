import React, { Component } from 'react'
import { View, Text } from 'react-native'
import axios from 'axios'
import AlbumDetail from './AlbumDetail';

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
  //tolto text e sostituito con albumdetail
  //key property aggiunta per risolvere il debugging, la key property dev'essere unica e serve a migliorare le performance)
  renderAlbums(){
    return this.state.albums.map(album => //vogliamo passare album ad AlbumDetail come prop, per questo tag autochiuso e niente testo
    <AlbumDetail key={album.title} album={album}/> //il nome album della property è completamente arbitrario, gli diamo lo stesso della variabile solo per facilitare il riconoscimento
    
    );
  }

  render() {
    console.log(this.state)
    return (
      <View>
        {this.renderAlbums()}
      </View>
    )
  }
}

export default AlbumList
