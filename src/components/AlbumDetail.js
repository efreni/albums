//serve a mostrare i dettagli di tutti gli album

import React from 'react'
import { View, Text } from 'react-native'
import Card from './Card'

const AlbumDetail = props => {
  return (
    <Card>
      <Text>{props.album.title}</Text>
    </Card>
  )
}

export default AlbumDetail
