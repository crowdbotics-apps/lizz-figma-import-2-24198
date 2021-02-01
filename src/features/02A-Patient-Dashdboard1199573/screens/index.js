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
        style={styles.ImageBackground_7_923}
      />
      <View style={styles.View_7_924}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3fed/a8bc/102157f6c7d16a0fd81f423cf643b4d8"
          }}
          style={styles.ImageBackground_7_925}
        />
        <View style={styles.View_7_926} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7bec/eb73/bd55e0e53f289adf6bae404c9c8b0cf5"
          }}
          style={styles.ImageBackground_7_1184}
        />
        <View style={styles.View_8_26}>
          <View style={styles.View_I8_26_7_2462} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7bec/eb73/bd55e0e53f289adf6bae404c9c8b0cf5"
          }}
          style={styles.ImageBackground_7_2328}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0745/eb51/8639071b03301a12bd077c91d64d14b9"
          }}
          style={styles.ImageBackground_7_2324}
        />
        <View style={styles.View_7_1322}>
          <View style={styles.View_7_1318}>
            <View style={styles.View_7_1296} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/992b/c743/5cc1e9fe63978c823c48e34e04cf779f"
              }}
              style={styles.ImageBackground_7_1508}
            />
            <View style={styles.View_7_1342}>
              <Text style={styles.Text_7_1342}>Track your daily progress</Text>
            </View>
            <View style={styles.View_7_1313} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5caa/92c3/2cf2b797fbbb4d79f974dc53e37bbaf1"
              }}
              style={styles.ImageBackground_7_1350}
            />
            <View style={styles.View_7_1304}>
              <Text style={styles.Text_7_1304}>Add a vital</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/48c9/bafe/e11e8084d74c9d947980abfeaa053abf"
              }}
              style={styles.ImageBackground_7_1344}
            />
          </View>
          <View style={styles.View_7_1319}>
            <View style={styles.View_7_1297} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/992b/c743/5cc1e9fe63978c823c48e34e04cf779f"
              }}
              style={styles.ImageBackground_7_1507}
            />
            <View style={styles.View_7_1341}>
              <Text style={styles.Text_7_1341}>
                Find healthcare professionals
              </Text>
            </View>
            <View style={styles.View_7_1312} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8355/7c28/cd4c8c809fa616f0a8e7a894a1d13873"
              }}
              style={styles.ImageBackground_7_1315}
            />
            <View style={styles.View_7_1303}>
              <Text style={styles.Text_7_1303}>Messages</Text>
            </View>
          </View>
          <View style={styles.View_7_1320}>
            <View style={styles.View_7_1298} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/992b/c743/5cc1e9fe63978c823c48e34e04cf779f"
              }}
              style={styles.ImageBackground_7_1506}
            />
            <View style={styles.View_7_1340}>
              <Text style={styles.Text_7_1340}>See your daily todo list</Text>
            </View>
            <View style={styles.View_7_1311} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/84c9/6a17/18150900ac0097a682d11418b83bbe5a"
              }}
              style={styles.ImageBackground_7_1331}
            />
            <View style={styles.View_7_1302}>
              <Text style={styles.Text_7_1302}>Daily Plan</Text>
            </View>
          </View>
          <View style={styles.View_7_1321}>
            <View style={styles.View_7_1299} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/992b/c743/5cc1e9fe63978c823c48e34e04cf779f"
              }}
              style={styles.ImageBackground_7_1505}
            />
            <View style={styles.View_7_1343}>
              <Text style={styles.Text_7_1343}>
                Get in touch with a healthcare provider
              </Text>
            </View>
            <View style={styles.View_7_1310} />
            <View style={styles.View_7_1301}>
              <Text style={styles.Text_7_1301}>Contact provider </Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ca1/2576/d705d2f46bd445e7f1cb988468fbed6a"
              }}
              style={styles.ImageBackground_7_1338}
            />
          </View>
        </View>
        <View style={styles.View_7_1132}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc1f/8c13/084b07cc68d2c0f62be3cedabd5f1aac"
            }}
            style={styles.ImageBackground_7_930}
          />
          <View style={styles.View_7_931}>
            <View style={styles.View_7_932}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/34bf/ca20/c6a4d79f7369dbcee516a83f1452a136"
                }}
                style={styles.ImageBackground_7_933}
              />
              <View style={styles.View_7_934} />
              <View style={styles.View_7_935} />
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/837f/6ba9/3f05af42afe32c8a27381414da280f0a"
          }}
          style={styles.ImageBackground_7_929}
        />
        <View style={styles.View_7_1205}>
          <View style={styles.View_7_1185} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/28a4/9f9a/f904f65432d05faae2e747d2391933c7"
            }}
            style={styles.ImageBackground_7_1190}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a00f/f853/19a9b43df70eced576d3e462921e86bf"
            }}
            style={styles.ImageBackground_7_1192}
          />
          <View style={styles.View_7_1189}>
            <View style={styles.View_7_1187}>
              <Text style={styles.Text_7_1187}>Take Vitals</Text>
            </View>
            <View style={styles.View_7_1188}>
              <Text style={styles.Text_7_1188}>9:00 am</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_7_1206}>
          <View style={styles.View_7_1186} />
          <View style={styles.View_7_1200}>
            <View style={styles.View_7_1201}>
              <Text style={styles.Text_7_1201}>Take medication</Text>
            </View>
            <View style={styles.View_7_1202}>
              <Text style={styles.Text_7_1202}>10:00 am</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0078/d8a2/3ea3b32dd7fa7fd8a8e27e12c1b54437"
            }}
            style={styles.ImageBackground_7_1196}
          />
        </View>
        <View style={styles.View_7_1235}>
          <View style={styles.View_7_1236} />
          <View style={styles.View_7_1237}>
            <View style={styles.View_7_1238}>
              <Text style={styles.Text_7_1238}>Take medication</Text>
            </View>
            <View style={styles.View_7_1239}>
              <Text style={styles.Text_7_1239}>10:00 am</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a132/37c2/e0ba8dd09692a9328464a97c42270c45"
            }}
            style={styles.ImageBackground_7_1240}
          />
        </View>
      </View>
      <View style={styles.View_7_1247}>
        <View style={styles.View_7_1248}>
          <View style={styles.View_7_1249} />
          <View style={styles.View_7_1250} />
          <View style={styles.View_7_1251} />
        </View>
      </View>
      <View style={styles.View_7_1133}>
        <View style={styles.View_7_1134}>
          <Text style={styles.Text_7_1134}>Home</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1675/a48e/3af26d0ba04b2b4646a7ea93f820d24c"
          }}
          style={styles.ImageBackground_7_1135}
        />
      </View>
      <View style={styles.View_7_1136}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cb82/385e/eb6f64bf03169136908730bea60a2761"
          }}
          style={styles.ImageBackground_7_1137}
        />
        <View style={styles.View_7_1138}>
          <Text style={styles.Text_7_1138}>Progress</Text>
        </View>
      </View>
      <View style={styles.View_7_1139}>
        <View style={styles.View_7_1140}>
          <Text style={styles.Text_7_1140}>Messages</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2839/52b2/a12ccd6a164aa8f8f3a3c956f8340c40"
          }}
          style={styles.ImageBackground_7_1141}
        />
      </View>
      <View style={styles.View_7_1142}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8449/7e95/c09f3430d4a2053780cc57e34c862389"
          }}
          style={styles.ImageBackground_7_1143}
        />
        <View style={styles.View_7_1144}>
          <Text style={styles.Text_7_1144}>Appointments</Text>
        </View>
      </View>
      <View style={styles.View_7_1145}>
        <View style={styles.View_7_1146}>
          <View style={styles.View_7_1147}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f78b/ce17/880e8eceebe21ea6132a7ffd2f810431"
              }}
              style={styles.ImageBackground_7_1148}
            />
            <View style={styles.View_7_1149} />
            <View style={styles.View_7_1150} />
          </View>
        </View>
        <View style={styles.View_7_1151}>
          <Text style={styles.Text_7_1151}>More</Text>
        </View>
      </View>
      <View style={styles.View_7_1680}>
        <View style={styles.View_7_1295} />
        <View style={styles.View_7_1479}>
          <Text style={styles.Text_7_1479}>Last measurement: 15 min ago</Text>
        </View>
        <View style={styles.View_7_1478}>
          <View style={styles.View_7_1473} />
          <View style={styles.View_7_1413}>
            <View style={styles.View_7_1414}>
              <View style={styles.View_7_1415}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e86/56e3/c328bd5108541dcb6f3163b8dc3f64d4"
                  }}
                  style={styles.ImageBackground_7_1416}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fdd3/8e3d/701d3de9888d194310a713841d6b3fdc"
                  }}
                  style={styles.ImageBackground_7_1417}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e7c/4692/c23b8e215f56fef611f38f21718391fb"
                  }}
                  style={styles.ImageBackground_7_1418}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/206f/af1e/ef4764d2ce4727565bc4ddf80dca777c"
                  }}
                  style={styles.ImageBackground_7_1419}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/960c/01a8/5dcd39fcbb7cdf93098326c83f6ceea4"
                  }}
                  style={styles.ImageBackground_7_1420}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7de1/5d3e/6934ebab7d9e9a788c0d69348e520fcc"
                  }}
                  style={styles.ImageBackground_7_1421}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4ff8/d113/322b2e942ed213aef23306813deb7f8f"
                  }}
                  style={styles.ImageBackground_7_1422}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef62/c984/de77cae3d299333a10ff3469039ad439"
                  }}
                  style={styles.ImageBackground_7_1423}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ab2/20b4/43e11efddacf9bd17ed315c96a501e9d"
                  }}
                  style={styles.ImageBackground_7_1424}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de14/bdc6/24434b7dd2c5abf4bde856c6ac70d5e7"
                  }}
                  style={styles.ImageBackground_7_1428}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da20/a11d/974d8686bad558f672d3045e64a4a2a5"
                  }}
                  style={styles.ImageBackground_7_1429}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3506/df47/a42c54be5ed953d8153625e6634fe11e"
                  }}
                  style={styles.ImageBackground_7_1430}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0f2b/3c96/b2344cc0c5a488cd8f6c73e2a9477851"
                  }}
                  style={styles.ImageBackground_7_1433}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/98d4/4071/b803d5b9e4f1dd12067142cd4827e33f"
                  }}
                  style={styles.ImageBackground_7_1434}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/728e/734b/ba3d51e7c48eaff4e45b0cad7a858064"
                }}
                style={styles.ImageBackground_7_1435}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5696/7f7c/84a07394808fd1ccca8cb7d288a04f87"
                }}
                style={styles.ImageBackground_7_1436}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6bb6/b9fc/ba07e5b7ea4175de2c81bafa800597d0"
                }}
                style={styles.ImageBackground_7_1437}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05f7/a451/aa7537fee3e530fb3cef048109e274e3"
                }}
                style={styles.ImageBackground_7_1438}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1237/9014/d8740b6b023af337b64a8c4951bf89d5"
                }}
                style={styles.ImageBackground_7_1439}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ab4d/c77f/1cf7f840e4b21f5cc50259e31bab1d11"
                }}
                style={styles.ImageBackground_7_1440}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e2c7/0d5f/91ce6783a3b4ffc3eab6ae1188a2fe0a"
                }}
                style={styles.ImageBackground_7_1441}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dbbe/32d5/94f81110cb5d51db003c017cbf01a7a1"
                }}
                style={styles.ImageBackground_7_1442}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0063/2714/57bfda5115b29396a527c95cc5c02c0c"
                }}
                style={styles.ImageBackground_7_1443}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/136e/0595/67ff2ed16869920af5dad7f2c0578425"
                }}
                style={styles.ImageBackground_7_1444}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d47d/4251/1f2dd8e332b8f6d3c1e5cec75b877a18"
                }}
                style={styles.ImageBackground_7_1445}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0872/ac94/439c34044ae852e79f4bc9d747364471"
                }}
                style={styles.ImageBackground_7_1446}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/998f/069d/4aa694fdd49a7f85385d545ab7e4ec52"
                }}
                style={styles.ImageBackground_7_1447}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1f2/76c1/1ed8e9c09a1688d6100517ae496ee58e"
                }}
                style={styles.ImageBackground_7_1448}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1bd/b07e/b747b1ea6d556989856591d163c166f6"
                }}
                style={styles.ImageBackground_7_1449}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b48e/24d0/1b50fa91a1f4fcf9293fa3327310f247"
                }}
                style={styles.ImageBackground_7_1450}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/33ec/12f0/0e920807058f73f21594d3b0be7aee1b"
                }}
                style={styles.ImageBackground_7_1451}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f5de/1cc7/0aa49c96c05a3eefa0a6653ad8db0e49"
                }}
                style={styles.ImageBackground_7_1452}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ccca/227c/1d9905825ef4ff2a49fb4ba8c112dc33"
                }}
                style={styles.ImageBackground_7_1453}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d675/3d07/acbdeb174b5c20c400665ad932b3d08f"
                }}
                style={styles.ImageBackground_7_1454}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/717d/3c22/1da330f30792ec963a364cb13d13e0dc"
                }}
                style={styles.ImageBackground_7_1455}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/48a3/72c2/17ad285fcba76d0e5285c5696c641383"
                }}
                style={styles.ImageBackground_7_1456}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a622/b37f/d697c7ba2aaefec02c578e57e5de4a9f"
                }}
                style={styles.ImageBackground_7_1457}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ade3/b151/439f3cf5d0004df70ba4d1f7f20377f5"
                }}
                style={styles.ImageBackground_7_1458}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b70c/7ccc/075b36bc7b338be3176467cddd73a62d"
                }}
                style={styles.ImageBackground_7_1459}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ec2/3760/7b253ddb5d0c28c12c171f356ec77752"
                }}
                style={styles.ImageBackground_7_1460}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c44a/38ce/f8277982e7c4f3960c479797b57ec672"
                }}
                style={styles.ImageBackground_7_1461}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4758/9306/82fa8b0158fd5649ba9494689ceb2ce0"
                }}
                style={styles.ImageBackground_7_1462}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a6f2/bf52/62bc3db86d6265e0f2b9a26cfb43a74c"
                }}
                style={styles.ImageBackground_7_1463}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4914/7479/3b9c6d11dc26918d818b208063831242"
              }}
              style={styles.ImageBackground_7_1464}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c7c1/a469/bce39263e93b5a698b1fa76531e31950"
              }}
              style={styles.ImageBackground_7_1465}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2af3/0f22/172e692b7e3a2f647d3df96c639a8fe5"
              }}
              style={styles.ImageBackground_7_1466}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/86f1/f10e/c8053ff305abe355fb69d07a2df30ad0"
              }}
              style={styles.ImageBackground_7_1467}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/26b8/9757/79ec6ab915098d50f45dc3e471adfeff"
              }}
              style={styles.ImageBackground_7_1468}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc5b/1577/fc28ae763ae9eff7f5eac5246c80bec7"
              }}
              style={styles.ImageBackground_7_1469}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4f2e/3a84/bc4cfb30d9497c0ceefb3fbca58ecd2d"
              }}
              style={styles.ImageBackground_7_1470}
            />
          </View>
          <View style={styles.View_7_1471}>
            <Text style={styles.Text_7_1471}>Heart rate</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4d77/37b7/88a23fff7a909cee46963928334b942e"
            }}
            style={styles.ImageBackground_7_1476}
          />
          <View style={styles.View_7_1472}>
            <Text style={styles.Text_7_1472}>102</Text>
          </View>
          <View style={styles.View_7_1480}>
            <Text style={styles.Text_7_1480}>bpm</Text>
          </View>
        </View>
        <View style={styles.View_7_1477}>
          <View style={styles.View_7_1474} />
          <View style={styles.View_7_1475} />
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  ImageBackground_7_923: {
    width: 444,
    height: 920,
    top: -11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -15
  },
  View_7_924: {
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
  ImageBackground_7_925: {
    width: 413.1776428222656,
    height: 893.6680297851562,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_7_926: {
    width: 413.1776428222656,
    minWidth: 413.1776428222656,
    height: 893.6680297851562,
    minHeight: 893.6680297851562,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(223, 231, 238, 1)"
  },
  ImageBackground_7_1184: {
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
  View_8_26: {
    width: 414,
    minWidth: 414,
    height: 909,
    minHeight: 909,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -0.42529296875,
    top: -8.125,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I8_26_7_2462: {
    flexGrow: 1,
    width: 414,
    height: 909,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_7_2328: {
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
  ImageBackground_7_2324: {
    width: 879.253173828125,
    minWidth: 879.253173828125,
    height: 879.253173828125,
    minHeight: 879.253173828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -367.800537109375,
    top: -531.378173828125
  },
  View_7_1322: {
    width: 394,
    minWidth: 394,
    height: 310,
    minHeight: 310,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9.57470703125,
    top: 484.875
  },
  View_7_1318: {
    width: 394,
    minWidth: 394,
    height: 70,
    minHeight: 70,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 240
  },
  View_7_1296: {
    width: 394,
    minWidth: 394,
    height: 70,
    minHeight: 70,
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
  ImageBackground_7_1508: {
    width: 6.74868631362915,
    height: 9,
    top: 32.001220703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 363
  },
  View_7_1342: {
    width: 124,
    minWidth: 124,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 77,
    top: 40
  },
  Text_7_1342: {
    color: "rgba(174, 174, 174, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_1313: {
    width: 50,
    minWidth: 50,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10,
    top: 10,
    backgroundColor: "rgba(66, 218, 180, 1)",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  ImageBackground_7_1350: {
    width: 24,
    height: 22,
    top: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 23
  },
  View_7_1304: {
    width: 72,
    minWidth: 72,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 77,
    top: 16
  },
  Text_7_1304: {
    color: "rgba(63, 64, 66, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_7_1344: {
    width: 16,
    height: 16,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_7_1319: {
    width: 394,
    minWidth: 394,
    height: 70,
    minHeight: 70,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 160
  },
  View_7_1297: {
    width: 394,
    minWidth: 394,
    height: 70,
    minHeight: 70,
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
  ImageBackground_7_1507: {
    width: 6.74868631362915,
    height: 9,
    top: 32.001220703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 363
  },
  View_7_1341: {
    width: 146,
    minWidth: 146,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 77,
    top: 40
  },
  Text_7_1341: {
    color: "rgba(174, 174, 174, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_1312: {
    width: 50,
    minWidth: 50,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10,
    top: 10,
    backgroundColor: "rgba(66, 218, 180, 1)",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  ImageBackground_7_1315: {
    width: 24,
    height: 22,
    top: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 23
  },
  View_7_1303: {
    width: 71,
    minWidth: 71,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 77,
    top: 16
  },
  Text_7_1303: {
    color: "rgba(63, 64, 66, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_1320: {
    width: 394,
    minWidth: 394,
    height: 70,
    minHeight: 70,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 80
  },
  View_7_1298: {
    width: 394,
    minWidth: 394,
    height: 70,
    minHeight: 70,
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
  ImageBackground_7_1506: {
    width: 6.74868631362915,
    height: 9,
    top: 32.001220703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 363
  },
  View_7_1340: {
    width: 112,
    minWidth: 112,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 77,
    top: 40
  },
  Text_7_1340: {
    color: "rgba(174, 174, 174, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_1311: {
    width: 50,
    minWidth: 50,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10,
    top: 10,
    backgroundColor: "rgba(66, 218, 180, 1)",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  ImageBackground_7_1331: {
    width: 21,
    height: 21,
    top: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24
  },
  View_7_1302: {
    width: 68,
    minWidth: 68,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 77,
    top: 16
  },
  Text_7_1302: {
    color: "rgba(63, 64, 66, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_1321: {
    width: 394,
    minWidth: 394,
    height: 70,
    minHeight: 70,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_7_1299: {
    width: 394,
    minWidth: 394,
    height: 70,
    minHeight: 70,
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
  ImageBackground_7_1505: {
    width: 6.74868631362915,
    height: 9,
    top: 32.001220703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 363
  },
  View_7_1343: {
    width: 192,
    minWidth: 192,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 77,
    top: 39
  },
  Text_7_1343: {
    color: "rgba(174, 174, 174, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_1310: {
    width: 50,
    minWidth: 50,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10,
    top: 10,
    backgroundColor: "rgba(66, 218, 180, 1)",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  View_7_1301: {
    width: 116,
    minWidth: 116,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 77,
    top: 16
  },
  Text_7_1301: {
    color: "rgba(63, 64, 66, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_7_1338: {
    width: 22,
    height: 22,
    top: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24
  },
  View_7_1132: {
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
  ImageBackground_7_930: {
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
  View_7_931: {
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
  View_7_932: {
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
  ImageBackground_7_933: {
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
  View_7_934: {
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
  View_7_935: {
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
  ImageBackground_7_929: {
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
  View_7_1205: {
    width: 183,
    minWidth: 183,
    height: 80,
    minHeight: 80,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8.57470703125,
    top: 138.875
  },
  View_7_1185: {
    width: 183,
    minWidth: 183,
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
  ImageBackground_7_1190: {
    width: 16,
    height: 16,
    top: 47,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20
  },
  ImageBackground_7_1192: {
    width: 19,
    minWidth: 19,
    height: 5,
    minHeight: 5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 144,
    top: 22
  },
  View_7_1189: {
    width: 104,
    minWidth: 104,
    height: 49,
    minHeight: 49,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 15
  },
  View_7_1187: {
    width: 74,
    minWidth: 74,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30,
    top: 30
  },
  Text_7_1187: {
    color: "rgba(174, 174, 174, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_1188: {
    width: 55,
    minWidth: 55,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_7_1188: {
    color: "rgba(174, 174, 174, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_1206: {
    width: 183,
    minWidth: 183,
    height: 80,
    minHeight: 80,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 201.57470703125,
    top: 138.875
  },
  View_7_1186: {
    width: 183,
    minWidth: 183,
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
  View_7_1200: {
    width: 112,
    minWidth: 112,
    height: 49,
    minHeight: 49,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 15
  },
  View_7_1201: {
    width: 112,
    minWidth: 112,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 30
  },
  Text_7_1201: {
    color: "rgba(63, 64, 66, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_1202: {
    width: 62,
    minWidth: 62,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_7_1202: {
    color: "rgba(63, 64, 66, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_7_1196: {
    width: 19,
    minWidth: 19,
    height: 5,
    minHeight: 5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 144,
    top: 22
  },
  View_7_1235: {
    width: 183,
    minWidth: 183,
    height: 80,
    minHeight: 80,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 394.57470703125,
    top: 138.875
  },
  View_7_1236: {
    width: 183,
    minWidth: 183,
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
  View_7_1237: {
    width: 112,
    minWidth: 112,
    height: 51,
    minHeight: 51,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 11
  },
  View_7_1238: {
    width: 112,
    minWidth: 112,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 32
  },
  Text_7_1238: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_1239: {
    width: 62,
    minWidth: 62,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_7_1239: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_7_1240: {
    width: 19,
    minWidth: 19,
    height: 5,
    minHeight: 5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 144,
    top: 18
  },
  View_7_1247: {
    width: 34,
    minWidth: 34,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 190,
    top: 239
  },
  View_7_1248: {
    width: 34,
    minWidth: 34,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_7_1249: {
    width: 8,
    minWidth: 8,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(63, 64, 66, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_7_1250: {
    width: 8,
    minWidth: 8,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 13,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_7_1251: {
    width: 8,
    minWidth: 8,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_7_1133: {
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
  View_7_1134: {
    width: 37,
    minWidth: 37,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 30
  },
  Text_7_1134: {
    color: "rgba(96, 84, 218, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_7_1135: {
    width: 26,
    height: 21,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5
  },
  View_7_1136: {
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
  ImageBackground_7_1137: {
    width: 24,
    height: 23,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15
  },
  View_7_1138: {
    width: 54,
    minWidth: 54,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 31
  },
  Text_7_1138: {
    color: "rgba(63, 64, 66, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_1139: {
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
  View_7_1140: {
    width: 63,
    minWidth: 63,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 31
  },
  Text_7_1140: {
    color: "rgba(63, 64, 66, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_7_1141: {
    width: 24,
    height: 22,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18
  },
  View_7_1142: {
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
  ImageBackground_7_1143: {
    width: 20,
    height: 22,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 34
  },
  View_7_1144: {
    width: 86,
    minWidth: 86,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 31
  },
  Text_7_1144: {
    color: "rgba(63, 64, 66, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_1145: {
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
  View_7_1146: {
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
  View_7_1147: {
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
  ImageBackground_7_1148: {
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
  View_7_1149: {
    width: 21.392915725708008,
    minWidth: 21.392915725708008,
    height: 3.59505558013916,
    minHeight: 3.59505558013916,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 6.7325439453125,
    backgroundColor: "rgba(63, 64, 66, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_7_1150: {
    width: 13.278362274169922,
    minWidth: 13.278362274169922,
    height: 3.59505558013916,
    minHeight: 3.59505558013916,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 13.2783203125,
    backgroundColor: "rgba(63, 64, 66, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_7_1151: {
    width: 32,
    minWidth: 32,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 28
  },
  Text_7_1151: {
    color: "rgba(63, 64, 66, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_1680: {
    width: 394,
    minWidth: 394,
    height: 216,
    minHeight: 216,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10,
    top: 261
  },
  View_7_1295: {
    width: 394,
    minWidth: 394,
    height: 216,
    minHeight: 216,
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
  View_7_1479: {
    width: 185,
    minWidth: 185,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21,
    top: 63
  },
  Text_7_1479: {
    color: "rgba(174, 174, 174, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_1478: {
    width: 354,
    minWidth: 354,
    height: 153,
    minHeight: 153,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21,
    top: 19
  },
  View_7_1473: {
    width: 140,
    minWidth: 140,
    height: 140,
    minHeight: 140,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 214,
    top: 0,
    backgroundColor: "rgba(243, 243, 243, 1)",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_7_1413: {
    width: 55.52460479736328,
    height: 91,
    top: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 254
  },
  View_7_1414: {
    width: 55.52460479736328,
    height: 90.98709869384766,
    top: 0.012939453125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_7_1415: {
    width: 55.52460479736328,
    height: 90.98709869384766,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_7_1416: {
    width: 40.13063430786133,
    height: 41.76980972290039,
    top: 24.0740966796875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.46588134765625
  },
  ImageBackground_7_1417: {
    width: 50.974308013916016,
    height: 55.077205657958984,
    top: 35.909912109375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_7_1418: {
    width: 38.51940155029297,
    height: 47.14887237548828,
    top: 29.0401611328125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16.42755126953125
  },
  ImageBackground_7_1419: {
    width: 50.81865310668945,
    height: 58.17074203491211,
    top: 30.39697265625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.30902099609375
  },
  ImageBackground_7_1420: {
    width: 43.86376953125,
    height: 55.85337448120117,
    top: 31.46044921875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 7.3125
  },
  ImageBackground_7_1421: {
    width: 28.60426902770996,
    height: 21.15314292907715,
    top: 43.7784423828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 22.05633544921875
  },
  ImageBackground_7_1422: {
    width: 30.72491455078125,
    height: 16.31971549987793,
    top: 27.3214111328125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16.649169921875
  },
  ImageBackground_7_1423: {
    width: 16.396434783935547,
    height: 22.984359741210938,
    top: 7.92041015625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 7.9947509765625
  },
  ImageBackground_7_1424: {
    width: 16.399490356445312,
    height: 22.951929092407227,
    top: 7.935791015625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 7.97821044921875
  },
  ImageBackground_7_1428: {
    width: 22.131078720092773,
    height: 22.662954330444336,
    top: 19.7698974609375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 33.3934326171875
  },
  ImageBackground_7_1429: {
    width: 32.089176177978516,
    height: 33.23511505126953,
    top: 4.566650390625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17.7369384765625
  },
  ImageBackground_7_1430: {
    width: 32.0739860534668,
    height: 32.43110275268555,
    top: 5.365966796875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17.7452392578125
  },
  ImageBackground_7_1433: {
    width: 7.554790019989014,
    height: 7.745229244232178,
    top: 4.6929931640625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 25.6956787109375
  },
  ImageBackground_7_1434: {
    width: 6.714112758636475,
    height: 7.293438911437988,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 35.19940185546875
  },
  ImageBackground_7_1435: {
    width: 22.1393985748291,
    height: 23.01590347290039,
    top: 54.0411376953125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30.137939453125
  },
  ImageBackground_7_1436: {
    width: 13.138249397277832,
    height: 7.744194030761719,
    top: 58.57421875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 33.23614501953125
  },
  ImageBackground_7_1437: {
    width: 2.5716562271118164,
    height: 11.833080291748047,
    top: 64.3524169921875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 46.04132080078125
  },
  ImageBackground_7_1438: {
    width: 4.821219444274902,
    height: 10.685585021972656,
    top: 75.0867919921875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 31.1982421875
  },
  ImageBackground_7_1439: {
    width: 7.735759735107422,
    height: 25.139192581176758,
    top: 35.94970703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 7.22210693359375
  },
  ImageBackground_7_1440: {
    width: 1.593252182006836,
    height: 8.87886905670166,
    top: 51.55908203125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 7.37127685546875
  },
  ImageBackground_7_1441: {
    width: 14.203901290893555,
    height: 9.322489738464355,
    top: 38.6923828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 11.29510498046875
  },
  ImageBackground_7_1442: {
    width: 7.256685256958008,
    height: 5.5096259117126465,
    top: 43.005615234375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3.1324462890625
  },
  ImageBackground_7_1443: {
    width: 5.183072566986084,
    height: 5.428243160247803,
    top: 42.5987548828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 38.4466552734375
  },
  ImageBackground_7_1444: {
    width: 4.573662281036377,
    height: 2.8239905834198,
    top: 36.942626953125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26.2684326171875
  },
  ImageBackground_7_1445: {
    width: 6.782677173614502,
    height: 5.37941312789917,
    top: 34.859130859375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16.7677001953125
  },
  ImageBackground_7_1446: {
    width: 1.0748571157455444,
    height: 2.783294916152954,
    top: 36.4217529296875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19.9508056640625
  },
  ImageBackground_7_1447: {
    width: 1.047776699066162,
    height: 3.13324236869812,
    top: 38.4644775390625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 28.72137451171875
  },
  ImageBackground_7_1448: {
    width: 5.3274970054626465,
    height: 8.382440567016602,
    top: 28.2509765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.39892578125
  },
  ImageBackground_7_1449: {
    width: 1.5252768993377686,
    height: 3.564574956893921,
    top: 30.4400634765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6.52557373046875
  },
  ImageBackground_7_1450: {
    width: 4.320351600646973,
    height: 22.25823402404785,
    top: 39.384033203125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 43.2054443359375
  },
  ImageBackground_7_1451: {
    width: 3.172731876373291,
    height: 3.8331456184387207,
    top: 51.982177734375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 43.2928466796875
  },
  ImageBackground_7_1452: {
    width: 7.920741558074951,
    height: 15.129088401794434,
    top: 36.088134765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 29.07763671875
  },
  ImageBackground_7_1453: {
    width: 1.1611994504928589,
    height: 4.191224575042725,
    top: 48.6129150390625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30.81024169921875
  },
  ImageBackground_7_1454: {
    width: 6.323997974395752,
    height: 19.580734252929688,
    top: 33.5001220703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15.2567138671875
  },
  ImageBackground_7_1455: {
    width: 2.4423868656158447,
    height: 8.1220064163208,
    top: 47.628173828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14.49798583984375
  },
  ImageBackground_7_1456: {
    width: 2.1810927391052246,
    height: 8.919569969177246,
    top: 38.041259765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18.47393798828125
  },
  ImageBackground_7_1457: {
    width: 2.7211105823516846,
    height: 13.045686721801758,
    top: 40.03515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.1490478515625
  },
  ImageBackground_7_1458: {
    width: 2.4464569091796875,
    height: 5.525903224945068,
    top: 28.91015625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 12.6097412109375
  },
  ImageBackground_7_1459: {
    width: 6.503735542297363,
    height: 11.662178039550781,
    top: 40.3363037109375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 41.57806396484375
  },
  ImageBackground_7_1460: {
    width: 6.543790340423584,
    height: 14.396641731262207,
    top: 40.0758056640625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 31.1407470703125
  },
  ImageBackground_7_1461: {
    width: 4.547852993011475,
    height: 1.315732717514038,
    top: 43.1346435546875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 44.75067138671875
  },
  ImageBackground_7_1462: {
    width: 4.176238536834717,
    height: 4.866701126098633,
    top: 37.5611572265625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 43.44775390625
  },
  ImageBackground_7_1463: {
    width: 4.365610122680664,
    height: 1.7009066343307495,
    top: 44.1124267578125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 28.92022705078125
  },
  ImageBackground_7_1464: {
    width: 17.052629470825195,
    height: 20.418989181518555,
    top: 20.3133544921875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 37.7274169921875
  },
  ImageBackground_7_1465: {
    width: 8.917986869812012,
    height: 4.439713001251221,
    top: 7.933349609375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15.47320556640625
  },
  ImageBackground_7_1466: {
    width: 6.685814380645752,
    height: 3.3236823081970215,
    top: 8.489013671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16.58831787109375
  },
  ImageBackground_7_1467: {
    width: 5.5797553062438965,
    height: 4.17638635635376,
    top: 4.58544921875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 25.60784912109375
  },
  ImageBackground_7_1468: {
    width: 3.726792335510254,
    height: 2.7903828620910645,
    top: 5.278076171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26.5321044921875
  },
  ImageBackground_7_1469: {
    width: 6.24727725982666,
    height: 2.7113640308380127,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 35.18988037109375
  },
  ImageBackground_7_1470: {
    width: 4.23931884765625,
    height: 1.8404245376586914,
    top: 0.43798828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 36.19549560546875
  },
  View_7_1471: {
    width: 149,
    minWidth: 149,
    minHeight: 45,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 1
  },
  Text_7_1471: {
    color: "rgba(63, 64, 66, 1)",
    fontSize: 30,
    fontWeight: "100",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_7_1476: {
    width: 21,
    height: 21,
    top: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 168
  },
  View_7_1472: {
    width: 117,
    minWidth: 117,
    minHeight: 96,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 57
  },
  Text_7_1472: {
    color: "rgba(244, 61, 80, 1)",
    fontSize: 64,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_1480: {
    width: 32,
    minWidth: 32,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 120,
    top: 122
  },
  Text_7_1480: {
    color: "rgba(63, 64, 66, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_1477: {
    width: 354,
    minWidth: 354,
    height: 5,
    minHeight: 5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 181
  },
  View_7_1474: {
    width: 353,
    minWidth: 353,
    height: 5,
    minHeight: 5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1,
    top: 0,
    backgroundColor: "rgba(243, 243, 243, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_7_1475: {
    width: 86,
    minWidth: 86,
    height: 5,
    minHeight: 5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(83, 91, 106, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
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
