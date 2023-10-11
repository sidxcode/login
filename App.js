import { StatusBar } from 'expo-status-bar';
import { Text, TouchableOpacity, View } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function App() {
  return (
    <View className="flex-1 bg-blue-200 justify-center items-center">
      <View style={{height: hp(45), width: wp(80)}} className = "bg-white flex items-center justify-center rounded-3xl">
        {/*email container*/}
        <View className="">
          <View style={{width:wp(65)}} className="border-2 border-blue-900 rounded-xl">
            <Text className="text-blue-200 p-4">email</Text>
          </View>
        </View>

        {/* password container */}
        <View className="pt-2">
          <View style={{width:wp(65)}} className="border-2 border-blue-900 rounded-xl">
            <Text className="text-blue-200 p-4">password</Text>
          </View>
        </View>

        {/* login */}
        <View className="pt-8">
          <TouchableOpacity style={{width:wp(65)}} className="bg-blue-900 rounded-3xl flex items-center">
            <Text className="font-bold text-white p-4">Sign in</Text>
          </TouchableOpacity>
        </View>

        <View className="pt-8">
          <Text>Not having an account?</Text>
        </View>

        <View className ="pt-2">
          <TouchableOpacity>
            <Text className="text-blue-200 font-bold">SIGN UP</Text>
          </TouchableOpacity>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

