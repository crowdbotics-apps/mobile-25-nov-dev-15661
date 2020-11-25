import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = { DateTimePicker_6: new Date(""), TextInput_7: "", Switch_9: true }

  render = () => (
    <View>
      <Icon name="star" />
      <Icon name="star" />
      <Icon name="star" />
      <Text>Sample text content</Text>
      <DateTimePicker
        showIcon={false}
        date={this.state.DateTimePicker_6}
        onDateChange={selectedDate =>
          this.setState({ DateTimePicker_6: selectedDate })
        }
      />
      <TextInput
        placeholder="Sample text input placeholder"
        multiline={true}
        value={this.state.TextInput_7}
        onChangeText={nextValue => this.setState({ TextInput_7: nextValue })}
      />
      <Slider value={50} minimumValue={0} maximumValue={100} />
      <Switch
        trackColor={{ false: "#C0CCDA", true: "#409EFF" }}
        style={styles.Switch_9}
        value={this.state.Switch_9}
        onValueChange={nextChecked => this.setState({ Switch_9: nextChecked })}
      />
      <Image source={{ uri: "https://via.placeholder.com/150" }} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16
  },

  View_1: {},
  Icon_2: {},
  Icon_3: {},
  View_1: {},
  Icon_2: {},
  Icon_3: {},
  View_1: {},
  Icon_2: {},
  Icon_3: {},
  View_1: {},
  Icon_2: {},
  View_1: {},
  Icon_2: {},
  Icon_3: {},
  View_1: {},
  Icon_2: {},
  Icon_3: {},
  View_1: {},
  Icon_2: {},
  Icon_3: {},
  View_1: {},
  Icon_2: {},
  View_1: {},
  Icon_2: {},
  Icon_3: {},
  View_1: {},
  Icon_2: {},
  Icon_3: {},
  Icon_4: {},
  View_1: {},
  Icon_2: {},
  Icon_3: {},
  Icon_4: {},
  Text_5: {},
  DateTimePicker_6: {},
  TextInput_7: {},
  Slider_8: {},
  Switch_9: { alignSelf: "flex-start" },
  Image_10: {}
})
