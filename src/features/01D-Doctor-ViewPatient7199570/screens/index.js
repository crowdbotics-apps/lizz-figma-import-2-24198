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
        style={styles.ImageBackground_7_2385}
      />
      <View style={styles.View_7_2386}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3fed/a8bc/102157f6c7d16a0fd81f423cf643b4d8"
          }}
          style={styles.ImageBackground_7_2387}
        />
        <View style={styles.View_7_2388} />
        <View style={styles.View_7_2626}>
          <View style={styles.View_7_2627} />
          <View style={styles.View_7_2635}>
            <Text style={styles.Text_7_2635}>Oct</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c00b/95dd/855ea5597ab062a14551c06f7ca9daed"
            }}
            style={styles.ImageBackground_7_2643}
          />
          <View style={styles.View_7_2634}>
            <Text style={styles.Text_7_2634}>14m 18s</Text>
          </View>
        </View>
        <View style={styles.View_7_2612}>
          <Text style={styles.Text_7_2612}>
            Monitoring duration Oct - 14m 8s
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f64f/5a6c/c59d37e5e1d85318a0d87076b8f2ead3"
          }}
          style={styles.ImageBackground_7_2536}
        />
        <View style={styles.View_7_2604}>
          <View style={styles.View_7_2605}>
            <View style={styles.View_7_2606} />
            <View style={styles.View_7_2607}>
              <Text style={styles.Text_7_2607}>#1518916816468</Text>
            </View>
          </View>
          <View style={styles.View_7_2614}>
            <View style={styles.View_7_2615} />
            <View style={styles.View_7_2616}>
              <Text style={styles.Text_7_2616}>Aug 28, 1982</Text>
            </View>
          </View>
          <View style={styles.View_7_2586}>
            <Text style={styles.Text_7_2586}>Gale Merrill</Text>
          </View>
        </View>
        <View style={styles.View_7_2553}>
          <View style={styles.View_7_2554} />
          <View style={styles.View_7_2649}>
            <View style={styles.View_7_2647} />
            <View style={styles.View_7_2648}>
              <Text style={styles.Text_7_2648}>1</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ea2/6a12/efbe31b4d434a5f8b584c7fb42396916"
            }}
            style={styles.ImageBackground_7_2565}
          />
          <View style={styles.View_7_2555}>
            <Text style={styles.Text_7_2555}>Message</Text>
          </View>
        </View>
        <View style={styles.View_7_2556}>
          <View style={styles.View_7_2557} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ea2/6a12/efbe31b4d434a5f8b584c7fb42396916"
            }}
            style={styles.ImageBackground_7_2571}
          />
          <View style={styles.View_7_2558}>
            <Text style={styles.Text_7_2558}>Vitals</Text>
          </View>
        </View>
        <View style={styles.View_7_2559}>
          <View style={styles.View_7_2560} />
          <View style={styles.View_7_2650}>
            <View style={styles.View_7_2651} />
            <View style={styles.View_7_2652}>
              <Text style={styles.Text_7_2652}>1</Text>
            </View>
          </View>
          <View style={styles.View_7_2653}>
            <View style={styles.View_7_2654} />
            <View style={styles.View_7_2655}>
              <Text style={styles.Text_7_2655}>2</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ea2/6a12/efbe31b4d434a5f8b584c7fb42396916"
            }}
            style={styles.ImageBackground_7_2572}
          />
          <View style={styles.View_7_2561}>
            <Text style={styles.Text_7_2561}>alerts</Text>
          </View>
        </View>
        <View style={styles.View_7_2562}>
          <View style={styles.View_7_2563} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ea2/6a12/efbe31b4d434a5f8b584c7fb42396916"
            }}
            style={styles.ImageBackground_7_2573}
          />
          <View style={styles.View_7_2564}>
            <Text style={styles.Text_7_2564}>Notes</Text>
          </View>
        </View>
        <View style={styles.View_7_2574}>
          <View style={styles.View_7_2575} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ea2/6a12/efbe31b4d434a5f8b584c7fb42396916"
            }}
            style={styles.ImageBackground_7_2576}
          />
          <View style={styles.View_7_2577}>
            <Text style={styles.Text_7_2577}>RPM Daily Plan</Text>
          </View>
        </View>
        <View style={styles.View_7_2578}>
          <View style={styles.View_7_2579} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ea2/6a12/efbe31b4d434a5f8b584c7fb42396916"
            }}
            style={styles.ImageBackground_7_2580}
          />
          <View style={styles.View_7_2581}>
            <Text style={styles.Text_7_2581}>RPM Goals / Thresholds</Text>
          </View>
        </View>
        <View style={styles.View_7_2389} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2daf/8f46/2ccb4d85f893ee1a2d032062a6ea7260"
          }}
          style={styles.ImageBackground_7_2390}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f9ce/8831/c59babbb05f32d196548e865c5674c45"
          }}
          style={styles.ImageBackground_7_2391}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/520a/1272/6c1d39ecc9a339fa37e698bb2e0fd6c6"
          }}
          style={styles.ImageBackground_7_2392}
        />
        <View style={styles.View_7_2393}>
          <View style={styles.View_7_2394}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b8e9/0bda/ad10637ccb2842e4ebd64fdf776ce05a"
              }}
              style={styles.ImageBackground_7_2395}
            />
            <View style={styles.View_7_2396} />
            <View style={styles.View_7_2397} />
          </View>
        </View>
        <View style={styles.View_7_2398} />
        <View style={styles.View_7_2399} />
        <View style={styles.View_7_2400}>
          <View style={styles.View_7_2401}>
            <View style={styles.View_7_2402}>
              <Text style={styles.Text_7_2402}>Home</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5825/1ec7/d684975b08bc608ced93a73df9c02f2b"
              }}
              style={styles.ImageBackground_7_2403}
            />
          </View>
          <View style={styles.View_7_2404}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c2d6/881f/8f42ef39f8a5acb50205802452acf77c"
              }}
              style={styles.ImageBackground_7_2405}
            />
            <View style={styles.View_7_2406}>
              <Text style={styles.Text_7_2406}>Progress</Text>
            </View>
          </View>
          <View style={styles.View_7_2407}>
            <View style={styles.View_7_2408}>
              <Text style={styles.Text_7_2408}>Messages</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8aed/042a/fe1851f0f493290797b3346d7b6b5bf4"
              }}
              style={styles.ImageBackground_7_2409}
            />
          </View>
          <View style={styles.View_7_2410}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/46f6/58a2/ecc020eb6ddae17ce595147ff2867c16"
              }}
              style={styles.ImageBackground_7_2411}
            />
            <View style={styles.View_7_2412}>
              <Text style={styles.Text_7_2412}>Appointments</Text>
            </View>
          </View>
          <View style={styles.View_7_2413}>
            <View style={styles.View_7_2414}>
              <View style={styles.View_7_2415}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c04/e470/748a0e6abd8db00ed7034c133b395edc"
                  }}
                  style={styles.ImageBackground_7_2416}
                />
                <View style={styles.View_7_2417} />
                <View style={styles.View_7_2418} />
              </View>
            </View>
            <View style={styles.View_7_2419}>
              <Text style={styles.Text_7_2419}>More</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_7_2588}>
        <View style={styles.View_7_2449}>
          <Text style={styles.Text_7_2449}>Patient details</Text>
        </View>
        <View style={styles.View_7_2656}>
          <Text style={styles.Text_7_2656}>Monitoring duration</Text>
        </View>
        <View style={styles.View_7_2528}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e0a0/b1f3/125bff9336c8a4c6796d3a77c879e594"
            }}
            style={styles.ImageBackground_7_2534}
          />
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  ImageBackground_7_2385: {
    width: 444,
    height: 920,
    top: -11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -15
  },
  View_7_2386: {
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
  ImageBackground_7_2387: {
    width: 413.1776428222656,
    height: 893.6680297851562,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_7_2388: {
    width: 413.1776428222656,
    minWidth: 413.1776428222656,
    height: 893.6680297851562,
    minHeight: 893.6680297851562,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_7_2626: {
    width: 221,
    minWidth: 221,
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 182.57470703125,
    top: 316.875
  },
  View_7_2627: {
    width: 221,
    minWidth: 221,
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(238, 242, 244, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_7_2635: {
    width: 22,
    minWidth: 22,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17,
    top: 11
  },
  Text_7_2635: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_7_2643: {
    width: 19,
    minWidth: 19,
    height: 5,
    minHeight: 5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 182,
    top: 17
  },
  View_7_2634: {
    width: 53,
    minWidth: 53,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 61,
    top: 10
  },
  Text_7_2634: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_2612: {
    width: 136,
    minWidth: 136,
    minHeight: 57,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 239.57470703125,
    top: 136.875
  },
  Text_7_2612: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_7_2536: {
    width: 140,
    minWidth: 140,
    height: 140,
    minHeight: 140,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 29.57470703125,
    top: 278.875,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_7_2604: {
    width: 200,
    minWidth: 200,
    height: 67.00001525878906,
    minHeight: 67.00001525878906,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 29.57470703125,
    top: 190.875
  },
  View_7_2605: {
    width: 104,
    minWidth: 104,
    height: 20.000011444091797,
    minHeight: 20.000011444091797,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 47
  },
  View_7_2606: {
    width: 104,
    minWidth: 104,
    height: 20.000011444091797,
    minHeight: 20.000011444091797,
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
  View_7_2607: {
    width: 82,
    minWidth: 82,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 11,
    top: 3
  },
  Text_7_2607: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_2614: {
    width: 86,
    minWidth: 86,
    height: 20.00000762939453,
    minHeight: 20.00000762939453,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 114,
    top: 47
  },
  View_7_2615: {
    width: 86,
    minWidth: 86,
    height: 20.00000762939453,
    minHeight: 20.00000762939453,
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
  View_7_2616: {
    width: 65,
    minWidth: 65,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 11,
    top: 3
  },
  Text_7_2616: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_2586: {
    width: 169,
    minWidth: 169,
    minHeight: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_7_2586: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 28,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_2553: {
    width: 393,
    minWidth: 393,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10.57470703125,
    top: 443.875
  },
  View_7_2554: {
    width: 393,
    minWidth: 393,
    height: 50,
    minHeight: 50,
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
  View_7_2649: {
    width: 34,
    minWidth: 34,
    height: 34,
    minHeight: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 326,
    top: 8
  },
  View_7_2647: {
    width: 34,
    minWidth: 34,
    height: 34,
    minHeight: 34,
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
  View_7_2648: {
    width: 6,
    minWidth: 6,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 7
  },
  Text_7_2648: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_7_2565: {
    width: 10.000001907348633,
    height: 16,
    top: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 372
  },
  View_7_2555: {
    width: 70,
    minWidth: 70,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19,
    top: 15.5
  },
  Text_7_2555: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_7_2556: {
    width: 393,
    minWidth: 393,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10.57470703125,
    top: 503.875
  },
  View_7_2557: {
    width: 393,
    minWidth: 393,
    height: 50,
    minHeight: 50,
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
  ImageBackground_7_2571: {
    width: 10.000001907348633,
    height: 16,
    top: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 372
  },
  View_7_2558: {
    width: 51,
    minWidth: 51,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19,
    top: 15.5
  },
  Text_7_2558: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_7_2559: {
    width: 393,
    minWidth: 393,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10.57470703125,
    top: 563.875
  },
  View_7_2560: {
    width: 393,
    minWidth: 393,
    height: 50,
    minHeight: 50,
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
  View_7_2650: {
    width: 34,
    minWidth: 34,
    height: 34,
    minHeight: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 282,
    top: 8
  },
  View_7_2651: {
    width: 34,
    minWidth: 34,
    height: 34,
    minHeight: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(245, 72, 92, 1)",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  View_7_2652: {
    width: 6,
    minWidth: 6,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 7
  },
  Text_7_2652: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_2653: {
    width: 34,
    minWidth: 34,
    height: 34,
    minHeight: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 326,
    top: 8
  },
  View_7_2654: {
    width: 34,
    minWidth: 34,
    height: 34,
    minHeight: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(252, 204, 162, 1)",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  View_7_2655: {
    width: 9,
    minWidth: 9,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 13,
    top: 7
  },
  Text_7_2655: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_7_2572: {
    width: 10.000001907348633,
    height: 16,
    top: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 372
  },
  View_7_2561: {
    width: 58,
    minWidth: 58,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19,
    top: 15.5
  },
  Text_7_2561: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_7_2562: {
    width: 393,
    minWidth: 393,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10.57470703125,
    top: 623.875
  },
  View_7_2563: {
    width: 393,
    minWidth: 393,
    height: 50,
    minHeight: 50,
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
  ImageBackground_7_2573: {
    width: 10.000001907348633,
    height: 16,
    top: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 372
  },
  View_7_2564: {
    width: 49,
    minWidth: 49,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19,
    top: 15.5
  },
  Text_7_2564: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_7_2574: {
    width: 393,
    minWidth: 393,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10.57470703125,
    top: 683.875
  },
  View_7_2575: {
    width: 393,
    minWidth: 393,
    height: 50,
    minHeight: 50,
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
  ImageBackground_7_2576: {
    width: 10.000001907348633,
    height: 16,
    top: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 372
  },
  View_7_2577: {
    width: 119,
    minWidth: 119,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19,
    top: 15.5
  },
  Text_7_2577: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_7_2578: {
    width: 393,
    minWidth: 393,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10.57470703125,
    top: 743.875
  },
  View_7_2579: {
    width: 393,
    minWidth: 393,
    height: 50,
    minHeight: 50,
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
  ImageBackground_7_2580: {
    width: 10.000001907348633,
    height: 16,
    top: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 372
  },
  View_7_2581: {
    width: 193,
    minWidth: 193,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19,
    top: 15.5
  },
  Text_7_2581: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_7_2389: {
    width: 414,
    minWidth: 414,
    height: 178,
    minHeight: 178,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -0.42529296875,
    top: -2.125
  },
  ImageBackground_7_2390: {
    width: 128,
    minWidth: 128,
    height: 56,
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 142.57470703125,
    top: 55.874969482421875,
    resizeMode: "cover"
  },
  ImageBackground_7_2391: {
    width: 60.000003814697266,
    minWidth: 60.000003814697266,
    height: 60.000003814697266,
    minHeight: 60.000003814697266,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 323.57470703125,
    top: 33.875
  },
  ImageBackground_7_2392: {
    width: 60,
    minWidth: 60,
    height: 60,
    minHeight: 60,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 29.57470703125,
    top: 33.875
  },
  View_7_2393: {
    width: 23.92860984802246,
    minWidth: 23.92860984802246,
    height: 18.873416900634766,
    minHeight: 18.873416900634766,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 49.57470703125,
    top: 54.874969482421875
  },
  View_7_2394: {
    width: 23.92860984802246,
    minWidth: 23.92860984802246,
    height: 18.873416900634766,
    minHeight: 18.873416900634766,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_7_2395: {
    width: 11.551743507385254,
    minWidth: 11.551743507385254,
    height: 4.230068206787109,
    minHeight: 4.230068206787109,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_7_2396: {
    width: 23.92860984802246,
    minWidth: 23.92860984802246,
    height: 4.021176338195801,
    minHeight: 4.021176338195801,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 7.53057861328125,
    backgroundColor: "rgba(47, 43, 102, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_7_2397: {
    width: 14.852241516113281,
    minWidth: 14.852241516113281,
    height: 4.021176338195801,
    minHeight: 4.021176338195801,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 14.85223388671875,
    backgroundColor: "rgba(47, 43, 102, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_7_2398: {
    width: 414,
    minWidth: 414,
    height: 63,
    minHeight: 63,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -0.42529296875,
    top: 132.87496948242188,
    backgroundColor: "rgba(223, 231, 238, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_7_2399: {
    width: 414,
    minWidth: 414,
    height: 90,
    minHeight: 90,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -0.42529296875,
    top: 803.875,
    backgroundColor: "rgba(249, 251, 252, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  View_7_2400: {
    width: 350,
    minWidth: 350,
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30.57470703125,
    top: 824.875
  },
  View_7_2401: {
    width: 36,
    minWidth: 36,
    height: 47,
    minHeight: 47,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 1
  },
  View_7_2402: {
    width: 36,
    minWidth: 36,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 30
  },
  Text_7_2402: {
    color: "rgba(151, 164, 176, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_7_2403: {
    width: 26,
    height: 21,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5
  },
  View_7_2404: {
    width: 55,
    minWidth: 55,
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 56,
    top: 0
  },
  ImageBackground_7_2405: {
    width: 24,
    height: 23,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15
  },
  View_7_2406: {
    width: 55,
    minWidth: 55,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 31
  },
  Text_7_2406: {
    color: "rgba(151, 164, 176, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_2407: {
    width: 60,
    minWidth: 60,
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 131,
    top: 0
  },
  View_7_2408: {
    width: 60,
    minWidth: 60,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 31
  },
  Text_7_2408: {
    color: "rgba(151, 164, 176, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_7_2409: {
    width: 24,
    height: 22,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18
  },
  View_7_2410: {
    width: 88,
    minWidth: 88,
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 211,
    top: 0
  },
  ImageBackground_7_2411: {
    width: 20,
    height: 22,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 34
  },
  View_7_2412: {
    width: 88,
    minWidth: 88,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 31
  },
  Text_7_2412: {
    color: "rgba(151, 164, 176, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_2413: {
    width: 31,
    minWidth: 31,
    height: 45,
    minHeight: 45,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 319,
    top: 3
  },
  View_7_2414: {
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
  View_7_2415: {
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
  ImageBackground_7_2416: {
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
  View_7_2417: {
    width: 21.392915725708008,
    minWidth: 21.392915725708008,
    height: 3.59505558013916,
    minHeight: 3.59505558013916,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 6.7325439453125,
    backgroundColor: "rgba(151, 164, 176, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_7_2418: {
    width: 13.278362274169922,
    minWidth: 13.278362274169922,
    height: 3.59505558013916,
    minHeight: 3.59505558013916,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 13.27838134765625,
    backgroundColor: "rgba(151, 164, 176, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_7_2419: {
    width: 31,
    minWidth: 31,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 28
  },
  Text_7_2419: {
    color: "rgba(151, 164, 176, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_2588: {
    width: 312,
    minWidth: 312,
    height: 147,
    minHeight: 147,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30,
    top: 155
  },
  View_7_2449: {
    width: 114,
    minWidth: 114,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 45,
    top: 1
  },
  Text_7_2449: {
    color: "rgba(41, 43, 47, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_2656: {
    width: 159,
    minWidth: 159,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 153,
    top: 125
  },
  Text_7_2656: {
    color: "rgba(41, 43, 47, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_2528: {
    width: 25,
    height: 25,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_7_2534: {
    width: 25,
    height: 25,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
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
