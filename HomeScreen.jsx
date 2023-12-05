import { View, Text, TouchableOpacity} from 'react-native'
import React from 'react'

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity 
      onPress={() => navigation.navigate("Permission")}
      style={{backgroundColor:"blue", alignSelf:"center",alignItems:"center"}}
      >
        <Text style={{color:"white", padding:10}}>Go to Permission</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen