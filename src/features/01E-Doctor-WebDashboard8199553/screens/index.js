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
      <View style={styles.View_9_7} />
      <View style={styles.View_10_5} />
      <View style={styles.View_10_551} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4e25/5306/c9601479bdc365bea4fbb2f8aecb8d89"
        }}
        style={styles.ImageBackground_10_94}
      />
      <View style={styles.View_10_90}>
        <Text style={styles.Text_10_90}>Total appointments today (12)</Text>
      </View>
      <View style={styles.View_10_0} />
      <View style={styles.View_10_40}>
        <View style={styles.View_10_42} />
        <View style={styles.View_10_96} />
        <View style={styles.View_10_43}>
          <View style={styles.View_10_44} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1eab/55ea/3f969684e475d04c86b800ded6d73c8e"
            }}
            style={styles.ImageBackground_10_47}
          />
          <View style={styles.View_10_51}>
            <Text style={styles.Text_10_51}>Gale Merrill</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d412/4555/bc85e247c71005e0b61d630a86c67c1e"
            }}
            style={styles.ImageBackground_10_102}
          />
        </View>
        <View style={styles.View_10_52}>
          <View style={styles.View_10_53}>
            <View style={styles.View_10_54} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7dc2/ea2e/9a25b10440cb5ffbc13db24d5c791808"
              }}
              style={styles.ImageBackground_10_99}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1eab/55ea/3f969684e475d04c86b800ded6d73c8e"
              }}
              style={styles.ImageBackground_10_55}
            />
            <View style={styles.View_10_59}>
              <Text style={styles.Text_10_59}>James Sawyer</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_10_60}>
          <View style={styles.View_10_61} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d412/4555/bc85e247c71005e0b61d630a86c67c1e"
            }}
            style={styles.ImageBackground_10_101}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1eab/55ea/3f969684e475d04c86b800ded6d73c8e"
            }}
            style={styles.ImageBackground_10_64}
          />
          <View style={styles.View_10_68}>
            <Text style={styles.Text_10_68}>James Michael</Text>
          </View>
        </View>
        <View style={styles.View_10_69}>
          <Text style={styles.Text_10_69}>9:00 AM</Text>
        </View>
        <View style={styles.View_10_70}>
          <Text style={styles.Text_10_70}>10:00 AM</Text>
        </View>
        <View style={styles.View_10_71}>
          <Text style={styles.Text_10_71}>11:00 AM</Text>
        </View>
        <View style={styles.View_10_72} />
        <View style={styles.View_10_73} />
        <View style={styles.View_10_74} />
        <View style={styles.View_10_75} />
        <View style={styles.View_10_76} />
      </View>
      <View style={styles.View_10_88}>
        <Text style={styles.Text_10_88}>Upcoming appointments</Text>
      </View>
      <View style={styles.View_10_116}>
        <View style={styles.View_10_33} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c4c5/b279/050b03c008c18972219d51f2a2cc0448"
          }}
          style={styles.ImageBackground_10_115}
        />
        <View style={styles.View_10_104}>
          <Text style={styles.Text_10_104}>Search in patients</Text>
        </View>
      </View>
      <View style={styles.View_10_117}>
        <Text style={styles.Text_10_117}>Provider dashboard</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/280d/e80a/ccf63debbe01f279b4a9905cc5df3e7c"
        }}
        style={styles.ImageBackground_10_450}
      />
      <View style={styles.View_10_452}>
        <View style={styles.View_10_453}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d9b3/c014/e6226cb96a85112f674b63c2fc8de060"
            }}
            style={styles.ImageBackground_10_454}
          />
          <View style={styles.View_10_455} />
          <View style={styles.View_10_456} />
        </View>
      </View>
      <View style={styles.View_10_448}>
        <Text style={styles.Text_10_448}>VyTrac</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/16d0/a32e/6f1d92b1e6d95f67ee9c0740f84fff96"
        }}
        style={styles.ImageBackground_10_449}
      />
      <View style={styles.View_10_32}>
        <View style={styles.View_10_7}>
          <View style={styles.View_10_8} />
          <View style={styles.View_10_13}>
            <Text style={styles.Text_10_13}>dashboard</Text>
          </View>
        </View>
        <View style={styles.View_10_14}>
          <View style={styles.View_10_15} />
          <View style={styles.View_10_16}>
            <Text style={styles.Text_10_16}>patients</Text>
          </View>
        </View>
        <View style={styles.View_10_17}>
          <View style={styles.View_10_18} />
          <View style={styles.View_10_19}>
            <Text style={styles.Text_10_19}>Encounters</Text>
          </View>
        </View>
        <View style={styles.View_10_20}>
          <View style={styles.View_10_21} />
          <View style={styles.View_10_22}>
            <Text style={styles.Text_10_22}>Appointments</Text>
          </View>
        </View>
        <View style={styles.View_10_23}>
          <View style={styles.View_10_24} />
          <View style={styles.View_10_25}>
            <Text style={styles.Text_10_25}>Availability</Text>
          </View>
        </View>
        <View style={styles.View_10_26}>
          <View style={styles.View_10_27} />
          <View style={styles.View_10_28}>
            <Text style={styles.Text_10_28}>Daily plan templates</Text>
          </View>
        </View>
        <View style={styles.View_10_29}>
          <View style={styles.View_10_30} />
          <View style={styles.View_10_31}>
            <Text style={styles.Text_10_31}>administration</Text>
          </View>
        </View>
        <View style={styles.View_10_130}>
          <View style={styles.View_10_131} />
          <View style={styles.View_10_132}>
            <Text style={styles.Text_10_132}>Log out</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_10_451}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e440/ef6c/9dcc315292d69981c9844d386e6e878a"
          }}
          style={styles.ImageBackground_9_8}
        />
        <View style={styles.View_10_3}>
          <Text style={styles.Text_10_3}>Welcome John Sawyer</Text>
        </View>
      </View>
      <View style={styles.View_10_281}>
        <View style={styles.View_10_103} />
        <View style={styles.View_10_430}>
          <View style={styles.View_10_268}>
            <View style={styles.View_10_266}>
              <Text style={styles.Text_10_266}>Between 80% to 100%</Text>
            </View>
            <View style={styles.View_10_267} />
          </View>
          <View style={styles.View_10_269}>
            <View style={styles.View_10_270}>
              <Text style={styles.Text_10_270}>Between 50% to 79%</Text>
            </View>
            <View style={styles.View_10_271} />
          </View>
          <View style={styles.View_10_272}>
            <View style={styles.View_10_273}>
              <Text style={styles.Text_10_273}>Below 50%</Text>
            </View>
            <View style={styles.View_10_274} />
          </View>
          <View style={styles.View_10_275}>
            <View style={styles.View_10_276}>
              <Text style={styles.Text_10_276}>Not attended</Text>
            </View>
            <View style={styles.View_10_277} />
          </View>
        </View>
        <View style={styles.View_10_278}>
          <View style={styles.View_10_118}>
            <Text style={styles.Text_10_118}>
              Patients daily plan adherence
            </Text>
          </View>
          <View style={styles.View_10_119}>
            <Text style={styles.Text_10_119}>
              In case of overlapping points, you can turn off category by click
              on legend
            </Text>
          </View>
        </View>
        <View style={styles.View_10_429}>
          <View style={styles.View_10_136}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35ee/92d3/d4b9c3a675d96e80459634a7cb08e11c"
              }}
              style={styles.ImageBackground_10_133}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b731/0963/81226c250165ce7e5c3275ca208fcd03"
              }}
              style={styles.ImageBackground_10_175}
            />
            <View style={styles.View_10_215}>
              <Text style={styles.Text_10_215}>0</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0316/ca0c/f5ab7fd61a6d14de5285ef4fccd0560c"
              }}
              style={styles.ImageBackground_10_176}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0316/ca0c/f5ab7fd61a6d14de5285ef4fccd0560c"
              }}
              style={styles.ImageBackground_10_177}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0316/ca0c/f5ab7fd61a6d14de5285ef4fccd0560c"
              }}
              style={styles.ImageBackground_10_178}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0316/ca0c/f5ab7fd61a6d14de5285ef4fccd0560c"
              }}
              style={styles.ImageBackground_10_179}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0316/ca0c/f5ab7fd61a6d14de5285ef4fccd0560c"
              }}
              style={styles.ImageBackground_10_180}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0316/ca0c/f5ab7fd61a6d14de5285ef4fccd0560c"
              }}
              style={styles.ImageBackground_10_181}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0316/ca0c/f5ab7fd61a6d14de5285ef4fccd0560c"
              }}
              style={styles.ImageBackground_10_182}
            />
            <View style={styles.View_10_135}>
              <Text style={styles.Text_10_135}>14 12 10 8 6 4 2</Text>
            </View>
            <View style={styles.View_10_228}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82ab/626e/615da9ba17463c12befdb2dcae2ce4e8"
                }}
                style={styles.ImageBackground_10_189}
              />
              <View style={styles.View_10_137}>
                <Text style={styles.Text_10_137}>13/10</Text>
              </View>
            </View>
            <View style={styles.View_10_229}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82ab/626e/615da9ba17463c12befdb2dcae2ce4e8"
                }}
                style={styles.ImageBackground_10_188}
              />
              <View style={styles.View_10_138}>
                <Text style={styles.Text_10_138}>12/10</Text>
              </View>
            </View>
            <View style={styles.View_10_227}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82ab/626e/615da9ba17463c12befdb2dcae2ce4e8"
                }}
                style={styles.ImageBackground_10_187}
              />
              <View style={styles.View_10_139}>
                <Text style={styles.Text_10_139}>11/10</Text>
              </View>
            </View>
            <View style={styles.View_10_226}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82ab/626e/615da9ba17463c12befdb2dcae2ce4e8"
                }}
                style={styles.ImageBackground_10_186}
              />
              <View style={styles.View_10_140}>
                <Text style={styles.Text_10_140}>09/10</Text>
              </View>
            </View>
            <View style={styles.View_10_225}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82ab/626e/615da9ba17463c12befdb2dcae2ce4e8"
                }}
                style={styles.ImageBackground_10_185}
              />
              <View style={styles.View_10_141}>
                <Text style={styles.Text_10_141}>08/10</Text>
              </View>
            </View>
            <View style={styles.View_10_224}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82ab/626e/615da9ba17463c12befdb2dcae2ce4e8"
                }}
                style={styles.ImageBackground_10_184}
              />
              <View style={styles.View_10_142}>
                <Text style={styles.Text_10_142}>07/10</Text>
              </View>
            </View>
            <View style={styles.View_10_223}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82ab/626e/615da9ba17463c12befdb2dcae2ce4e8"
                }}
                style={styles.ImageBackground_10_183}
              />
              <View style={styles.View_10_143}>
                <Text style={styles.Text_10_143}>06/10</Text>
              </View>
            </View>
            <View style={styles.View_10_222}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82ab/626e/615da9ba17463c12befdb2dcae2ce4e8"
                }}
                style={styles.ImageBackground_10_196}
              />
              <View style={styles.View_10_145}>
                <Text style={styles.Text_10_145}>05/10</Text>
              </View>
            </View>
            <View style={styles.View_10_221}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82ab/626e/615da9ba17463c12befdb2dcae2ce4e8"
                }}
                style={styles.ImageBackground_10_195}
              />
              <View style={styles.View_10_146}>
                <Text style={styles.Text_10_146}>04/10</Text>
              </View>
            </View>
            <View style={styles.View_10_220}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82ab/626e/615da9ba17463c12befdb2dcae2ce4e8"
                }}
                style={styles.ImageBackground_10_194}
              />
              <View style={styles.View_10_144}>
                <Text style={styles.Text_10_144}>03/10</Text>
              </View>
            </View>
            <View style={styles.View_10_219}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82ab/626e/615da9ba17463c12befdb2dcae2ce4e8"
                }}
                style={styles.ImageBackground_10_193}
              />
              <View style={styles.View_10_147}>
                <Text style={styles.Text_10_147}>02/10</Text>
              </View>
            </View>
            <View style={styles.View_10_218}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82ab/626e/615da9ba17463c12befdb2dcae2ce4e8"
                }}
                style={styles.ImageBackground_10_192}
              />
              <View style={styles.View_10_148}>
                <Text style={styles.Text_10_148}>01/10</Text>
              </View>
            </View>
            <View style={styles.View_10_230}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82ab/626e/615da9ba17463c12befdb2dcae2ce4e8"
                }}
                style={styles.ImageBackground_10_191}
              />
              <View style={styles.View_10_149}>
                <Text style={styles.Text_10_149}>30/09</Text>
              </View>
            </View>
            <View style={styles.View_10_231}>
              <View style={styles.View_10_150}>
                <Text style={styles.Text_10_150}>29/09</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82ab/626e/615da9ba17463c12befdb2dcae2ce4e8"
                }}
                style={styles.ImageBackground_10_216}
              />
            </View>
            <View style={styles.View_10_232}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82ab/626e/615da9ba17463c12befdb2dcae2ce4e8"
                }}
                style={styles.ImageBackground_10_202}
              />
              <View style={styles.View_10_151}>
                <Text style={styles.Text_10_151}>28/09</Text>
              </View>
            </View>
            <View style={styles.View_10_233}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82ab/626e/615da9ba17463c12befdb2dcae2ce4e8"
                }}
                style={styles.ImageBackground_10_201}
              />
              <View style={styles.View_10_152}>
                <Text style={styles.Text_10_152}>27/09</Text>
              </View>
            </View>
            <View style={styles.View_10_234}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82ab/626e/615da9ba17463c12befdb2dcae2ce4e8"
                }}
                style={styles.ImageBackground_10_200}
              />
              <View style={styles.View_10_153}>
                <Text style={styles.Text_10_153}>26/09</Text>
              </View>
            </View>
            <View style={styles.View_10_235}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82ab/626e/615da9ba17463c12befdb2dcae2ce4e8"
                }}
                style={styles.ImageBackground_10_199}
              />
              <View style={styles.View_10_154}>
                <Text style={styles.Text_10_154}>25/09</Text>
              </View>
            </View>
            <View style={styles.View_10_236}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82ab/626e/615da9ba17463c12befdb2dcae2ce4e8"
                }}
                style={styles.ImageBackground_10_198}
              />
              <View style={styles.View_10_155}>
                <Text style={styles.Text_10_155}>24/09</Text>
              </View>
            </View>
            <View style={styles.View_10_238}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82ab/626e/615da9ba17463c12befdb2dcae2ce4e8"
                }}
                style={styles.ImageBackground_10_210}
              />
              <View style={styles.View_10_156}>
                <Text style={styles.Text_10_156}>22/09</Text>
              </View>
            </View>
            <View style={styles.View_10_239}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82ab/626e/615da9ba17463c12befdb2dcae2ce4e8"
                }}
                style={styles.ImageBackground_10_209}
              />
              <View style={styles.View_10_158}>
                <Text style={styles.Text_10_158}>21/09</Text>
              </View>
            </View>
            <View style={styles.View_10_240}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82ab/626e/615da9ba17463c12befdb2dcae2ce4e8"
                }}
                style={styles.ImageBackground_10_208}
              />
              <View style={styles.View_10_159}>
                <Text style={styles.Text_10_159}>20/09</Text>
              </View>
            </View>
            <View style={styles.View_10_241}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82ab/626e/615da9ba17463c12befdb2dcae2ce4e8"
                }}
                style={styles.ImageBackground_10_207}
              />
              <View style={styles.View_10_160}>
                <Text style={styles.Text_10_160}>19/09</Text>
              </View>
            </View>
            <View style={styles.View_10_242}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82ab/626e/615da9ba17463c12befdb2dcae2ce4e8"
                }}
                style={styles.ImageBackground_10_206}
              />
              <View style={styles.View_10_161}>
                <Text style={styles.Text_10_161}>18/09</Text>
              </View>
            </View>
            <View style={styles.View_10_243}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82ab/626e/615da9ba17463c12befdb2dcae2ce4e8"
                }}
                style={styles.ImageBackground_10_205}
              />
              <View style={styles.View_10_162}>
                <Text style={styles.Text_10_162}>17/09</Text>
              </View>
            </View>
            <View style={styles.View_10_244}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82ab/626e/615da9ba17463c12befdb2dcae2ce4e8"
                }}
                style={styles.ImageBackground_10_204}
              />
              <View style={styles.View_10_163}>
                <Text style={styles.Text_10_163}>16/09</Text>
              </View>
            </View>
            <View style={styles.View_10_246}>
              <View style={styles.View_10_245}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82ab/626e/615da9ba17463c12befdb2dcae2ce4e8"
                  }}
                  style={styles.ImageBackground_10_214}
                />
                <View style={styles.View_10_164}>
                  <Text style={styles.Text_10_164}>15/09</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_10_247}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82ab/626e/615da9ba17463c12befdb2dcae2ce4e8"
                }}
                style={styles.ImageBackground_10_213}
              />
              <View style={styles.View_10_165}>
                <Text style={styles.Text_10_165}>14/09</Text>
              </View>
            </View>
            <View style={styles.View_10_248}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82ab/626e/615da9ba17463c12befdb2dcae2ce4e8"
                }}
                style={styles.ImageBackground_10_212}
              />
              <View style={styles.View_10_166}>
                <Text style={styles.Text_10_166}>13/09</Text>
              </View>
            </View>
            <View style={styles.View_10_237}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82ab/626e/615da9ba17463c12befdb2dcae2ce4e8"
                }}
                style={styles.ImageBackground_10_197}
              />
              <View style={styles.View_10_157}>
                <Text style={styles.Text_10_157}>23/09</Text>
              </View>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/70c0/1abf/7f6e9696cb31f0af0060c03f989eef40"
            }}
            style={styles.ImageBackground_10_168}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c64/835f/9603d2fb1c4f7d6b8c2ac91ef87d3a53"
            }}
            style={styles.ImageBackground_10_252}
          />
          <View style={styles.View_10_280}>
            <View style={styles.View_10_254} />
            <View style={styles.View_10_255} />
            <View style={styles.View_10_258}>
              <Text style={styles.Text_10_258}>
                Sep 28 2020 - 80% adherence
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_10_411}>
        <View style={styles.View_10_412} />
        <View style={styles.View_10_413}>
          <View style={styles.View_10_426}>
            <View style={styles.View_10_427}>
              <Text style={styles.Text_10_427}>Patient score</Text>
            </View>
            <View style={styles.View_10_428}>
              <Text style={styles.Text_10_428}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque commodo bibendum nibh
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_10_447}>
        <View style={styles.View_10_433} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa78/429f/b3acbbdba0b6c315d64421323005ca40"
          }}
          style={styles.ImageBackground_10_446}
        />
        <View style={styles.View_10_439}>
          <Text style={styles.Text_10_439}>13/10</Text>
        </View>
        <View style={styles.View_10_441}>
          <Text style={styles.Text_10_441}>13/09</Text>
        </View>
        <View style={styles.View_10_440}>
          <Text style={styles.Text_10_440}>to</Text>
        </View>
      </View>
      <View style={styles.View_10_542}>
        <View style={styles.View_10_283} />
        <View style={styles.View_10_297}>
          <View style={styles.View_10_298}>
            <Text style={styles.Text_10_298}>My Patients</Text>
          </View>
          <View style={styles.View_10_299}>
            <Text style={styles.Text_10_299}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque commodo bibendum nibh
            </Text>
          </View>
        </View>
        <View style={styles.View_10_472} />
        <View style={styles.View_10_501}>
          <View style={styles.View_10_502} />
          <View style={styles.View_10_504}>
            <Text style={styles.Text_10_504}>Apply filters</Text>
          </View>
        </View>
        <View style={styles.View_10_488}>
          <Text style={styles.Text_10_488}>Filter patients</Text>
        </View>
        <View style={styles.View_10_474}>
          <View style={styles.View_10_484}>
            <View style={styles.View_10_485}>
              <Text style={styles.Text_10_485}>Patient Name</Text>
            </View>
            <View style={styles.View_10_487} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c4c5/b279/050b03c008c18972219d51f2a2cc0448"
              }}
              style={styles.ImageBackground_10_513}
            />
          </View>
        </View>
        <View style={styles.View_10_489}>
          <View style={styles.View_10_490}>
            <View style={styles.View_10_491}>
              <Text style={styles.Text_10_491}>Score</Text>
            </View>
            <View style={styles.View_10_492} />
          </View>
        </View>
        <View style={styles.View_10_493}>
          <View style={styles.View_10_494}>
            <View style={styles.View_10_495}>
              <Text style={styles.Text_10_495}>Status</Text>
            </View>
            <View style={styles.View_10_496} />
          </View>
        </View>
        <View style={styles.View_10_497}>
          <View style={styles.View_10_498}>
            <View style={styles.View_10_499}>
              <Text style={styles.Text_10_499}>Category</Text>
            </View>
            <View style={styles.View_10_500} />
          </View>
        </View>
        <View style={styles.View_10_543}>
          <View style={styles.View_10_544}>
            <View style={styles.View_10_545}>
              <Text style={styles.Text_10_545}>Alerts</Text>
            </View>
            <View style={styles.View_10_546} />
          </View>
        </View>
        <View style={styles.View_10_520}>
          <View style={styles.View_10_473} />
          <View style={styles.View_10_507}>
            <Text style={styles.Text_10_507}>Patient ID</Text>
          </View>
          <View style={styles.View_10_508}>
            <Text style={styles.Text_10_508}>Name</Text>
          </View>
          <View style={styles.View_10_519}>
            <Text style={styles.Text_10_519}>Image</Text>
          </View>
          <View style={styles.View_10_509}>
            <Text style={styles.Text_10_509}>Age</Text>
          </View>
          <View style={styles.View_10_510}>
            <Text style={styles.Text_10_510}>Started duration</Text>
          </View>
          <View style={styles.View_10_511}>
            <Text style={styles.Text_10_511}>Monitoring since</Text>
          </View>
          <View style={styles.View_10_512}>
            <Text style={styles.Text_10_512}>Alerts</Text>
          </View>
          <View style={styles.View_10_514}>
            <Text style={styles.Text_10_514}>Latest vitals</Text>
          </View>
          <View style={styles.View_10_515}>
            <Text style={styles.Text_10_515}>Email</Text>
          </View>
          <View style={styles.View_10_516}>
            <Text style={styles.Text_10_516}>Phone</Text>
          </View>
          <View style={styles.View_10_517}>
            <Text style={styles.Text_10_517}>Appointments</Text>
          </View>
        </View>
        <View style={styles.View_10_521}>
          <View style={styles.View_10_522} />
          <View style={styles.View_10_541}>
            <Text style={styles.Text_10_541}>See latest vitals</Text>
          </View>
          <View style={styles.View_10_535}>
            <View style={styles.View_10_536} />
            <View style={styles.View_10_537}>
              <Text style={styles.Text_10_537}>1</Text>
            </View>
          </View>
          <View style={styles.View_10_538}>
            <View style={styles.View_10_539} />
            <View style={styles.View_10_540}>
              <Text style={styles.Text_10_540}>2</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8311/c11d/829f456b2dfa09718362f4d392181a78"
            }}
            style={styles.ImageBackground_10_534}
          />
          <View style={styles.View_10_523}>
            <Text style={styles.Text_10_523}>#2934293</Text>
          </View>
          <View style={styles.View_10_524}>
            <Text style={styles.Text_10_524}>Gale Merril</Text>
          </View>
          <View style={styles.View_10_526}>
            <Text style={styles.Text_10_526}>28</Text>
          </View>
          <View style={styles.View_10_527}>
            <Text style={styles.Text_10_527}>Oct 2020</Text>
          </View>
          <View style={styles.View_10_528}>
            <Text style={styles.Text_10_528}>8m 12s</Text>
          </View>
          <View style={styles.View_10_531}>
            <Text style={styles.Text_10_531}>galem@gmail.com</Text>
          </View>
          <View style={styles.View_10_532}>
            <Text style={styles.Text_10_532}>856-832-5599</Text>
          </View>
          <View style={styles.View_10_533}>
            <Text style={styles.Text_10_533}>3</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: {},
  View_9_7: {
    width: 323,
    minWidth: 323,
    height: 1080,
    minHeight: 1080,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(55, 51, 114, 1)"
  },
  View_10_5: {
    width: 323,
    minWidth: 323,
    height: 518,
    minHeight: 518,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(48, 44, 104, 1)"
  },
  View_10_551: {
    width: 323,
    minWidth: 323,
    height: 518,
    minHeight: 518,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_10_94: {
    width: 6.000000476837158,
    height: 10,
    top: 482,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 297
  },
  View_10_90: {
    width: 182,
    minWidth: 182,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 479
  },
  Text_10_90: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_0: {
    width: 1597,
    minWidth: 1597,
    height: 1080,
    minHeight: 1080,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 323,
    top: 0,
    backgroundColor: "rgba(223, 231, 238, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 20
  },
  View_10_40: {
    width: 283,
    minWidth: 283,
    height: 183,
    minHeight: 183,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 276
  },
  View_10_42: {
    width: 1.0000157356262207,
    minWidth: 1.0000157356262207,
    height: 179,
    minHeight: 179,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 7,
    top: 1,
    backgroundColor: "rgba(145, 139, 235, 1)",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  View_10_96: {
    width: 11,
    minWidth: 11,
    height: 11,
    minHeight: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2,
    top: 172,
    backgroundColor: "rgba(75, 70, 145, 1)",
    borderColor: "rgba(145, 139, 235, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  View_10_43: {
    width: 204,
    minWidth: 204,
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 79,
    top: 12
  },
  View_10_44: {
    width: 204,
    minWidth: 204,
    height: 40,
    minHeight: 40,
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
  ImageBackground_10_47: {
    width: 19,
    minWidth: 19,
    height: 5,
    minHeight: 5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 172,
    top: 17
  },
  View_10_51: {
    width: 67,
    minWidth: 67,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 10
  },
  Text_10_51: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10_102: {
    width: 14,
    height: 14,
    top: 13,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 148
  },
  View_10_52: {
    width: 204,
    minWidth: 204,
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 79,
    top: 132
  },
  View_10_53: {
    width: 204,
    minWidth: 204,
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_10_54: {
    width: 204,
    minWidth: 204,
    height: 40,
    minHeight: 40,
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
  ImageBackground_10_99: {
    width: 13,
    height: 9,
    top: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 148
  },
  ImageBackground_10_55: {
    width: 19,
    minWidth: 19,
    height: 5,
    minHeight: 5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 172,
    top: 17
  },
  View_10_59: {
    width: 88,
    minWidth: 88,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 10
  },
  Text_10_59: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_60: {
    width: 204,
    minWidth: 204,
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 79,
    top: 71
  },
  View_10_61: {
    width: 204,
    minWidth: 204,
    height: 40,
    minHeight: 40,
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
  ImageBackground_10_101: {
    width: 14,
    height: 14,
    top: 13,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 148
  },
  ImageBackground_10_64: {
    width: 19,
    minWidth: 19,
    height: 5,
    minHeight: 5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 172,
    top: 18
  },
  View_10_68: {
    width: 90,
    minWidth: 90,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 10
  },
  Text_10_68: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_69: {
    width: 29,
    minWidth: 29,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30,
    top: 17
  },
  Text_10_69: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_70: {
    width: 34,
    minWidth: 34,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30,
    top: 76
  },
  Text_10_70: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_71: {
    width: 31,
    minWidth: 31,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30,
    top: 137
  },
  Text_10_71: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_72: {
    width: 15,
    minWidth: 15,
    height: 15,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 24,
    backgroundColor: "rgba(48, 44, 104, 1)",
    borderColor: "rgba(249, 131, 112, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  View_10_73: {
    width: 15,
    minWidth: 15,
    height: 15,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 84,
    backgroundColor: "rgba(48, 44, 104, 1)",
    borderColor: "rgba(0, 157, 194, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  View_10_74: {
    width: 15,
    minWidth: 15,
    height: 15,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 144,
    backgroundColor: "rgba(48, 44, 104, 1)",
    borderColor: "rgba(81, 195, 153, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  View_10_75: {
    width: 11,
    minWidth: 11,
    height: 11,
    minHeight: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2,
    top: 0,
    backgroundColor: "rgba(87, 82, 162, 1)",
    borderColor: "rgba(145, 139, 235, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  View_10_76: {
    width: 11,
    minWidth: 11,
    height: 11,
    minHeight: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2,
    top: 17,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(84, 79, 158, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  View_10_88: {
    width: 194,
    minWidth: 194,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 22,
    top: 236
  },
  Text_10_88: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_116: {
    width: 1537,
    minWidth: 1537,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 353,
    top: 69
  },
  View_10_33: {
    width: 1537,
    minWidth: 1537,
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
  ImageBackground_10_115: {
    width: 18.707000732421875,
    height: 18.70800018310547,
    top: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 25
  },
  View_10_104: {
    width: 127,
    minWidth: 127,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 66,
    top: 15
  },
  Text_10_104: {
    color: "rgba(161, 174, 198, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_117: {
    width: 154,
    minWidth: 154,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 453,
    top: 27
  },
  Text_10_117: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10_450: {
    width: 96,
    minWidth: 96,
    height: 42,
    minHeight: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 119,
    top: 34,
    resizeMode: "cover"
  },
  View_10_452: {
    width: 23.92860984802246,
    minWidth: 23.92860984802246,
    height: 18.873416900634766,
    minHeight: 18.873416900634766,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 46
  },
  View_10_453: {
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
  ImageBackground_10_454: {
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
  View_10_455: {
    width: 23.92860984802246,
    minWidth: 23.92860984802246,
    height: 4.021176338195801,
    minHeight: 4.021176338195801,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 7.53057861328125,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_10_456: {
    width: 14.852241516113281,
    minWidth: 14.852241516113281,
    height: 4.021176338195801,
    minHeight: 4.021176338195801,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 14.85223388671875,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_10_448: {
    width: 54,
    minWidth: 54,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 353,
    top: 27
  },
  Text_10_448: {
    color: "rgba(0, 71, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10_449: {
    width: 6.000000953674316,
    height: 10,
    top: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 427
  },
  View_10_32: {
    width: 283,
    minWidth: 283,
    height: 490,
    minHeight: 490,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 548
  },
  View_10_7: {
    width: 283,
    minWidth: 283,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_10_8: {
    width: 283,
    minWidth: 283,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(66, 218, 180, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_10_13: {
    width: 89,
    minWidth: 89,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24,
    top: 15.5
  },
  Text_10_13: {
    color: "rgba(22, 90, 73, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_10_14: {
    width: 283,
    minWidth: 283,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 60
  },
  View_10_15: {
    width: 283,
    minWidth: 283,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(43, 40, 96, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_10_16: {
    width: 71,
    minWidth: 71,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24,
    top: 15.5
  },
  Text_10_16: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_10_17: {
    width: 283,
    minWidth: 283,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 120
  },
  View_10_18: {
    width: 283,
    minWidth: 283,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(43, 40, 96, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_10_19: {
    width: 99,
    minWidth: 99,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24,
    top: 15.5
  },
  Text_10_19: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_10_20: {
    width: 283,
    minWidth: 283,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 180
  },
  View_10_21: {
    width: 283,
    minWidth: 283,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(43, 40, 96, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_10_22: {
    width: 114,
    minWidth: 114,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24,
    top: 15.5
  },
  Text_10_22: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_10_23: {
    width: 283,
    minWidth: 283,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 240
  },
  View_10_24: {
    width: 283,
    minWidth: 283,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(43, 40, 96, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_10_25: {
    width: 98,
    minWidth: 98,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24,
    top: 15.5
  },
  Text_10_25: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_10_26: {
    width: 283,
    minWidth: 283,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 300
  },
  View_10_27: {
    width: 283,
    minWidth: 283,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(43, 40, 96, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_10_28: {
    width: 175,
    minWidth: 175,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24,
    top: 15.5
  },
  Text_10_28: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_10_29: {
    width: 283,
    minWidth: 283,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 360
  },
  View_10_30: {
    width: 283,
    minWidth: 283,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(43, 40, 96, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_10_31: {
    width: 123,
    minWidth: 123,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24,
    top: 15.5
  },
  Text_10_31: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_10_130: {
    width: 283,
    minWidth: 283,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 440
  },
  View_10_131: {
    width: 283,
    minWidth: 283,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(43, 40, 96, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_10_132: {
    width: 62,
    minWidth: 62,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24,
    top: 15.5
  },
  Text_10_132: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_10_451: {
    width: 218,
    minWidth: 218,
    height: 100,
    minHeight: 100,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 102
  },
  ImageBackground_9_8: {
    width: 100,
    minWidth: 100,
    height: 100,
    minHeight: 100,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_10_3: {
    width: 90,
    minWidth: 90,
    minHeight: 38,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 128,
    top: 30
  },
  Text_10_3: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_281: {
    width: 1537,
    minWidth: 1537,
    height: 418,
    minHeight: 418,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 353,
    top: 149
  },
  View_10_103: {
    width: 1537,
    minWidth: 1537,
    height: 418,
    minHeight: 418,
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
  View_10_430: {
    width: 579,
    minWidth: 579,
    height: 17,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30,
    top: 371
  },
  View_10_268: {
    width: 151,
    minWidth: 151,
    height: 17,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_10_266: {
    width: 135,
    minWidth: 135,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 0
  },
  Text_10_266: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_267: {
    width: 7,
    minWidth: 7,
    height: 7,
    minHeight: 7,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 6,
    backgroundColor: "rgba(254, 200, 152, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_10_269: {
    width: 145,
    minWidth: 145,
    height: 17,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 185,
    top: 0
  },
  View_10_270: {
    width: 129,
    minWidth: 129,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 0
  },
  Text_10_270: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_271: {
    width: 7,
    minWidth: 7,
    height: 7,
    minHeight: 7,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 6,
    backgroundColor: "rgba(67, 155, 219, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_10_272: {
    width: 84,
    minWidth: 84,
    height: 17,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 364,
    top: 0
  },
  View_10_273: {
    width: 68,
    minWidth: 68,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 0
  },
  Text_10_273: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_274: {
    width: 7,
    minWidth: 7,
    height: 7,
    minHeight: 7,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 6,
    backgroundColor: "rgba(160, 198, 54, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_10_275: {
    width: 97,
    minWidth: 97,
    height: 17,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 482,
    top: 0
  },
  View_10_276: {
    width: 81,
    minWidth: 81,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 0
  },
  Text_10_276: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_277: {
    width: 7,
    minWidth: 7,
    height: 7,
    minHeight: 7,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 6,
    backgroundColor: "rgba(207, 207, 207, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_10_278: {
    width: 382,
    minWidth: 382,
    height: 38,
    minHeight: 38,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30,
    top: 20
  },
  View_10_118: {
    width: 205,
    minWidth: 205,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_10_118: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_119: {
    width: 382,
    minWidth: 382,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 24
  },
  Text_10_119: {
    color: "rgba(161, 174, 198, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_429: {
    width: 1477,
    minWidth: 1477,
    height: 273,
    minHeight: 273,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30,
    top: 78
  },
  View_10_136: {
    width: 1477,
    minWidth: 1477,
    height: 273,
    minHeight: 273,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_10_133: {
    width: 0.000011933208952541463,
    minWidth: 0.000011933208952541463,
    height: 273,
    minHeight: 273,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30,
    top: 0
  },
  ImageBackground_10_175: {
    width: 1477,
    minWidth: 1477,
    height: 1.8474111129762605e-13,
    minHeight: 1.8474111129762605e-13,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 230
  },
  View_10_215: {
    width: 7,
    minWidth: 7,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9,
    top: 236
  },
  Text_10_215: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  ImageBackground_10_176: {
    width: 1447,
    minWidth: 1447,
    height: 1.7053025658242404e-13,
    minHeight: 1.7053025658242404e-13,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30,
    top: 201
  },
  ImageBackground_10_177: {
    width: 1447,
    minWidth: 1447,
    height: 1.7053025658242404e-13,
    minHeight: 1.7053025658242404e-13,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30,
    top: 171
  },
  ImageBackground_10_178: {
    width: 1447,
    minWidth: 1447,
    height: 1.7053025658242404e-13,
    minHeight: 1.7053025658242404e-13,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30,
    top: 141
  },
  ImageBackground_10_179: {
    width: 1447,
    minWidth: 1447,
    height: 1.7053025658242404e-13,
    minHeight: 1.7053025658242404e-13,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30,
    top: 112
  },
  ImageBackground_10_180: {
    width: 1447,
    minWidth: 1447,
    height: 1.7053025658242404e-13,
    minHeight: 1.7053025658242404e-13,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30,
    top: 82
  },
  ImageBackground_10_181: {
    width: 1447,
    minWidth: 1447,
    height: 1.7053025658242404e-13,
    minHeight: 1.7053025658242404e-13,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30,
    top: 52
  },
  ImageBackground_10_182: {
    width: 1447,
    minWidth: 1447,
    height: 1.7053025658242404e-13,
    minHeight: 1.7053025658242404e-13,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30,
    top: 22
  },
  View_10_135: {
    width: 11,
    minWidth: 11,
    minHeight: 240,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5,
    top: 6
  },
  Text_10_135: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_10_228: {
    width: 24,
    minWidth: 24,
    height: 244,
    minHeight: 244,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 49,
    top: 22
  },
  ImageBackground_10_189: {
    width: 0.00006325037975329906,
    minWidth: 0.00006325037975329906,
    height: 208,
    minHeight: 208,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 12,
    top: 0
  },
  View_10_137: {
    width: 24,
    minWidth: 24,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 214
  },
  Text_10_137: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_10_229: {
    width: 25,
    minWidth: 25,
    height: 244,
    minHeight: 244,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 94,
    top: 22
  },
  ImageBackground_10_188: {
    width: 0.00006325037975329906,
    minWidth: 0.00006325037975329906,
    height: 208,
    minHeight: 208,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 12,
    top: 0
  },
  View_10_138: {
    width: 25,
    minWidth: 25,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 214
  },
  Text_10_138: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_10_227: {
    width: 23,
    minWidth: 23,
    height: 244,
    minHeight: 244,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 140,
    top: 22
  },
  ImageBackground_10_187: {
    width: 0.00006325037975329906,
    minWidth: 0.00006325037975329906,
    height: 208,
    minHeight: 208,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 11,
    top: 0
  },
  View_10_139: {
    width: 23,
    minWidth: 23,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 214
  },
  Text_10_139: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_10_226: {
    width: 27,
    minWidth: 27,
    height: 244,
    minHeight: 244,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 184,
    top: 22
  },
  ImageBackground_10_186: {
    width: 0.00006325037975329906,
    minWidth: 0.00006325037975329906,
    height: 208,
    minHeight: 208,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 13,
    top: 0
  },
  View_10_140: {
    width: 27,
    minWidth: 27,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 214
  },
  Text_10_140: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_10_225: {
    width: 27,
    minWidth: 27,
    height: 244,
    minHeight: 244,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 232,
    top: 22
  },
  ImageBackground_10_185: {
    width: 0.00006325037975329906,
    minWidth: 0.00006325037975329906,
    height: 208,
    minHeight: 208,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 13,
    top: 0
  },
  View_10_141: {
    width: 27,
    minWidth: 27,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 214
  },
  Text_10_141: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_10_224: {
    width: 26,
    minWidth: 26,
    height: 244,
    minHeight: 244,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 280,
    top: 22
  },
  ImageBackground_10_184: {
    width: 0.00006325037975329906,
    minWidth: 0.00006325037975329906,
    height: 208,
    minHeight: 208,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 13,
    top: 0
  },
  View_10_142: {
    width: 26,
    minWidth: 26,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 214
  },
  Text_10_142: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_10_223: {
    width: 27,
    minWidth: 27,
    height: 244,
    minHeight: 244,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 327,
    top: 22
  },
  ImageBackground_10_183: {
    width: 0.00006325037975329906,
    minWidth: 0.00006325037975329906,
    height: 208,
    minHeight: 208,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 13,
    top: 0
  },
  View_10_143: {
    width: 27,
    minWidth: 27,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 214
  },
  Text_10_143: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_10_222: {
    width: 27,
    minWidth: 27,
    height: 244,
    minHeight: 244,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 375,
    top: 22
  },
  ImageBackground_10_196: {
    width: 0.00006325037975329906,
    minWidth: 0.00006325037975329906,
    height: 208,
    minHeight: 208,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 13,
    top: 0
  },
  View_10_145: {
    width: 27,
    minWidth: 27,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 214
  },
  Text_10_145: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_10_221: {
    width: 27,
    minWidth: 27,
    height: 244,
    minHeight: 244,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 423,
    top: 22
  },
  ImageBackground_10_195: {
    width: 0.00006325037975329906,
    minWidth: 0.00006325037975329906,
    height: 208,
    minHeight: 208,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 0
  },
  View_10_146: {
    width: 27,
    minWidth: 27,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 214
  },
  Text_10_146: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_10_220: {
    width: 27,
    minWidth: 27,
    height: 244,
    minHeight: 244,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 471,
    top: 22
  },
  ImageBackground_10_194: {
    width: 0.00006325037975329906,
    minWidth: 0.00006325037975329906,
    height: 208,
    minHeight: 208,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 0
  },
  View_10_144: {
    width: 27,
    minWidth: 27,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 214
  },
  Text_10_144: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_10_219: {
    width: 27,
    minWidth: 27,
    height: 244,
    minHeight: 244,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 519,
    top: 22
  },
  ImageBackground_10_193: {
    width: 0.00006325037975329906,
    minWidth: 0.00006325037975329906,
    height: 208,
    minHeight: 208,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 0
  },
  View_10_147: {
    width: 27,
    minWidth: 27,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 214
  },
  Text_10_147: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_10_218: {
    width: 25,
    minWidth: 25,
    height: 244,
    minHeight: 244,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 567,
    top: 22
  },
  ImageBackground_10_192: {
    width: 0.00006325037975329906,
    minWidth: 0.00006325037975329906,
    height: 208,
    minHeight: 208,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 13,
    top: 0
  },
  View_10_148: {
    width: 25,
    minWidth: 25,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 214
  },
  Text_10_148: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_10_230: {
    width: 29,
    minWidth: 29,
    height: 244,
    minHeight: 244,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 613,
    top: 22
  },
  ImageBackground_10_191: {
    width: 0.00006325037975329906,
    minWidth: 0.00006325037975329906,
    height: 208,
    minHeight: 208,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 0
  },
  View_10_149: {
    width: 29,
    minWidth: 29,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 214
  },
  Text_10_149: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_10_231: {
    width: 28,
    minWidth: 28,
    height: 244,
    minHeight: 244,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 663,
    top: 22
  },
  View_10_150: {
    width: 28,
    minWidth: 28,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 214
  },
  Text_10_150: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  ImageBackground_10_216: {
    width: 0.00006325037975329906,
    minWidth: 0.00006325037975329906,
    height: 208,
    minHeight: 208,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 0
  },
  View_10_232: {
    width: 28,
    minWidth: 28,
    height: 244,
    minHeight: 244,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 712,
    top: 22
  },
  ImageBackground_10_202: {
    width: 0.00006325037975329906,
    minWidth: 0.00006325037975329906,
    height: 208,
    minHeight: 208,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 0
  },
  View_10_151: {
    width: 28,
    minWidth: 28,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 214
  },
  Text_10_151: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_10_233: {
    width: 27,
    minWidth: 27,
    height: 244,
    minHeight: 244,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 761,
    top: 22
  },
  ImageBackground_10_201: {
    width: 0.00006325037975329906,
    minWidth: 0.00006325037975329906,
    height: 208,
    minHeight: 208,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 13,
    top: 0
  },
  View_10_152: {
    width: 27,
    minWidth: 27,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 214
  },
  Text_10_152: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_10_234: {
    width: 28,
    minWidth: 28,
    height: 244,
    minHeight: 244,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 809,
    top: 22
  },
  ImageBackground_10_200: {
    width: 0.00006325037975329906,
    minWidth: 0.00006325037975329906,
    height: 208,
    minHeight: 208,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 0
  },
  View_10_153: {
    width: 28,
    minWidth: 28,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 214
  },
  Text_10_153: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_10_235: {
    width: 28,
    minWidth: 28,
    height: 244,
    minHeight: 244,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 858,
    top: 22
  },
  ImageBackground_10_199: {
    width: 0.00006325037975329906,
    minWidth: 0.00006325037975329906,
    height: 208,
    minHeight: 208,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 0
  },
  View_10_154: {
    width: 28,
    minWidth: 28,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 214
  },
  Text_10_154: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_10_236: {
    width: 29,
    minWidth: 29,
    height: 244,
    minHeight: 244,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 907,
    top: 22
  },
  ImageBackground_10_198: {
    width: 0.00006325037975329906,
    minWidth: 0.00006325037975329906,
    height: 208,
    minHeight: 208,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 0
  },
  View_10_155: {
    width: 29,
    minWidth: 29,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 214
  },
  Text_10_155: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_10_238: {
    width: 29,
    minWidth: 29,
    height: 244,
    minHeight: 244,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1006,
    top: 22
  },
  ImageBackground_10_210: {
    width: 0.00006325037975329906,
    minWidth: 0.00006325037975329906,
    height: 208,
    minHeight: 208,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 0
  },
  View_10_156: {
    width: 29,
    minWidth: 29,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 214
  },
  Text_10_156: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_10_239: {
    width: 26,
    minWidth: 26,
    height: 244,
    minHeight: 244,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1056,
    top: 22
  },
  ImageBackground_10_209: {
    width: 0.00006325037975329906,
    minWidth: 0.00006325037975329906,
    height: 208,
    minHeight: 208,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 13,
    top: 0
  },
  View_10_158: {
    width: 26,
    minWidth: 26,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 214
  },
  Text_10_158: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_10_240: {
    width: 29,
    minWidth: 29,
    height: 244,
    minHeight: 244,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1103,
    top: 22
  },
  ImageBackground_10_208: {
    width: 0.00006325037975329906,
    minWidth: 0.00006325037975329906,
    height: 208,
    minHeight: 208,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 0
  },
  View_10_159: {
    width: 29,
    minWidth: 29,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 214
  },
  Text_10_159: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_10_241: {
    width: 26,
    minWidth: 26,
    height: 244,
    minHeight: 244,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1153,
    top: 22
  },
  ImageBackground_10_207: {
    width: 0.00006325037975329906,
    minWidth: 0.00006325037975329906,
    height: 208,
    minHeight: 208,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 13,
    top: 0
  },
  View_10_160: {
    width: 26,
    minWidth: 26,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 214
  },
  Text_10_160: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_10_242: {
    width: 26,
    minWidth: 26,
    height: 244,
    minHeight: 244,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1200,
    top: 22
  },
  ImageBackground_10_206: {
    width: 0.00006325037975329906,
    minWidth: 0.00006325037975329906,
    height: 208,
    minHeight: 208,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 12,
    top: 0
  },
  View_10_161: {
    width: 26,
    minWidth: 26,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 214
  },
  Text_10_161: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_10_243: {
    width: 25,
    minWidth: 25,
    height: 244,
    minHeight: 244,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1247,
    top: 22
  },
  ImageBackground_10_205: {
    width: 0.00006325037975329906,
    minWidth: 0.00006325037975329906,
    height: 208,
    minHeight: 208,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 12,
    top: 0
  },
  View_10_162: {
    width: 25,
    minWidth: 25,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 214
  },
  Text_10_162: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_10_244: {
    width: 26,
    minWidth: 26,
    height: 244,
    minHeight: 244,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1293,
    top: 22
  },
  ImageBackground_10_204: {
    width: 0.00006325037975329906,
    minWidth: 0.00006325037975329906,
    height: 208,
    minHeight: 208,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 12,
    top: 0
  },
  View_10_163: {
    width: 26,
    minWidth: 26,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 214
  },
  Text_10_163: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_10_246: {
    width: 26,
    minWidth: 26,
    height: 244,
    minHeight: 244,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1340,
    top: 22
  },
  View_10_245: {
    width: 26,
    minWidth: 26,
    height: 244,
    minHeight: 244,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_10_214: {
    width: 0.00006325037975329906,
    minWidth: 0.00006325037975329906,
    height: 208,
    minHeight: 208,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 13,
    top: 0
  },
  View_10_164: {
    width: 26,
    minWidth: 26,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 214
  },
  Text_10_164: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_10_247: {
    width: 27,
    minWidth: 27,
    height: 244,
    minHeight: 244,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1387,
    top: 22
  },
  ImageBackground_10_213: {
    width: 0.00006325037975329906,
    minWidth: 0.00006325037975329906,
    height: 208,
    minHeight: 208,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 13,
    top: 0
  },
  View_10_165: {
    width: 27,
    minWidth: 27,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 214
  },
  Text_10_165: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_10_248: {
    width: 26,
    minWidth: 26,
    height: 244,
    minHeight: 244,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1435,
    top: 22
  },
  ImageBackground_10_212: {
    width: 0.00006325037975329906,
    minWidth: 0.00006325037975329906,
    height: 208,
    minHeight: 208,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 13,
    top: 0
  },
  View_10_166: {
    width: 26,
    minWidth: 26,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 214
  },
  Text_10_166: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_10_237: {
    width: 28,
    minWidth: 28,
    height: 244,
    minHeight: 244,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 957,
    top: 22
  },
  ImageBackground_10_197: {
    width: 0.00006325037975329906,
    minWidth: 0.00006325037975329906,
    height: 208,
    minHeight: 208,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 0
  },
  View_10_157: {
    width: 28,
    minWidth: 28,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 214
  },
  Text_10_157: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  ImageBackground_10_168: {
    width: 1447,
    minWidth: 1447,
    height: 133,
    minHeight: 133,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30,
    top: 54
  },
  ImageBackground_10_252: {
    width: 1447,
    minWidth: 1447,
    height: 94,
    minHeight: 94,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30,
    top: 111
  },
  View_10_280: {
    width: 161,
    minWidth: 161,
    height: 45,
    minHeight: 45,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 722,
    top: 28
  },
  View_10_254: {
    width: 161,
    minWidth: 161,
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(254, 200, 152, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_10_255: {
    width: 7,
    minWidth: 7,
    height: 7,
    minHeight: 7,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1,
    top: 38,
    backgroundColor: "rgba(254, 200, 152, 1)",
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_10_258: {
    width: 148,
    minWidth: 148,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4,
    top: 0
  },
  Text_10_258: {
    color: "rgba(149, 88, 35, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_411: {
    width: 1537,
    minWidth: 1537,
    height: 78,
    minHeight: 78,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 353,
    top: 934
  },
  View_10_412: {
    width: 1537,
    minWidth: 1537,
    height: 78,
    minHeight: 78,
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
  View_10_413: {
    width: 497,
    minWidth: 497,
    height: 38,
    minHeight: 38,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30,
    top: 20
  },
  View_10_426: {
    width: 497,
    minWidth: 497,
    height: 38,
    minHeight: 38,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_10_427: {
    width: 94,
    minWidth: 94,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_10_427: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_428: {
    width: 497,
    minWidth: 497,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 24
  },
  Text_10_428: {
    color: "rgba(161, 174, 198, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_447: {
    width: 204,
    minWidth: 204,
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1656,
    top: 198
  },
  View_10_433: {
    width: 204,
    minWidth: 204,
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(223, 231, 238, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  ImageBackground_10_446: {
    width: 18,
    height: 20,
    top: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 164
  },
  View_10_439: {
    width: 31,
    minWidth: 31,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 11
  },
  Text_10_439: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_441: {
    width: 33,
    minWidth: 33,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 109,
    top: 11
  },
  Text_10_441: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_440: {
    width: 13,
    minWidth: 13,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 75,
    top: 11
  },
  Text_10_440: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_542: {
    width: 1537,
    minWidth: 1537,
    height: 307,
    minHeight: 307,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 353,
    top: 597
  },
  View_10_283: {
    width: 1537,
    minWidth: 1537,
    height: 307,
    minHeight: 307,
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
  View_10_297: {
    width: 497,
    minWidth: 497,
    height: 38,
    minHeight: 38,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30,
    top: 20
  },
  View_10_298: {
    width: 81,
    minWidth: 81,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_10_298: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_299: {
    width: 497,
    minWidth: 497,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 24
  },
  Text_10_299: {
    color: "rgba(161, 174, 198, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_472: {
    width: 1477,
    minWidth: 1477,
    height: 112,
    minHeight: 112,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30,
    top: 78,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(223, 231, 238, 1)",
    borderWidth: 1
  },
  View_10_501: {
    width: 94,
    minWidth: 94,
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1135,
    top: 144
  },
  View_10_502: {
    width: 94,
    minWidth: 94,
    height: 24,
    minHeight: 24,
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
  View_10_504: {
    width: 62,
    minWidth: 62,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 0
  },
  Text_10_504: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_488: {
    width: 99,
    minWidth: 99,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 50,
    top: 98
  },
  Text_10_488: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_474: {
    width: 191,
    minWidth: 191,
    height: 46,
    minHeight: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 50,
    top: 124
  },
  View_10_484: {
    width: 191,
    minWidth: 191,
    height: 46,
    minHeight: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_10_485: {
    width: 71,
    minWidth: 71,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_10_485: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_487: {
    width: 191,
    minWidth: 191,
    height: 28,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 18,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(223, 231, 238, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  ImageBackground_10_513: {
    width: 18.707000732421875,
    height: 18.70800018310547,
    top: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 165
  },
  View_10_489: {
    width: 191,
    minWidth: 191,
    height: 46,
    minHeight: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 261,
    top: 124
  },
  View_10_490: {
    width: 191,
    minWidth: 191,
    height: 46,
    minHeight: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_10_491: {
    width: 31,
    minWidth: 31,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_10_491: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_492: {
    width: 191,
    minWidth: 191,
    height: 28,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 18,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(223, 231, 238, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_10_493: {
    width: 191,
    minWidth: 191,
    height: 46,
    minHeight: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 472,
    top: 124
  },
  View_10_494: {
    width: 191,
    minWidth: 191,
    height: 46,
    minHeight: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_10_495: {
    width: 35,
    minWidth: 35,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_10_495: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_496: {
    width: 191,
    minWidth: 191,
    height: 28,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 18,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(223, 231, 238, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_10_497: {
    width: 191,
    minWidth: 191,
    height: 46,
    minHeight: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 683,
    top: 124
  },
  View_10_498: {
    width: 191,
    minWidth: 191,
    height: 46,
    minHeight: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_10_499: {
    width: 48,
    minWidth: 48,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_10_499: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_500: {
    width: 191,
    minWidth: 191,
    height: 28,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 18,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(223, 231, 238, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_10_543: {
    width: 191,
    minWidth: 191,
    height: 46,
    minHeight: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 894,
    top: 124
  },
  View_10_544: {
    width: 191,
    minWidth: 191,
    height: 46,
    minHeight: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_10_545: {
    width: 32,
    minWidth: 32,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_10_545: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_546: {
    width: 191,
    minWidth: 191,
    height: 28,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 18,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(223, 231, 238, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_10_520: {
    width: 1477,
    minWidth: 1477,
    height: 29,
    minHeight: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30,
    top: 189
  },
  View_10_473: {
    width: 1477,
    minWidth: 1477,
    height: 29,
    minHeight: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(223, 231, 238, 1)",
    borderWidth: 1
  },
  View_10_507: {
    width: 51,
    minWidth: 51,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 83,
    top: 8
  },
  Text_10_507: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_508: {
    width: 31,
    minWidth: 31,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 164,
    top: 8
  },
  Text_10_508: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_519: {
    width: 33,
    minWidth: 33,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 8
  },
  Text_10_519: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_509: {
    width: 21,
    minWidth: 21,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 272,
    top: 8
  },
  Text_10_509: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_510: {
    width: 87,
    minWidth: 87,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 827,
    top: 8
  },
  Text_10_510: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_511: {
    width: 87,
    minWidth: 87,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1007,
    top: 8
  },
  Text_10_511: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_512: {
    width: 32,
    minWidth: 32,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1174,
    top: 8
  },
  Text_10_512: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_514: {
    width: 65,
    minWidth: 65,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1299,
    top: 8
  },
  Text_10_514: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_515: {
    width: 30,
    minWidth: 30,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 370,
    top: 8
  },
  Text_10_515: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_516: {
    width: 34,
    minWidth: 34,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 523,
    top: 8
  },
  Text_10_516: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_517: {
    width: 75,
    minWidth: 75,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 693,
    top: 8
  },
  Text_10_517: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_521: {
    width: 1477,
    minWidth: 1477,
    height: 60,
    minHeight: 60,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30,
    top: 217
  },
  View_10_522: {
    width: 1477,
    minWidth: 1477,
    height: 60,
    minHeight: 60,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(223, 231, 238, 1)",
    borderWidth: 1
  },
  View_10_541: {
    width: 83,
    minWidth: 83,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1299,
    top: 23
  },
  Text_10_541: {
    color: "rgba(0, 71, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_535: {
    width: 34,
    minWidth: 34,
    height: 34,
    minHeight: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1174,
    top: 13
  },
  View_10_536: {
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
  View_10_537: {
    width: 6,
    minWidth: 6,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 7
  },
  Text_10_537: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_538: {
    width: 34,
    minWidth: 34,
    height: 34,
    minHeight: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1218,
    top: 13
  },
  View_10_539: {
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
  View_10_540: {
    width: 9,
    minWidth: 9,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 13,
    top: 7
  },
  Text_10_540: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10_534: {
    width: 40,
    minWidth: 40,
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17,
    top: 10
  },
  View_10_523: {
    width: 54,
    minWidth: 54,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 83,
    top: 23
  },
  Text_10_523: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_524: {
    width: 55,
    minWidth: 55,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 164,
    top: 23
  },
  Text_10_524: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_526: {
    width: 13,
    minWidth: 13,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 272,
    top: 23
  },
  Text_10_526: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_527: {
    width: 48,
    minWidth: 48,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 827,
    top: 23
  },
  Text_10_527: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_528: {
    width: 36,
    minWidth: 36,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1007,
    top: 23
  },
  Text_10_528: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_531: {
    width: 97,
    minWidth: 97,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 370,
    top: 23
  },
  Text_10_531: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_532: {
    width: 73,
    minWidth: 73,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 523,
    top: 23
  },
  Text_10_532: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_533: {
    width: 7,
    minWidth: 7,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 693,
    top: 23
  },
  Text_10_533: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2: { height: 1080 }
})
const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
