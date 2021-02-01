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
        style={styles.ImageBackground_7_218}
      />
      <View style={styles.View_7_219}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3fed/a8bc/102157f6c7d16a0fd81f423cf643b4d8"
          }}
          style={styles.ImageBackground_7_220}
        />
        <View style={styles.View_7_221} />
        <View style={styles.View_7_453}>
          <View style={styles.View_7_454} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ea2/6a12/efbe31b4d434a5f8b584c7fb42396916"
            }}
            style={styles.ImageBackground_7_636}
          />
          <View style={styles.View_7_514}>
            <Text style={styles.Text_7_514}>Heart rate</Text>
          </View>
          <View style={styles.View_7_516}>
            <Text style={styles.Text_7_516}>102/bpm</Text>
          </View>
        </View>
        <View style={styles.View_7_524}>
          <View style={styles.View_7_525} />
          <View style={styles.View_7_642}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f6bf/4fbd/e453b556b095ae546d0c2d857d1e3a19"
              }}
              style={styles.ImageBackground_7_641}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eda9/257c/4f87aaa905318352b3435eb021fb3948"
              }}
              style={styles.ImageBackground_7_640}
            />
            <View style={styles.View_7_651} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ea2/6a12/efbe31b4d434a5f8b584c7fb42396916"
            }}
            style={styles.ImageBackground_7_637}
          />
          <View style={styles.View_7_526}>
            <Text style={styles.Text_7_526}>Oxygen level</Text>
          </View>
          <View style={styles.View_7_527}>
            <Text style={styles.Text_7_527}>99 %</Text>
          </View>
        </View>
        <View style={styles.View_7_528}>
          <View style={styles.View_7_529} />
          <View style={styles.View_7_652}>
            <View style={styles.View_7_653}>
              <View style={styles.View_7_654}>
                <View style={styles.View_7_655} />
                <View style={styles.View_7_656} />
                <View style={styles.View_7_657} />
              </View>
              <View style={styles.View_7_658}>
                <View style={styles.View_7_659} />
                <View style={styles.View_7_660} />
                <View style={styles.View_7_661} />
              </View>
              <View style={styles.View_7_662}>
                <View style={styles.View_7_663} />
                <View style={styles.View_7_664} />
                <View style={styles.View_7_665} />
              </View>
              <View style={styles.View_7_666}>
                <View style={styles.View_7_667} />
                <View style={styles.View_7_668} />
                <View style={styles.View_7_669} />
              </View>
              <View style={styles.View_7_670}>
                <View style={styles.View_7_671} />
                <View style={styles.View_7_672} />
                <View style={styles.View_7_673} />
              </View>
              <View style={styles.View_7_674}>
                <View style={styles.View_7_675} />
                <View style={styles.View_7_676} />
                <View style={styles.View_7_677} />
              </View>
              <View style={styles.View_7_678}>
                <View style={styles.View_7_679} />
                <View style={styles.View_7_680} />
                <View style={styles.View_7_681} />
              </View>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ea2/6a12/efbe31b4d434a5f8b584c7fb42396916"
            }}
            style={styles.ImageBackground_7_638}
          />
          <View style={styles.View_7_530}>
            <Text style={styles.Text_7_530}>Blood Pressure</Text>
          </View>
          <View style={styles.View_7_531}>
            <Text style={styles.Text_7_531}>180/80/mm hg</Text>
          </View>
        </View>
        <View style={styles.View_7_532}>
          <View style={styles.View_7_533} />
          <View style={styles.View_7_689}>
            <View style={styles.View_7_682} />
            <View style={styles.View_7_683} />
            <View style={styles.View_7_684} />
            <View style={styles.View_7_685} />
            <View style={styles.View_7_686} />
            <View style={styles.View_7_687} />
            <View style={styles.View_7_688} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ea2/6a12/efbe31b4d434a5f8b584c7fb42396916"
            }}
            style={styles.ImageBackground_7_639}
          />
          <View style={styles.View_7_534}>
            <Text style={styles.Text_7_534}>Steps</Text>
          </View>
          <View style={styles.View_7_535}>
            <Text style={styles.Text_7_535}>3000</Text>
          </View>
        </View>
        <View style={styles.View_7_536}>
          <View style={styles.View_7_537} />
          <View style={styles.View_7_538}>
            <Text style={styles.Text_7_538}>Floors</Text>
          </View>
          <View style={styles.View_7_539}>
            <Text style={styles.Text_7_539}>102</Text>
          </View>
        </View>
        <View style={styles.View_7_426}>
          <Text style={styles.Text_7_426}>Today’s Progress vs last 7 days</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0831/2929/05bc77edba7c65a26765d0ac180bf4f4"
          }}
          style={styles.ImageBackground_7_544}
        />
        <View style={styles.View_7_222} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2daf/8f46/2ccb4d85f893ee1a2d032062a6ea7260"
          }}
          style={styles.ImageBackground_7_223}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1522/4224/756f70c48c8c557f29f228db9546401a"
          }}
          style={styles.ImageBackground_7_224}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/520a/1272/6c1d39ecc9a339fa37e698bb2e0fd6c6"
          }}
          style={styles.ImageBackground_7_225}
        />
        <View style={styles.View_7_226}>
          <View style={styles.View_7_227}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b8e9/0bda/ad10637ccb2842e4ebd64fdf776ce05a"
              }}
              style={styles.ImageBackground_7_228}
            />
            <View style={styles.View_7_229} />
            <View style={styles.View_7_230} />
          </View>
        </View>
        <View style={styles.View_7_325} />
        <View style={styles.View_7_541} />
        <View style={styles.View_7_540}>
          <View style={styles.View_7_396}>
            <View style={styles.View_7_397}>
              <Text style={styles.Text_7_397}>Home</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5825/1ec7/d684975b08bc608ced93a73df9c02f2b"
              }}
              style={styles.ImageBackground_7_398}
            />
          </View>
          <View style={styles.View_7_399}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e114/def1/46a541dd45383c1db888c24e3f789a36"
              }}
              style={styles.ImageBackground_7_400}
            />
            <View style={styles.View_7_401}>
              <Text style={styles.Text_7_401}>Progress</Text>
            </View>
          </View>
          <View style={styles.View_7_402}>
            <View style={styles.View_7_403}>
              <Text style={styles.Text_7_403}>Messages</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8aed/042a/fe1851f0f493290797b3346d7b6b5bf4"
              }}
              style={styles.ImageBackground_7_404}
            />
          </View>
          <View style={styles.View_7_405}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/46f6/58a2/ecc020eb6ddae17ce595147ff2867c16"
              }}
              style={styles.ImageBackground_7_406}
            />
            <View style={styles.View_7_407}>
              <Text style={styles.Text_7_407}>Appointments</Text>
            </View>
          </View>
          <View style={styles.View_7_408}>
            <View style={styles.View_7_409}>
              <View style={styles.View_7_410}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c04/e470/748a0e6abd8db00ed7034c133b395edc"
                  }}
                  style={styles.ImageBackground_7_411}
                />
                <View style={styles.View_7_412} />
                <View style={styles.View_7_413} />
              </View>
            </View>
            <View style={styles.View_7_414}>
              <Text style={styles.Text_7_414}>More</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_7_425}>
        <Text style={styles.Text_7_425}>January 2020</Text>
      </View>
      <View style={styles.View_7_448}>
        <View style={styles.View_7_449} />
        <View style={styles.View_7_427}>
          <Text style={styles.Text_7_427}>Mon</Text>
        </View>
        <View style={styles.View_7_429}>
          <Text style={styles.Text_7_429}>24</Text>
        </View>
      </View>
      <View style={styles.View_7_447}>
        <View style={styles.View_7_430}>
          <Text style={styles.Text_7_430}>Tue</Text>
        </View>
        <View style={styles.View_7_431}>
          <Text style={styles.Text_7_431}>25</Text>
        </View>
      </View>
      <View style={styles.View_7_445}>
        <View style={styles.View_7_433}>
          <Text style={styles.Text_7_433}>27</Text>
        </View>
        <View style={styles.View_7_434}>
          <Text style={styles.Text_7_434}>Thu</Text>
        </View>
      </View>
      <View style={styles.View_7_444}>
        <View style={styles.View_7_436}>
          <Text style={styles.Text_7_436}>28</Text>
        </View>
        <View style={styles.View_7_437}>
          <Text style={styles.Text_7_437}>Fri</Text>
        </View>
      </View>
      <View style={styles.View_7_443}>
        <View style={styles.View_7_438}>
          <Text style={styles.Text_7_438}>29</Text>
        </View>
        <View style={styles.View_7_439}>
          <Text style={styles.Text_7_439}>Sat</Text>
        </View>
      </View>
      <View style={styles.View_7_442}>
        <View style={styles.View_7_440}>
          <Text style={styles.Text_7_440}>30</Text>
        </View>
        <View style={styles.View_7_441}>
          <Text style={styles.Text_7_441}>Sun</Text>
        </View>
      </View>
      <View style={styles.View_7_446}>
        <View style={styles.View_7_432}>
          <Text style={styles.Text_7_432}>Wen</Text>
        </View>
        <View style={styles.View_7_435}>
          <Text style={styles.Text_7_435}>26</Text>
        </View>
      </View>
      <View style={styles.View_7_600}>
        <View style={styles.View_7_572}>
          <View style={styles.View_7_596}>
            <View style={styles.View_7_565} />
            <View style={styles.View_7_587} />
            <View style={styles.View_7_580} />
          </View>
          <View style={styles.View_7_595}>
            <View style={styles.View_7_567} />
            <View style={styles.View_7_586} />
            <View style={styles.View_7_579} />
          </View>
          <View style={styles.View_7_593}>
            <View style={styles.View_7_568} />
            <View style={styles.View_7_582} />
            <View style={styles.View_7_574} />
          </View>
          <View style={styles.View_7_592}>
            <View style={styles.View_7_570} />
            <View style={styles.View_7_583} />
            <View style={styles.View_7_573} />
          </View>
          <View style={styles.View_7_591}>
            <View style={styles.View_7_571} />
            <View style={styles.View_7_585} />
            <View style={styles.View_7_584} />
          </View>
          <View style={styles.View_7_594}>
            <View style={styles.View_7_569} />
            <View style={styles.View_7_589} />
            <View style={styles.View_7_578} />
          </View>
          <View style={styles.View_7_597}>
            <View style={styles.View_7_566} />
            <View style={styles.View_7_588} />
            <View style={styles.View_7_581} />
          </View>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  ImageBackground_7_218: {
    width: 444,
    height: 920,
    top: -11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -15
  },
  View_7_219: {
    width: 413.1776428222656,
    minWidth: 413.1776428222656,
    height: 893.6680297851562,
    minHeight: 893.6680297851562,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.425262451171875,
    top: 2.125
  },
  ImageBackground_7_220: {
    width: 413.1776428222656,
    height: 893.6680297851562,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_7_221: {
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
  View_7_453: {
    width: 393,
    minWidth: 393,
    height: 100,
    minHeight: 100,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10.574737548828125,
    top: 330.875
  },
  View_7_454: {
    width: 393,
    minWidth: 393,
    height: 100,
    minHeight: 100,
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
  ImageBackground_7_636: {
    width: 10.000001907348633,
    height: 16,
    top: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 367
  },
  View_7_514: {
    width: 71,
    minWidth: 71,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18,
    top: 15
  },
  Text_7_514: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_516: {
    width: 84,
    minWidth: 84,
    minHeight: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18,
    top: 42.000030517578125
  },
  Text_7_516: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 28,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_524: {
    width: 393,
    minWidth: 393,
    height: 100,
    minHeight: 100,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10.574737548828125,
    top: 440.875
  },
  View_7_525: {
    width: 393,
    minWidth: 393,
    height: 100,
    minHeight: 100,
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
  View_7_642: {
    width: 164,
    minWidth: 164,
    height: 51,
    minHeight: 51,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 185,
    top: 24
  },
  ImageBackground_7_641: {
    width: 161,
    minWidth: 161,
    height: 51,
    minHeight: 51,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_7_640: {
    width: 159,
    minWidth: 159,
    height: 30,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1,
    top: 0
  },
  View_7_651: {
    width: 8,
    minWidth: 8,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 156,
    top: 12,
    backgroundColor: "rgba(47, 43, 102, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  ImageBackground_7_637: {
    width: 10.000001907348633,
    height: 16,
    top: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 367
  },
  View_7_526: {
    width: 87,
    minWidth: 87,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18,
    top: 15
  },
  Text_7_526: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_527: {
    width: 56,
    minWidth: 56,
    minHeight: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18,
    top: 42.000030517578125
  },
  Text_7_527: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 28,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_528: {
    width: 393,
    minWidth: 393,
    height: 100,
    minHeight: 100,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10.574737548828125,
    top: 550.875
  },
  View_7_529: {
    width: 393,
    minWidth: 393,
    height: 100,
    minHeight: 100,
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
  View_7_652: {
    width: 164,
    minWidth: 164,
    height: 61,
    minHeight: 61,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 185,
    top: 20
  },
  View_7_653: {
    width: 164,
    minWidth: 164,
    height: 61,
    minHeight: 61,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_7_654: {
    width: 14,
    minWidth: 14,
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 25,
    top: 13
  },
  View_7_655: {
    width: 14,
    minWidth: 14,
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(223, 231, 238, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_7_656: {
    width: 8,
    minWidth: 8,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3,
    top: 37,
    backgroundColor: "rgba(176, 173, 221, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_7_657: {
    width: 8,
    minWidth: 8,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3,
    top: 3,
    backgroundColor: "rgba(47, 43, 102, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_7_658: {
    width: 14,
    minWidth: 14,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 50,
    top: 27
  },
  View_7_659: {
    width: 14,
    minWidth: 14,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(223, 231, 238, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_7_660: {
    width: 8,
    minWidth: 8,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3,
    top: 9,
    backgroundColor: "rgba(176, 173, 221, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_7_661: {
    width: 8,
    minWidth: 8,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3,
    top: 3,
    backgroundColor: "rgba(47, 43, 102, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_7_662: {
    width: 14,
    minWidth: 14,
    height: 26,
    minHeight: 26,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 100,
    top: 24
  },
  View_7_663: {
    width: 14,
    minWidth: 14,
    height: 26,
    minHeight: 26,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(223, 231, 238, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_7_664: {
    width: 8,
    minWidth: 8,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3,
    top: 15,
    backgroundColor: "rgba(176, 173, 221, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_7_665: {
    width: 8,
    minWidth: 8,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3,
    top: 3,
    backgroundColor: "rgba(47, 43, 102, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_7_666: {
    width: 14,
    minWidth: 14,
    height: 60,
    minHeight: 60,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 125,
    top: 0
  },
  View_7_667: {
    width: 14,
    minWidth: 14,
    height: 60,
    minHeight: 60,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(252, 148, 178, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_7_668: {
    width: 8,
    minWidth: 8,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3,
    top: 49,
    backgroundColor: "rgba(255, 204, 219, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_7_669: {
    width: 8,
    minWidth: 8,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3,
    top: 3,
    backgroundColor: "rgba(244, 61, 80, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_7_670: {
    width: 14,
    minWidth: 14,
    height: 42,
    minHeight: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 150,
    top: 16
  },
  View_7_671: {
    width: 14,
    minWidth: 14,
    height: 42,
    minHeight: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(223, 231, 238, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_7_672: {
    width: 8,
    minWidth: 8,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3,
    top: 3,
    backgroundColor: "rgba(47, 43, 102, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_7_673: {
    width: 8,
    minWidth: 8,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3,
    top: 31,
    backgroundColor: "rgba(176, 173, 221, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_7_674: {
    width: 14,
    minWidth: 14,
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 75,
    top: 13
  },
  View_7_675: {
    width: 14,
    minWidth: 14,
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(223, 231, 238, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_7_676: {
    width: 8,
    minWidth: 8,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3,
    top: 37,
    backgroundColor: "rgba(176, 173, 221, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_7_677: {
    width: 8,
    minWidth: 8,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3,
    top: 3,
    backgroundColor: "rgba(47, 43, 102, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_7_678: {
    width: 14,
    minWidth: 14,
    height: 32,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 21
  },
  View_7_679: {
    width: 14,
    minWidth: 14,
    height: 32,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(223, 231, 238, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_7_680: {
    width: 8,
    minWidth: 8,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3,
    top: 21,
    backgroundColor: "rgba(176, 173, 221, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_7_681: {
    width: 8,
    minWidth: 8,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3,
    top: 3,
    backgroundColor: "rgba(47, 43, 102, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  ImageBackground_7_638: {
    width: 10.000001907348633,
    height: 16,
    top: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 367
  },
  View_7_530: {
    width: 106,
    minWidth: 106,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18,
    top: 15
  },
  Text_7_530: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_531: {
    width: 151,
    minWidth: 151,
    minHeight: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18,
    top: 42.000030517578125
  },
  Text_7_531: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 28,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_532: {
    width: 393,
    minWidth: 393,
    height: 100,
    minHeight: 100,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10.574737548828125,
    top: 660.875
  },
  View_7_533: {
    width: 393,
    minWidth: 393,
    height: 100,
    minHeight: 100,
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
  View_7_689: {
    width: 164,
    minWidth: 164,
    height: 60,
    minHeight: 60,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 185,
    top: 20
  },
  View_7_682: {
    width: 14,
    minWidth: 14,
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 25,
    top: 12,
    backgroundColor: "rgba(47, 43, 102, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_7_683: {
    width: 14,
    minWidth: 14,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 50,
    top: 40,
    backgroundColor: "rgba(47, 43, 102, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_7_684: {
    width: 14,
    minWidth: 14,
    height: 26,
    minHeight: 26,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 100,
    top: 34,
    backgroundColor: "rgba(47, 43, 102, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_7_685: {
    width: 14,
    minWidth: 14,
    height: 60,
    minHeight: 60,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 125,
    top: 0,
    backgroundColor: "rgba(47, 43, 102, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_7_686: {
    width: 14,
    minWidth: 14,
    height: 42,
    minHeight: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 150,
    top: 18,
    backgroundColor: "rgba(47, 43, 102, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_7_687: {
    width: 14,
    minWidth: 14,
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 75,
    top: 12,
    backgroundColor: "rgba(47, 43, 102, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_7_688: {
    width: 14,
    minWidth: 14,
    height: 32,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 28,
    backgroundColor: "rgba(47, 43, 102, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  ImageBackground_7_639: {
    width: 10.000001907348633,
    height: 16,
    top: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 367
  },
  View_7_534: {
    width: 41,
    minWidth: 41,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18,
    top: 15
  },
  Text_7_534: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_535: {
    width: 78,
    minWidth: 78,
    minHeight: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18,
    top: 42.000030517578125
  },
  Text_7_535: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 28,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_536: {
    width: 393,
    minWidth: 393,
    height: 100,
    minHeight: 100,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10.574737548828125,
    top: 770.875
  },
  View_7_537: {
    width: 393,
    minWidth: 393,
    height: 100,
    minHeight: 100,
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
  View_7_538: {
    width: 44,
    minWidth: 44,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18,
    top: 15
  },
  Text_7_538: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_539: {
    width: 52,
    minWidth: 52,
    minHeight: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18,
    top: 42.000030517578125
  },
  Text_7_539: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 28,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_426: {
    width: 237,
    minWidth: 237,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20.574737548828125,
    top: 288.875
  },
  Text_7_426: {
    color: "rgba(41, 43, 47, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_7_544: {
    width: 25,
    height: 25,
    top: 288.875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 358.5747375488281
  },
  View_7_222: {
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
  ImageBackground_7_223: {
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
  ImageBackground_7_224: {
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
  ImageBackground_7_225: {
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
  View_7_226: {
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
  View_7_227: {
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
  ImageBackground_7_228: {
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
  View_7_229: {
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
  View_7_230: {
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
  View_7_325: {
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
  View_7_541: {
    width: 414,
    minWidth: 414,
    height: 90,
    minHeight: 90,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -0.425262451171875,
    top: 803.875,
    backgroundColor: "rgba(249, 251, 252, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  View_7_540: {
    width: 350,
    minWidth: 350,
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30.574737548828125,
    top: 824.875
  },
  View_7_396: {
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
  View_7_397: {
    width: 36,
    minWidth: 36,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 30
  },
  Text_7_397: {
    color: "rgba(151, 164, 176, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_7_398: {
    width: 26,
    height: 21,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5
  },
  View_7_399: {
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
  ImageBackground_7_400: {
    width: 24,
    height: 23,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15
  },
  View_7_401: {
    width: 55,
    minWidth: 55,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 31
  },
  Text_7_401: {
    color: "rgba(47, 43, 102, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_402: {
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
  View_7_403: {
    width: 60,
    minWidth: 60,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 31
  },
  Text_7_403: {
    color: "rgba(151, 164, 176, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_7_404: {
    width: 24,
    height: 22,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18
  },
  View_7_405: {
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
  ImageBackground_7_406: {
    width: 20,
    height: 22,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 34
  },
  View_7_407: {
    width: 88,
    minWidth: 88,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 31
  },
  Text_7_407: {
    color: "rgba(151, 164, 176, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_408: {
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
  View_7_409: {
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
  View_7_410: {
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
  ImageBackground_7_411: {
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
  View_7_412: {
    width: 21.392915725708008,
    minWidth: 21.392915725708008,
    height: 3.59505558013916,
    minHeight: 3.59505558013916,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.000030517578125,
    top: 6.7325439453125,
    backgroundColor: "rgba(151, 164, 176, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_7_413: {
    width: 13.278362274169922,
    minWidth: 13.278362274169922,
    height: 3.59505558013916,
    minHeight: 3.59505558013916,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.000030517578125,
    top: 13.27838134765625,
    backgroundColor: "rgba(151, 164, 176, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_7_414: {
    width: 31,
    minWidth: 31,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 28
  },
  Text_7_414: {
    color: "rgba(151, 164, 176, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_425: {
    width: 108,
    minWidth: 108,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30,
    top: 156
  },
  Text_7_425: {
    color: "rgba(41, 43, 47, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_448: {
    width: 361,
    minWidth: 361,
    height: 75,
    minHeight: 75,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30,
    top: 195
  },
  View_7_449: {
    width: 51,
    minWidth: 51,
    height: 75,
    minHeight: 75,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 310,
    top: 0,
    backgroundColor: "rgba(215, 227, 237, 1)",
    borderColor: "rgba(116, 149, 178, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_7_427: {
    width: 33,
    minWidth: 33,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 10
  },
  Text_7_427: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_429: {
    width: 21,
    minWidth: 21,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6,
    top: 42
  },
  Text_7_429: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_447: {
    width: 29,
    minWidth: 29,
    height: 54,
    minHeight: 54,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 87,
    top: 205
  },
  View_7_430: {
    width: 29,
    minWidth: 29,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_7_430: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_431: {
    width: 20,
    minWidth: 20,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4,
    top: 32
  },
  Text_7_431: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_445: {
    width: 30,
    minWidth: 30,
    height: 54,
    minHeight: 54,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 199,
    top: 205
  },
  View_7_433: {
    width: 19,
    minWidth: 19,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4,
    top: 32
  },
  Text_7_433: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_434: {
    width: 30,
    minWidth: 30,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_7_434: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_444: {
    width: 22,
    minWidth: 22,
    height: 54,
    minHeight: 54,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 253,
    top: 205
  },
  View_7_436: {
    width: 20,
    minWidth: 20,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 32
  },
  Text_7_436: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_437: {
    width: 22,
    minWidth: 22,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_7_437: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_443: {
    width: 27,
    minWidth: 27,
    height: 54,
    minHeight: 54,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 299,
    top: 205
  },
  View_7_438: {
    width: 20,
    minWidth: 20,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3,
    top: 32
  },
  Text_7_438: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_439: {
    width: 27,
    minWidth: 27,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_7_439: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_442: {
    width: 31,
    minWidth: 31,
    height: 54,
    minHeight: 54,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 350,
    top: 205
  },
  View_7_440: {
    width: 20,
    minWidth: 20,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5,
    top: 32
  },
  Text_7_440: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_441: {
    width: 31,
    minWidth: 31,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_7_441: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_446: {
    width: 35,
    minWidth: 35,
    height: 54,
    minHeight: 54,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 140,
    top: 205
  },
  View_7_432: {
    width: 35,
    minWidth: 35,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_7_432: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_435: {
    width: 20,
    minWidth: 20,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 7,
    top: 32
  },
  Text_7_435: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_600: {
    width: 164,
    minWidth: 164,
    height: 61,
    minHeight: 61,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 196,
    top: 352
  },
  View_7_572: {
    width: 164,
    minWidth: 164,
    height: 61,
    minHeight: 61,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_7_596: {
    width: 14,
    minWidth: 14,
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 25,
    top: 13
  },
  View_7_565: {
    width: 14,
    minWidth: 14,
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(223, 231, 238, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_7_587: {
    width: 8,
    minWidth: 8,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3,
    top: 37,
    backgroundColor: "rgba(176, 173, 221, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_7_580: {
    width: 8,
    minWidth: 8,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3,
    top: 3,
    backgroundColor: "rgba(47, 43, 102, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_7_595: {
    width: 14,
    minWidth: 14,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 50,
    top: 27
  },
  View_7_567: {
    width: 14,
    minWidth: 14,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(223, 231, 238, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_7_586: {
    width: 8,
    minWidth: 8,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3,
    top: 9,
    backgroundColor: "rgba(176, 173, 221, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_7_579: {
    width: 8,
    minWidth: 8,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3,
    top: 3,
    backgroundColor: "rgba(47, 43, 102, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_7_593: {
    width: 14,
    minWidth: 14,
    height: 26,
    minHeight: 26,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 100,
    top: 24
  },
  View_7_568: {
    width: 14,
    minWidth: 14,
    height: 26,
    minHeight: 26,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(223, 231, 238, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_7_582: {
    width: 8,
    minWidth: 8,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3,
    top: 15,
    backgroundColor: "rgba(176, 173, 221, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_7_574: {
    width: 8,
    minWidth: 8,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3,
    top: 3,
    backgroundColor: "rgba(47, 43, 102, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_7_592: {
    width: 14,
    minWidth: 14,
    height: 60,
    minHeight: 60,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 125,
    top: 0
  },
  View_7_570: {
    width: 14,
    minWidth: 14,
    height: 60,
    minHeight: 60,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(252, 148, 178, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_7_583: {
    width: 8,
    minWidth: 8,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3,
    top: 49,
    backgroundColor: "rgba(255, 204, 219, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_7_573: {
    width: 8,
    minWidth: 8,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3,
    top: 3,
    backgroundColor: "rgba(244, 61, 80, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_7_591: {
    width: 14,
    minWidth: 14,
    height: 42,
    minHeight: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 150,
    top: 16
  },
  View_7_571: {
    width: 14,
    minWidth: 14,
    height: 42,
    minHeight: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(223, 231, 238, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_7_585: {
    width: 8,
    minWidth: 8,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3,
    top: 3,
    backgroundColor: "rgba(47, 43, 102, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_7_584: {
    width: 8,
    minWidth: 8,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3,
    top: 31,
    backgroundColor: "rgba(176, 173, 221, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_7_594: {
    width: 14,
    minWidth: 14,
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 75,
    top: 13
  },
  View_7_569: {
    width: 14,
    minWidth: 14,
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(223, 231, 238, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_7_589: {
    width: 8,
    minWidth: 8,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3,
    top: 37,
    backgroundColor: "rgba(176, 173, 221, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_7_578: {
    width: 8,
    minWidth: 8,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3,
    top: 3,
    backgroundColor: "rgba(47, 43, 102, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_7_597: {
    width: 14,
    minWidth: 14,
    height: 32,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 21
  },
  View_7_566: {
    width: 14,
    minWidth: 14,
    height: 32,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(223, 231, 238, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_7_588: {
    width: 8,
    minWidth: 8,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3,
    top: 21,
    backgroundColor: "rgba(176, 173, 221, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_7_581: {
    width: 8,
    minWidth: 8,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3,
    top: 3,
    backgroundColor: "rgba(47, 43, 102, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
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
