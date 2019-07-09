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
  /*debugger, key per stoppare il codice e fare il debugging in automatico */
  componentWillMount() {
    //axios sostitutisce la fetch, rendendola più facile da scrivere
    axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(response => console.log(response))
  }

  render() {
    return (
      <View>
        <Text>Album List</Text>
      </View>
    )
  }
}

export default AlbumList
