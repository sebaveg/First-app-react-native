import React from 'react'
import { View, Text, Image, StyleSheet, Platform, SafeAreaView, StatusBar } from 'react-native'

function Header(props) {
  return (
    <View>
      <SafeAreaView style={styles.AndroidSafeArea}>
        <View style={styles.container}>
          <Image
            source={require('../../../assets/simbolo.gif')}
            style={styles.logo}
          />
          <Text style={styles.title}>
            Peliculas!
          </Text>
        </View>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  logo: {
    height: 40,
    width: 40,
    marginHorizontal: 7,
    marginVertical: 3
  },
  title: {
    color: '#645394',
    fontSize: 22,
    fontWeight: 'bold'
  }
})

export default Header