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
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"
import { connect } from "react-redux"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0607/cba5/657a8af4ab4823cbf7f7ab1933580095"
        }}
        style={styles.ImageBackground_7_1955}
      />
      <View style={styles.View_7_1956}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3fed/a8bc/102157f6c7d16a0fd81f423cf643b4d8"
          }}
          style={styles.ImageBackground_7_1957}
        />
        <View style={styles.View_8_22}>
          <View style={styles.View_I8_22_7_2462} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f43/a786/676d3ac4219bc15172341a8c407ed7cb"
          }}
          style={styles.ImageBackground_7_2330}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7bec/eb73/bd55e0e53f289adf6bae404c9c8b0cf5"
          }}
          style={styles.ImageBackground_7_2079}
        />
        <View style={styles.View_7_2081}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc1f/8c13/084b07cc68d2c0f62be3cedabd5f1aac"
            }}
            style={styles.ImageBackground_7_2082}
          />
          <View style={styles.View_7_2083}>
            <View style={styles.View_7_2084}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/34bf/ca20/c6a4d79f7369dbcee516a83f1452a136"
                }}
                style={styles.ImageBackground_7_2085}
              />
              <View style={styles.View_7_2086} />
              <View style={styles.View_7_2087} />
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/837f/6ba9/3f05af42afe32c8a27381414da280f0a"
          }}
          style={styles.ImageBackground_7_2320}
        />
      </View>
      <View style={styles.View_7_2123}>
        <View style={styles.View_7_2124}>
          <Text style={styles.Text_7_2124}>Home</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a4a1/a0f6/6892d95e8f30c328de1f28c26cac58eb"
          }}
          style={styles.ImageBackground_7_2125}
        />
      </View>
      <View style={styles.View_7_2126}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cb82/385e/eb6f64bf03169136908730bea60a2761"
          }}
          style={styles.ImageBackground_7_2127}
        />
        <View style={styles.View_7_2128}>
          <Text style={styles.Text_7_2128}>Progress</Text>
        </View>
      </View>
      <View style={styles.View_7_2129}>
        <View style={styles.View_7_2130}>
          <Text style={styles.Text_7_2130}>Messages</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2839/52b2/a12ccd6a164aa8f8f3a3c956f8340c40"
          }}
          style={styles.ImageBackground_7_2131}
        />
      </View>
      <View style={styles.View_7_2132}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c85d/96be/7ef6c33fa830e8b3a6efaabdd527a6a8"
          }}
          style={styles.ImageBackground_7_2133}
        />
        <View style={styles.View_7_2134}>
          <Text style={styles.Text_7_2134}>Appointments</Text>
        </View>
      </View>
      <View style={styles.View_7_2135}>
        <View style={styles.View_7_2136}>
          <View style={styles.View_7_2137}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f78b/ce17/880e8eceebe21ea6132a7ffd2f810431"
              }}
              style={styles.ImageBackground_7_2138}
            />
            <View style={styles.View_7_2139} />
            <View style={styles.View_7_2140} />
          </View>
        </View>
        <View style={styles.View_7_2141}>
          <Text style={styles.Text_7_2141}>More</Text>
        </View>
      </View>
      <View style={styles.View_7_2168}>
        <View style={styles.View_7_2169} />
        <View style={styles.View_7_2192}>
          <Text style={styles.Text_7_2192}>Scheduled</Text>
        </View>
        <View style={styles.View_7_2190}>
          <View style={styles.View_7_2188} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e726/bd67/babf225c5c8bb2ea5c5037e8c09fe353"
            }}
            style={styles.ImageBackground_7_2204}
          />
        </View>
      </View>
      <View style={styles.View_7_2220}>
        <View style={styles.View_7_2221} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/992b/c743/5cc1e9fe63978c823c48e34e04cf779f"
          }}
          style={styles.ImageBackground_7_2317}
        />
        <View style={styles.View_7_2295}>
          <View style={styles.View_7_2291}>
            <Text style={styles.Text_7_2291}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum massa justo
            </Text>
          </View>
          <View style={styles.View_7_2292}>
            <Text style={styles.Text_7_2292}>Take medication</Text>
          </View>
          <View style={styles.View_7_2294}>
            <Text style={styles.Text_7_2294}>Today - 10:00 am</Text>
          </View>
        </View>
        <View style={styles.View_7_2290} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b479/494a/6edab92a4f9967083b5d29a25e9e0998"
          }}
          style={styles.ImageBackground_7_2302}
        />
      </View>
      <View style={styles.View_7_2303}>
        <View style={styles.View_7_2304} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/992b/c743/5cc1e9fe63978c823c48e34e04cf779f"
          }}
          style={styles.ImageBackground_7_2316}
        />
        <View style={styles.View_7_2312}>
          <View style={styles.View_7_2313} />
          <View style={styles.View_7_2314}>
            <Text style={styles.Text_7_2314}>Cardiologist</Text>
          </View>
        </View>
        <View style={styles.View_7_2305}>
          <View style={styles.View_7_2307}>
            <Text style={styles.Text_7_2307}>James Sawyer</Text>
          </View>
          <View style={styles.View_7_2308}>
            <Text style={styles.Text_7_2308}>01 Feb - 11:00 am</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f4dd/de39/64f57673b724209170b8a063b40b182b"
          }}
          style={styles.ImageBackground_7_2309}
        />
      </View>
      <View style={styles.View_7_2194}>
        <View style={styles.View_7_2195} />
        <View style={styles.View_7_2196}>
          <Text style={styles.Text_7_2196}>Completed</Text>
        </View>
        <View style={styles.View_7_2197}>
          <View style={styles.View_7_2198} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6d3f/ac9c/8a10b24e083eb81bfc381315e3b4a3d6"
            }}
            style={styles.ImageBackground_7_2214}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/98a6/fe33/64712b6084cd28ef4d338364aba1e408"
            }}
            style={styles.ImageBackground_7_2218}
          />
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  ImageBackground_7_1955: {
    width: 444,
    height: 920,
    top: -11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -15
  },
  View_7_1956: {
    width: 413.1776428222656,
    minWidth: 413.1776428222656,
    height: 893.6680297851562,
    minHeight: 893.6680297851562,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.42529296875,
    top: 2.125
  },
  ImageBackground_7_1957: {
    width: 413.1776428222656,
    height: 893.6680297851562,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_8_22: {
    width: 413.1776428222656,
    minWidth: 413.1776428222656,
    height: 893.6680297851562,
    minHeight: 893.6680297851562,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I8_22_7_2462: {
    flexGrow: 1,
    width: 414,
    height: 909,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_7_2330: {
    width: 879.253173828125,
    minWidth: 879.253173828125,
    height: 879.253173828125,
    minHeight: 879.253173828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -367.80059814453125,
    top: -531.378173828125
  },
  ImageBackground_7_2079: {
    width: 128,
    minWidth: 128,
    height: 56,
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 142.57470703125,
    top: 55.875,
    resizeMode: "cover"
  },
  View_7_2081: {
    width: 50,
    minWidth: 50,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 29.57470703125,
    top: 58.875
  },
  ImageBackground_7_2082: {
    width: 50,
    minWidth: 50,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_7_2083: {
    width: 19.940507888793945,
    minWidth: 19.940507888793945,
    height: 15.7278470993042,
    minHeight: 15.7278470993042,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16.66668701171875,
    top: 17.5
  },
  View_7_2084: {
    width: 19.940507888793945,
    minWidth: 19.940507888793945,
    height: 15.7278470993042,
    minHeight: 15.7278470993042,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_7_2085: {
    width: 9.626453399658203,
    minWidth: 9.626453399658203,
    height: 3.525056838989258,
    minHeight: 3.525056838989258,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_7_2086: {
    width: 19.940507888793945,
    minWidth: 19.940507888793945,
    height: 3.350980281829834,
    minHeight: 3.350980281829834,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 6.2755126953125,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_7_2087: {
    width: 12.37686824798584,
    minWidth: 12.37686824798584,
    height: 3.350980281829834,
    minHeight: 3.350980281829834,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 12.3768310546875,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  ImageBackground_7_2320: {
    width: 50,
    minWidth: 50,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 333.57470703125,
    top: 58.875
  },
  View_7_2123: {
    width: 37,
    minWidth: 37,
    height: 47,
    minHeight: 47,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 31,
    top: 827
  },
  View_7_2124: {
    width: 37,
    minWidth: 37,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 30
  },
  Text_7_2124: {
    color: "rgba(63, 64, 66, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_7_2125: {
    width: 26,
    height: 21,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5
  },
  View_7_2126: {
    width: 54,
    minWidth: 54,
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 87,
    top: 826
  },
  ImageBackground_7_2127: {
    width: 24,
    height: 23,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15
  },
  View_7_2128: {
    width: 54,
    minWidth: 54,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 31
  },
  Text_7_2128: {
    color: "rgba(63, 64, 66, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_2129: {
    width: 63,
    minWidth: 63,
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 162,
    top: 826
  },
  View_7_2130: {
    width: 63,
    minWidth: 63,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 31
  },
  Text_7_2130: {
    color: "rgba(63, 64, 66, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_7_2131: {
    width: 24,
    height: 22,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18
  },
  View_7_2132: {
    width: 86,
    minWidth: 86,
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 242,
    top: 826
  },
  ImageBackground_7_2133: {
    width: 20,
    height: 22,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 34
  },
  View_7_2134: {
    width: 86,
    minWidth: 86,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 31
  },
  Text_7_2134: {
    color: "rgba(96, 84, 218, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_2135: {
    width: 32,
    minWidth: 32,
    height: 45,
    minHeight: 45,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 350,
    top: 829
  },
  View_7_2136: {
    width: 21.392946243286133,
    minWidth: 21.392946243286133,
    height: 16.873435974121094,
    minHeight: 16.873435974121094,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5,
    top: 0
  },
  View_7_2137: {
    width: 21.392946243286133,
    minWidth: 21.392946243286133,
    height: 16.873435974121094,
    minHeight: 16.873435974121094,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_7_2138: {
    width: 10.327614784240723,
    minWidth: 10.327614784240723,
    height: 3.781811475753784,
    minHeight: 3.781811475753784,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_7_2139: {
    width: 21.392915725708008,
    minWidth: 21.392915725708008,
    height: 3.59505558013916,
    minHeight: 3.59505558013916,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.000030517578125,
    top: 6.7325439453125,
    backgroundColor: "rgba(63, 64, 66, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_7_2140: {
    width: 13.278362274169922,
    minWidth: 13.278362274169922,
    height: 3.59505558013916,
    minHeight: 3.59505558013916,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.000030517578125,
    top: 13.2783203125,
    backgroundColor: "rgba(63, 64, 66, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_7_2141: {
    width: 32,
    minWidth: 32,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 28
  },
  Text_7_2141: {
    color: "rgba(63, 64, 66, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_2168: {
    width: 192,
    minWidth: 192,
    height: 80,
    minHeight: 80,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10,
    top: 141
  },
  View_7_2169: {
    width: 192,
    minWidth: 192,
    height: 80,
    minHeight: 80,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(96, 84, 218, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_7_2192: {
    width: 75,
    minWidth: 75,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 83,
    top: 31
  },
  Text_7_2192: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_2190: {
    width: 50,
    minWidth: 50,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21,
    top: 15
  },
  View_7_2188: {
    width: 50,
    minWidth: 50,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  ImageBackground_7_2204: {
    width: 18,
    height: 20,
    top: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16
  },
  View_7_2220: {
    width: 394,
    minWidth: 394,
    height: 125,
    minHeight: 125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10,
    top: 241
  },
  View_7_2221: {
    width: 394,
    minWidth: 394,
    height: 125,
    minHeight: 125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  ImageBackground_7_2317: {
    width: 6.74868631362915,
    height: 9,
    top: 58,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 367
  },
  View_7_2295: {
    width: 245,
    minWidth: 245,
    height: 76,
    minHeight: 76,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 127,
    top: 22
  },
  View_7_2291: {
    width: 245,
    minWidth: 245,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 48
  },
  Text_7_2291: {
    color: "rgba(174, 174, 174, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_2292: {
    width: 112,
    minWidth: 112,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_7_2292: {
    color: "rgba(63, 64, 66, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_2294: {
    width: 118,
    minWidth: 118,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 24
  },
  Text_7_2294: {
    color: "rgba(63, 64, 66, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_2290: {
    width: 80,
    minWidth: 80,
    height: 80,
    minHeight: 80,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 23,
    backgroundColor: "rgba(243, 243, 243, 1)",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  ImageBackground_7_2302: {
    width: 30,
    height: 30,
    top: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 45
  },
  View_7_2303: {
    width: 394,
    minWidth: 394,
    height: 125,
    minHeight: 125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10,
    top: 376
  },
  View_7_2304: {
    width: 394,
    minWidth: 394,
    height: 125,
    minHeight: 125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  ImageBackground_7_2316: {
    width: 6.74868631362915,
    height: 9,
    top: 58,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 367
  },
  View_7_2312: {
    width: 85,
    minWidth: 85,
    height: 20.00000762939453,
    minHeight: 20.00000762939453,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 127,
    top: 75
  },
  View_7_2313: {
    width: 85,
    minWidth: 85,
    height: 20.00000762939453,
    minHeight: 20.00000762939453,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(243, 243, 243, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_7_2314: {
    width: 63,
    minWidth: 63,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 11,
    top: 3
  },
  Text_7_2314: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_2305: {
    width: 120,
    minWidth: 120,
    height: 43,
    minHeight: 43,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 127,
    top: 22
  },
  View_7_2307: {
    width: 101,
    minWidth: 101,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_7_2307: {
    color: "rgba(63, 64, 66, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_2308: {
    width: 120,
    minWidth: 120,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 24
  },
  Text_7_2308: {
    color: "rgba(63, 64, 66, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_7_2309: {
    width: 80,
    minWidth: 80,
    height: 80,
    minHeight: 80,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 23,
    resizeMode: "cover",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_7_2194: {
    width: 192,
    minWidth: 192,
    height: 80,
    minHeight: 80,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 212,
    top: 141
  },
  View_7_2195: {
    width: 192,
    minWidth: 192,
    height: 80,
    minHeight: 80,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_7_2196: {
    width: 77,
    minWidth: 77,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 79,
    top: 31
  },
  Text_7_2196: {
    color: "rgba(63, 64, 66, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_2197: {
    width: 50,
    minWidth: 50,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17,
    top: 15
  },
  View_7_2198: {
    width: 50,
    minWidth: 50,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(66, 218, 180, 1)",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  ImageBackground_7_2214: {
    width: 18,
    height: 20,
    top: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16
  },
  ImageBackground_7_2218: {
    width: 8.16270923614502,
    height: 6.497056007385254,
    top: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21
  },
  View_2: { height: 896 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
