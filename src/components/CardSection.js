//serve a formattare e mostrare il contenuto della singola card
import React from 'react'
import { View } from 'react-native'

const CardSection = props => {
  return <View style={styles.containerStyle}>{props.children}</View>
}

const styles = {
  containerStyle: {
    borderBottomWidth: 1, // anche se card ha già un borderBottom a noi serve per fare una distinzione più marcata graficamente
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
  },
}

export default CardSection
