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
        style={styles.ImageBackground_7_1510}
      />
      <View style={styles.View_7_1511}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3fed/a8bc/102157f6c7d16a0fd81f423cf643b4d8"
          }}
          style={styles.ImageBackground_7_1512}
        />
        <View style={styles.View_8_24}>
          <View style={styles.View_I8_24_7_2462} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f43/a786/676d3ac4219bc15172341a8c407ed7cb"
          }}
          style={styles.ImageBackground_7_2327}
        />
        <View style={styles.View_7_1786}>
          <View style={styles.View_7_1683} />
          <View style={styles.View_7_1685}>
            <View style={styles.View_7_1757}>
              <Text style={styles.Text_7_1757}>102</Text>
            </View>
            <View style={styles.View_7_1745}>
              <Text style={styles.Text_7_1745}>Heart rate</Text>
            </View>
          </View>
          <View style={styles.View_7_1785}>
            <View style={styles.View_7_1784}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1fba/28e0/34affc528b422386f1cfec36a04046a1"
                }}
                style={styles.ImageBackground_7_1780}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1fba/28e0/34affc528b422386f1cfec36a04046a1"
                }}
                style={styles.ImageBackground_7_1781}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1fba/28e0/34affc528b422386f1cfec36a04046a1"
                }}
                style={styles.ImageBackground_7_1782}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1fba/28e0/34affc528b422386f1cfec36a04046a1"
                }}
                style={styles.ImageBackground_7_1783}
              />
              <View style={styles.View_7_1775}>
                <Text style={styles.Text_7_1775}>120 100 80 60</Text>
              </View>
            </View>
            <View style={styles.View_7_1768} />
            <View style={styles.View_7_1771} />
            <View style={styles.View_7_1772} />
            <View style={styles.View_7_1773} />
            <View style={styles.View_7_1774} />
            <View style={styles.View_7_1769} />
            <View style={styles.View_7_1770} />
          </View>
        </View>
        <View style={styles.View_7_1788}>
          <View style={styles.View_7_1789} />
          <View style={styles.View_7_1790}>
            <View style={styles.View_7_1791}>
              <Text style={styles.Text_7_1791}>98%</Text>
            </View>
            <View style={styles.View_7_1792}>
              <Text style={styles.Text_7_1792}>Oxygen level</Text>
            </View>
          </View>
          <View style={styles.View_7_1793}>
            <View style={styles.View_7_1794}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1fba/28e0/34affc528b422386f1cfec36a04046a1"
                }}
                style={styles.ImageBackground_7_1795}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1fba/28e0/34affc528b422386f1cfec36a04046a1"
                }}
                style={styles.ImageBackground_7_1796}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1fba/28e0/34affc528b422386f1cfec36a04046a1"
                }}
                style={styles.ImageBackground_7_1797}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1fba/28e0/34affc528b422386f1cfec36a04046a1"
                }}
                style={styles.ImageBackground_7_1798}
              />
              <View style={styles.View_7_1799}>
                <Text style={styles.Text_7_1799}>100 95 90 85</Text>
              </View>
            </View>
            <View style={styles.View_7_1801} />
            <View style={styles.View_7_1802} />
            <View style={styles.View_7_1803} />
            <View style={styles.View_7_1804} />
            <View style={styles.View_7_1805} />
            <View style={styles.View_7_1806} />
            <View style={styles.View_7_1807} />
          </View>
        </View>
        <View style={styles.View_7_1808}>
          <View style={styles.View_7_1809} />
          <View style={styles.View_7_1810}>
            <View style={styles.View_7_1811}>
              <Text style={styles.Text_7_1811}>180/80</Text>
            </View>
            <View style={styles.View_7_1812}>
              <Text style={styles.Text_7_1812}>Blood pressure</Text>
            </View>
          </View>
          <View style={styles.View_7_1813}>
            <View style={styles.View_7_1814}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1fba/28e0/34affc528b422386f1cfec36a04046a1"
                }}
                style={styles.ImageBackground_7_1815}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1fba/28e0/34affc528b422386f1cfec36a04046a1"
                }}
                style={styles.ImageBackground_7_1816}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1fba/28e0/34affc528b422386f1cfec36a04046a1"
                }}
                style={styles.ImageBackground_7_1829}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1fba/28e0/34affc528b422386f1cfec36a04046a1"
                }}
                style={styles.ImageBackground_7_1830}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1fba/28e0/34affc528b422386f1cfec36a04046a1"
                }}
                style={styles.ImageBackground_7_1828}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1fba/28e0/34affc528b422386f1cfec36a04046a1"
                }}
                style={styles.ImageBackground_7_1817}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1fba/28e0/34affc528b422386f1cfec36a04046a1"
                }}
                style={styles.ImageBackground_7_1818}
              />
              <View style={styles.View_7_1819}>
                <Text style={styles.Text_7_1819}>
                  200 180 160 140 120 100 80
                </Text>
              </View>
            </View>
            <View style={styles.View_7_1838}>
              <View style={styles.View_7_1839} />
              <View style={styles.View_7_1840} />
              <View style={styles.View_7_1841} />
            </View>
            <View style={styles.View_7_1842}>
              <View style={styles.View_7_1843} />
              <View style={styles.View_7_1844} />
              <View style={styles.View_7_1845} />
            </View>
            <View style={styles.View_7_1846}>
              <View style={styles.View_7_1847} />
              <View style={styles.View_7_1848} />
              <View style={styles.View_7_1849} />
            </View>
            <View style={styles.View_7_1850}>
              <View style={styles.View_7_1851} />
              <View style={styles.View_7_1852} />
              <View style={styles.View_7_1853} />
            </View>
            <View style={styles.View_7_1854}>
              <View style={styles.View_7_1855} />
              <View style={styles.View_7_1856} />
              <View style={styles.View_7_1857} />
            </View>
            <View style={styles.View_7_1833}>
              <View style={styles.View_7_1826} />
              <View style={styles.View_7_1831} />
              <View style={styles.View_7_1832} />
            </View>
            <View style={styles.View_7_1834}>
              <View style={styles.View_7_1835} />
              <View style={styles.View_7_1836} />
              <View style={styles.View_7_1837} />
            </View>
          </View>
        </View>
        <View style={styles.View_7_1935}>
          <View style={styles.View_7_1936} />
          <View style={styles.View_7_1937}>
            <View style={styles.View_7_1938}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1fba/28e0/34affc528b422386f1cfec36a04046a1"
                }}
                style={styles.ImageBackground_7_1939}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1fba/28e0/34affc528b422386f1cfec36a04046a1"
                }}
                style={styles.ImageBackground_7_1940}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1fba/28e0/34affc528b422386f1cfec36a04046a1"
                }}
                style={styles.ImageBackground_7_1941}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1fba/28e0/34affc528b422386f1cfec36a04046a1"
                }}
                style={styles.ImageBackground_7_1942}
              />
              <View style={styles.View_7_1943}>
                <Text style={styles.Text_7_1943}>3000 2000 1500 0</Text>
              </View>
            </View>
            <View style={styles.View_7_1944} />
            <View style={styles.View_7_1945} />
            <View style={styles.View_7_1946} />
            <View style={styles.View_7_1947} />
            <View style={styles.View_7_1948} />
            <View style={styles.View_7_1949} />
            <View style={styles.View_7_1950} />
          </View>
          <View style={styles.View_7_1951}>
            <View style={styles.View_7_1952}>
              <Text style={styles.Text_7_1952}>3000</Text>
            </View>
            <View style={styles.View_7_1953}>
              <Text style={styles.Text_7_1953}>Steps</Text>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7bec/eb73/bd55e0e53f289adf6bae404c9c8b0cf5"
          }}
          style={styles.ImageBackground_7_1515}
        />
        <View style={styles.View_7_1934} />
        <View style={styles.View_7_1615}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc1f/8c13/084b07cc68d2c0f62be3cedabd5f1aac"
            }}
            style={styles.ImageBackground_7_1616}
          />
          <View style={styles.View_7_1617}>
            <View style={styles.View_7_1618}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/34bf/ca20/c6a4d79f7369dbcee516a83f1452a136"
                }}
                style={styles.ImageBackground_7_1619}
              />
              <View style={styles.View_7_1620} />
              <View style={styles.View_7_1621} />
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/837f/6ba9/3f05af42afe32c8a27381414da280f0a"
          }}
          style={styles.ImageBackground_7_2319}
        />
        <View style={styles.View_7_1623}>
          <View style={styles.View_7_1624} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/28a4/9f9a/f904f65432d05faae2e747d2391933c7"
            }}
            style={styles.ImageBackground_7_1625}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a00f/f853/19a9b43df70eced576d3e462921e86bf"
            }}
            style={styles.ImageBackground_7_1627}
          />
          <View style={styles.View_7_1631}>
            <View style={styles.View_7_1632}>
              <Text style={styles.Text_7_1632}>Take Vitals</Text>
            </View>
            <View style={styles.View_7_1633}>
              <Text style={styles.Text_7_1633}>9:00 am</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_7_1634}>
          <View style={styles.View_7_1635} />
          <View style={styles.View_7_1636}>
            <View style={styles.View_7_1637}>
              <Text style={styles.Text_7_1637}>Take medication</Text>
            </View>
            <View style={styles.View_7_1638}>
              <Text style={styles.Text_7_1638}>10:00 am</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0078/d8a2/3ea3b32dd7fa7fd8a8e27e12c1b54437"
            }}
            style={styles.ImageBackground_7_1639}
          />
        </View>
        <View style={styles.View_7_1643}>
          <View style={styles.View_7_1644} />
          <View style={styles.View_7_1645}>
            <View style={styles.View_7_1646}>
              <Text style={styles.Text_7_1646}>Take medication</Text>
            </View>
            <View style={styles.View_7_1647}>
              <Text style={styles.Text_7_1647}>10:00 am</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a132/37c2/e0ba8dd09692a9328464a97c42270c45"
            }}
            style={styles.ImageBackground_7_1648}
          />
        </View>
      </View>
      <View style={styles.View_7_1652}>
        <View style={styles.View_7_1653}>
          <View style={styles.View_7_1654} />
          <View style={styles.View_7_1655} />
          <View style={styles.View_7_1656} />
        </View>
      </View>
      <View style={styles.View_7_1657}>
        <View style={styles.View_7_1658}>
          <Text style={styles.Text_7_1658}>Home</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a4a1/a0f6/6892d95e8f30c328de1f28c26cac58eb"
          }}
          style={styles.ImageBackground_7_1659}
        />
      </View>
      <View style={styles.View_7_1660}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb05/75ac/c06b04de97db1687dce3cb732f0e900a"
          }}
          style={styles.ImageBackground_7_1661}
        />
        <View style={styles.View_7_1662}>
          <Text style={styles.Text_7_1662}>Progress</Text>
        </View>
      </View>
      <View style={styles.View_7_1663}>
        <View style={styles.View_7_1664}>
          <Text style={styles.Text_7_1664}>Messages</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2839/52b2/a12ccd6a164aa8f8f3a3c956f8340c40"
          }}
          style={styles.ImageBackground_7_1665}
        />
      </View>
      <View style={styles.View_7_1666}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8449/7e95/c09f3430d4a2053780cc57e34c862389"
          }}
          style={styles.ImageBackground_7_1667}
        />
        <View style={styles.View_7_1668}>
          <Text style={styles.Text_7_1668}>Appointments</Text>
        </View>
      </View>
      <View style={styles.View_7_1669}>
        <View style={styles.View_7_1670}>
          <View style={styles.View_7_1671}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f78b/ce17/880e8eceebe21ea6132a7ffd2f810431"
              }}
              style={styles.ImageBackground_7_1672}
            />
            <View style={styles.View_7_1673} />
            <View style={styles.View_7_1674} />
          </View>
        </View>
        <View style={styles.View_7_1675}>
          <Text style={styles.Text_7_1675}>More</Text>
        </View>
      </View>
      <View style={styles.View_7_1858}>
        <View style={styles.View_7_1859} />
        <View style={styles.View_7_1901}>
          <View style={styles.View_7_1902}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1fba/28e0/34affc528b422386f1cfec36a04046a1"
              }}
              style={styles.ImageBackground_7_1903}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1fba/28e0/34affc528b422386f1cfec36a04046a1"
              }}
              style={styles.ImageBackground_7_1904}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1fba/28e0/34affc528b422386f1cfec36a04046a1"
              }}
              style={styles.ImageBackground_7_1905}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1fba/28e0/34affc528b422386f1cfec36a04046a1"
              }}
              style={styles.ImageBackground_7_1906}
            />
            <View style={styles.View_7_1907}>
              <Text style={styles.Text_7_1907}>3000 2000 1500 0</Text>
            </View>
          </View>
          <View style={styles.View_7_1908} />
          <View style={styles.View_7_1909} />
          <View style={styles.View_7_1910} />
          <View style={styles.View_7_1911} />
          <View style={styles.View_7_1912} />
          <View style={styles.View_7_1913} />
          <View style={styles.View_7_1914} />
        </View>
        <View style={styles.View_7_1860}>
          <View style={styles.View_7_1861}>
            <Text style={styles.Text_7_1861}>3000</Text>
          </View>
          <View style={styles.View_7_1862}>
            <Text style={styles.Text_7_1862}>Steps</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: {},
  ImageBackground_7_1510: {
    width: 444,
    height: 920,
    top: -11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -15
  },
  View_7_1511: {
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
  ImageBackground_7_1512: {
    width: 413.1776428222656,
    height: 893.6680297851562,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_8_24: {
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
  View_I8_24_7_2462: {
    flexGrow: 1,
    width: 414,
    height: 909,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_7_2327: {
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
  View_7_1786: {
    width: 394,
    minWidth: 394,
    height: 125,
    minHeight: 125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9.57470703125,
    top: 259.875
  },
  View_7_1683: {
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
  View_7_1685: {
    width: 69,
    minWidth: 69,
    height: 71,
    minHeight: 71,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24,
    top: 28
  },
  View_7_1757: {
    width: 58,
    minWidth: 58,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 23
  },
  Text_7_1757: {
    color: "rgba(63, 64, 66, 1)",
    fontSize: 32,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_1745: {
    width: 69,
    minWidth: 69,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_7_1745: {
    color: "rgba(63, 64, 66, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_1785: {
    width: 179,
    minWidth: 179,
    height: 96,
    minHeight: 96,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 193,
    top: 15
  },
  View_7_1784: {
    width: 179,
    minWidth: 179,
    height: 96,
    minHeight: 96,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_7_1780: {
    width: 160,
    minWidth: 160,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19,
    top: 85
  },
  ImageBackground_7_1781: {
    width: 160,
    minWidth: 160,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19,
    top: 61
  },
  ImageBackground_7_1782: {
    width: 160,
    minWidth: 160,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19,
    top: 37
  },
  ImageBackground_7_1783: {
    width: 160,
    minWidth: 160,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19,
    top: 13
  },
  View_7_1775: {
    width: 14,
    minWidth: 14,
    minHeight: 96,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_7_1775: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_1768: {
    width: 8,
    minWidth: 8,
    height: 51,
    minHeight: 51,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 79,
    top: 34,
    backgroundColor: "rgba(66, 218, 180, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_7_1771: {
    width: 8,
    minWidth: 8,
    height: 66,
    minHeight: 66,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 99,
    top: 19,
    backgroundColor: "rgba(66, 218, 180, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_7_1772: {
    width: 8,
    minWidth: 8,
    height: 51,
    minHeight: 51,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 119,
    top: 34,
    backgroundColor: "rgba(66, 218, 180, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_7_1773: {
    width: 8,
    minWidth: 8,
    height: 66,
    minHeight: 66,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 139,
    top: 19,
    backgroundColor: "rgba(66, 218, 180, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_7_1774: {
    width: 8,
    minWidth: 8,
    height: 80,
    minHeight: 80,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 159,
    top: 5,
    backgroundColor: "rgba(66, 218, 180, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_7_1769: {
    width: 8,
    minWidth: 8,
    height: 39,
    minHeight: 39,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 39,
    top: 46,
    backgroundColor: "rgba(66, 218, 180, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_7_1770: {
    width: 8,
    minWidth: 8,
    height: 80,
    minHeight: 80,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 59,
    top: 5,
    backgroundColor: "rgba(66, 218, 180, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_7_1788: {
    width: 394,
    minWidth: 394,
    height: 125,
    minHeight: 125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9.57470703125,
    top: 394.875
  },
  View_7_1789: {
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
  View_7_1790: {
    width: 89,
    minWidth: 89,
    height: 71,
    minHeight: 71,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24,
    top: 28
  },
  View_7_1791: {
    width: 76,
    minWidth: 76,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 23
  },
  Text_7_1791: {
    color: "rgba(63, 64, 66, 1)",
    fontSize: 32,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_1792: {
    width: 89,
    minWidth: 89,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_7_1792: {
    color: "rgba(63, 64, 66, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_1793: {
    width: 179,
    minWidth: 179,
    height: 96,
    minHeight: 96,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 193,
    top: 15
  },
  View_7_1794: {
    width: 179,
    minWidth: 179,
    height: 96,
    minHeight: 96,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_7_1795: {
    width: 160,
    minWidth: 160,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19,
    top: 85
  },
  ImageBackground_7_1796: {
    width: 160,
    minWidth: 160,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19,
    top: 61
  },
  ImageBackground_7_1797: {
    width: 160,
    minWidth: 160,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19,
    top: 37
  },
  ImageBackground_7_1798: {
    width: 160,
    minWidth: 160,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19,
    top: 13
  },
  View_7_1799: {
    width: 14,
    minWidth: 14,
    minHeight: 96,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_7_1799: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_1801: {
    width: 8,
    minWidth: 8,
    height: 51,
    minHeight: 51,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 79,
    top: 34,
    backgroundColor: "rgba(66, 218, 180, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_7_1802: {
    width: 8,
    minWidth: 8,
    height: 66,
    minHeight: 66,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 99,
    top: 19,
    backgroundColor: "rgba(66, 218, 180, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_7_1803: {
    width: 8,
    minWidth: 8,
    height: 51,
    minHeight: 51,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 119,
    top: 34,
    backgroundColor: "rgba(66, 218, 180, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_7_1804: {
    width: 8,
    minWidth: 8,
    height: 66,
    minHeight: 66,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 139,
    top: 19,
    backgroundColor: "rgba(66, 218, 180, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_7_1805: {
    width: 8,
    minWidth: 8,
    height: 74,
    minHeight: 74,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 159,
    top: 11,
    backgroundColor: "rgba(66, 218, 180, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_7_1806: {
    width: 8,
    minWidth: 8,
    height: 39,
    minHeight: 39,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 39,
    top: 46,
    backgroundColor: "rgba(66, 218, 180, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_7_1807: {
    width: 8,
    minWidth: 8,
    height: 66,
    minHeight: 66,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 59,
    top: 19,
    backgroundColor: "rgba(66, 218, 180, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_7_1808: {
    width: 394,
    minWidth: 394,
    height: 125,
    minHeight: 125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9.57470703125,
    top: 529.875
  },
  View_7_1809: {
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
  View_7_1810: {
    width: 116,
    minWidth: 116,
    height: 71,
    minHeight: 71,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24,
    top: 28
  },
  View_7_1811: {
    width: 116,
    minWidth: 116,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 23
  },
  Text_7_1811: {
    color: "rgba(63, 64, 66, 1)",
    fontSize: 32,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_1812: {
    width: 104,
    minWidth: 104,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_7_1812: {
    color: "rgba(63, 64, 66, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_1813: {
    width: 181,
    minWidth: 181,
    height: 98,
    minHeight: 98,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 191,
    top: 14
  },
  View_7_1814: {
    width: 181,
    minWidth: 181,
    height: 98,
    minHeight: 98,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_7_1815: {
    width: 160,
    minWidth: 160,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21,
    top: 93
  },
  ImageBackground_7_1816: {
    width: 160,
    minWidth: 160,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21,
    top: 36
  },
  ImageBackground_7_1829: {
    width: 160,
    minWidth: 160,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21,
    top: 50
  },
  ImageBackground_7_1830: {
    width: 160,
    minWidth: 160,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21,
    top: 64
  },
  ImageBackground_7_1828: {
    width: 160,
    minWidth: 160,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21,
    top: 79
  },
  ImageBackground_7_1817: {
    width: 160,
    minWidth: 160,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21,
    top: 23
  },
  ImageBackground_7_1818: {
    width: 160,
    minWidth: 160,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21,
    top: 9
  },
  View_7_1819: {
    width: 16,
    minWidth: 16,
    minHeight: 98,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_7_1819: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_1838: {
    width: 8,
    minWidth: 8,
    height: 78,
    minHeight: 78,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 81,
    top: 8
  },
  View_7_1839: {
    width: 8,
    minWidth: 8,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(66, 218, 180, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_7_1840: {
    width: 8,
    minWidth: 8,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 70,
    backgroundColor: "rgba(66, 218, 180, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_7_1841: {
    width: 2,
    minWidth: 2,
    height: 67,
    minHeight: 67,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3,
    top: 4,
    backgroundColor: "rgba(66, 218, 180, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_7_1842: {
    width: 8,
    minWidth: 8,
    height: 78,
    minHeight: 78,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 101,
    top: 16
  },
  View_7_1843: {
    width: 8,
    minWidth: 8,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(66, 218, 180, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_7_1844: {
    width: 8,
    minWidth: 8,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 70,
    backgroundColor: "rgba(66, 218, 180, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_7_1845: {
    width: 2,
    minWidth: 2,
    height: 67,
    minHeight: 67,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3,
    top: 4,
    backgroundColor: "rgba(66, 218, 180, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_7_1846: {
    width: 8,
    minWidth: 8,
    height: 78,
    minHeight: 78,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 121,
    top: 4
  },
  View_7_1847: {
    width: 8,
    minWidth: 8,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(66, 218, 180, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_7_1848: {
    width: 8,
    minWidth: 8,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 70,
    backgroundColor: "rgba(66, 218, 180, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_7_1849: {
    width: 2,
    minWidth: 2,
    height: 67,
    minHeight: 67,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3,
    top: 4,
    backgroundColor: "rgba(66, 218, 180, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_7_1850: {
    width: 8,
    minWidth: 8,
    height: 78,
    minHeight: 78,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 141,
    top: 12
  },
  View_7_1851: {
    width: 8,
    minWidth: 8,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(66, 218, 180, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_7_1852: {
    width: 8,
    minWidth: 8,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 70,
    backgroundColor: "rgba(66, 218, 180, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_7_1853: {
    width: 2,
    minWidth: 2,
    height: 67,
    minHeight: 67,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3,
    top: 4,
    backgroundColor: "rgba(66, 218, 180, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_7_1854: {
    width: 8,
    minWidth: 8,
    height: 78,
    minHeight: 78,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 161,
    top: 9
  },
  View_7_1855: {
    width: 8,
    minWidth: 8,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(66, 218, 180, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_7_1856: {
    width: 8,
    minWidth: 8,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 70,
    backgroundColor: "rgba(66, 218, 180, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_7_1857: {
    width: 2,
    minWidth: 2,
    height: 67,
    minHeight: 67,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3,
    top: 4,
    backgroundColor: "rgba(66, 218, 180, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_7_1833: {
    width: 8,
    minWidth: 8,
    height: 78,
    minHeight: 78,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 41,
    top: 18
  },
  View_7_1826: {
    width: 8,
    minWidth: 8,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(66, 218, 180, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_7_1831: {
    width: 8,
    minWidth: 8,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 70,
    backgroundColor: "rgba(66, 218, 180, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_7_1832: {
    width: 2,
    minWidth: 2,
    height: 67,
    minHeight: 67,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3,
    top: 4,
    backgroundColor: "rgba(66, 218, 180, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_7_1834: {
    width: 8,
    minWidth: 8,
    height: 56,
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 61,
    top: 12
  },
  View_7_1835: {
    width: 8,
    minWidth: 8,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(66, 218, 180, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_7_1836: {
    width: 8,
    minWidth: 8,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 48,
    backgroundColor: "rgba(66, 218, 180, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_7_1837: {
    width: 2,
    minWidth: 2,
    height: 49,
    minHeight: 49,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3,
    top: 3,
    backgroundColor: "rgba(66, 218, 180, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_7_1935: {
    width: 394,
    minWidth: 394,
    height: 125,
    minHeight: 125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9.57470703125,
    top: 799.875
  },
  View_7_1936: {
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
  View_7_1937: {
    width: 186,
    minWidth: 186,
    height: 96,
    minHeight: 96,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 186,
    top: 15
  },
  View_7_1938: {
    width: 186,
    minWidth: 186,
    height: 96,
    minHeight: 96,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_7_1939: {
    width: 160,
    minWidth: 160,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26,
    top: 85
  },
  ImageBackground_7_1940: {
    width: 160,
    minWidth: 160,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26,
    top: 61
  },
  ImageBackground_7_1941: {
    width: 160,
    minWidth: 160,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26,
    top: 37
  },
  ImageBackground_7_1942: {
    width: 160,
    minWidth: 160,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26,
    top: 13
  },
  View_7_1943: {
    width: 21,
    minWidth: 21,
    minHeight: 96,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_7_1943: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_1944: {
    width: 8,
    minWidth: 8,
    height: 51,
    minHeight: 51,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 86,
    top: 34,
    backgroundColor: "rgba(47, 43, 102, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_7_1945: {
    width: 8,
    minWidth: 8,
    height: 66,
    minHeight: 66,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 106,
    top: 19,
    backgroundColor: "rgba(47, 43, 102, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_7_1946: {
    width: 8,
    minWidth: 8,
    height: 51,
    minHeight: 51,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 126,
    top: 34,
    backgroundColor: "rgba(47, 43, 102, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_7_1947: {
    width: 8,
    minWidth: 8,
    height: 66,
    minHeight: 66,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 146,
    top: 19,
    backgroundColor: "rgba(47, 43, 102, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_7_1948: {
    width: 8,
    minWidth: 8,
    height: 74,
    minHeight: 74,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 166,
    top: 11,
    backgroundColor: "rgba(47, 43, 102, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_7_1949: {
    width: 8,
    minWidth: 8,
    height: 39,
    minHeight: 39,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 46,
    top: 46,
    backgroundColor: "rgba(47, 43, 102, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_7_1950: {
    width: 8,
    minWidth: 8,
    height: 66,
    minHeight: 66,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 66,
    top: 19,
    backgroundColor: "rgba(47, 43, 102, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_7_1951: {
    width: 88,
    minWidth: 88,
    height: 71,
    minHeight: 71,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24,
    top: 28
  },
  View_7_1952: {
    width: 88,
    minWidth: 88,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 23
  },
  Text_7_1952: {
    color: "rgba(63, 64, 66, 1)",
    fontSize: 32,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_1953: {
    width: 40,
    minWidth: 40,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_7_1953: {
    color: "rgba(63, 64, 66, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_7_1515: {
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
  View_7_1934: {
    width: 414,
    minWidth: 414,
    height: 90,
    minHeight: 90,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -0.42529296875,
    top: 803.875,
    backgroundColor: "rgba(243, 243, 243, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  View_7_1615: {
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
  ImageBackground_7_1616: {
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
  View_7_1617: {
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
  View_7_1618: {
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
  ImageBackground_7_1619: {
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
  View_7_1620: {
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
  View_7_1621: {
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
  ImageBackground_7_2319: {
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
  View_7_1623: {
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
  View_7_1624: {
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
  ImageBackground_7_1625: {
    width: 16,
    height: 16,
    top: 47,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20
  },
  ImageBackground_7_1627: {
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
  View_7_1631: {
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
  View_7_1632: {
    width: 74,
    minWidth: 74,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30,
    top: 30
  },
  Text_7_1632: {
    color: "rgba(174, 174, 174, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_1633: {
    width: 55,
    minWidth: 55,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_7_1633: {
    color: "rgba(174, 174, 174, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_1634: {
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
  View_7_1635: {
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
  View_7_1636: {
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
  View_7_1637: {
    width: 112,
    minWidth: 112,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 30
  },
  Text_7_1637: {
    color: "rgba(63, 64, 66, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_1638: {
    width: 62,
    minWidth: 62,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_7_1638: {
    color: "rgba(63, 64, 66, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_7_1639: {
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
  View_7_1643: {
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
  View_7_1644: {
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
  View_7_1645: {
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
  View_7_1646: {
    width: 112,
    minWidth: 112,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 32
  },
  Text_7_1646: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_1647: {
    width: 62,
    minWidth: 62,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_7_1647: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_7_1648: {
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
  View_7_1652: {
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
  View_7_1653: {
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
  View_7_1654: {
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
  View_7_1655: {
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
  View_7_1656: {
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
  View_7_1657: {
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
  View_7_1658: {
    width: 37,
    minWidth: 37,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 30
  },
  Text_7_1658: {
    color: "rgba(63, 64, 66, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_7_1659: {
    width: 26,
    height: 21,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5
  },
  View_7_1660: {
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
  ImageBackground_7_1661: {
    width: 24,
    height: 23,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15
  },
  View_7_1662: {
    width: 54,
    minWidth: 54,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 31
  },
  Text_7_1662: {
    color: "rgba(96, 84, 218, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_1663: {
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
  View_7_1664: {
    width: 63,
    minWidth: 63,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 31
  },
  Text_7_1664: {
    color: "rgba(63, 64, 66, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_7_1665: {
    width: 24,
    height: 22,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18
  },
  View_7_1666: {
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
  ImageBackground_7_1667: {
    width: 20,
    height: 22,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 34
  },
  View_7_1668: {
    width: 86,
    minWidth: 86,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 31
  },
  Text_7_1668: {
    color: "rgba(63, 64, 66, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_1669: {
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
  View_7_1670: {
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
  View_7_1671: {
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
  ImageBackground_7_1672: {
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
  View_7_1673: {
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
  View_7_1674: {
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
  View_7_1675: {
    width: 32,
    minWidth: 32,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 28
  },
  Text_7_1675: {
    color: "rgba(63, 64, 66, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_1858: {
    width: 394,
    minWidth: 394,
    height: 125,
    minHeight: 125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10,
    top: 667
  },
  View_7_1859: {
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
  View_7_1901: {
    width: 186,
    minWidth: 186,
    height: 96,
    minHeight: 96,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 186,
    top: 15
  },
  View_7_1902: {
    width: 186,
    minWidth: 186,
    height: 96,
    minHeight: 96,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_7_1903: {
    width: 160,
    minWidth: 160,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26,
    top: 85
  },
  ImageBackground_7_1904: {
    width: 160,
    minWidth: 160,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26,
    top: 61
  },
  ImageBackground_7_1905: {
    width: 160,
    minWidth: 160,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26,
    top: 37
  },
  ImageBackground_7_1906: {
    width: 160,
    minWidth: 160,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26,
    top: 13
  },
  View_7_1907: {
    width: 21,
    minWidth: 21,
    minHeight: 96,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_7_1907: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_1908: {
    width: 8,
    minWidth: 8,
    height: 51,
    minHeight: 51,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 86,
    top: 34,
    backgroundColor: "rgba(66, 218, 180, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_7_1909: {
    width: 8,
    minWidth: 8,
    height: 66,
    minHeight: 66,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 106,
    top: 19,
    backgroundColor: "rgba(66, 218, 180, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_7_1910: {
    width: 8,
    minWidth: 8,
    height: 51,
    minHeight: 51,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 126,
    top: 34,
    backgroundColor: "rgba(66, 218, 180, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_7_1911: {
    width: 8,
    minWidth: 8,
    height: 66,
    minHeight: 66,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 146,
    top: 19,
    backgroundColor: "rgba(66, 218, 180, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_7_1912: {
    width: 8,
    minWidth: 8,
    height: 74,
    minHeight: 74,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 166,
    top: 11,
    backgroundColor: "rgba(66, 218, 180, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_7_1913: {
    width: 8,
    minWidth: 8,
    height: 39,
    minHeight: 39,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 46,
    top: 46,
    backgroundColor: "rgba(66, 218, 180, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_7_1914: {
    width: 8,
    minWidth: 8,
    height: 66,
    minHeight: 66,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 66,
    top: 19,
    backgroundColor: "rgba(66, 218, 180, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_7_1860: {
    width: 88,
    minWidth: 88,
    height: 71,
    minHeight: 71,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24,
    top: 28
  },
  View_7_1861: {
    width: 88,
    minWidth: 88,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 23
  },
  Text_7_1861: {
    color: "rgba(63, 64, 66, 1)",
    fontSize: 32,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_1862: {
    width: 40,
    minWidth: 40,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_7_1862: {
    color: "rgba(63, 64, 66, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
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
