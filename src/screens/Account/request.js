import React, { Component } from "react";
import { Platform, StatusBar, StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { Container, Header, Body, Content } from 'native-base';
import Swiper from "react-native-swiper";

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Icon } from "react-native-elements";
import { connect } from "react-redux";
import { setUser } from "@modules/auth/actions";
import { Loading } from "@components";
import { isEmpty } from "@utils/functions";
import configs from "@constants/configs";
import { themes, colors } from "@constants/themes";
import { images, icons, dummy } from "@constants/assets";
import axios, { setClientToken } from "@utils/axios";
import i18n from "@utils/i18n";

class Request extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      tab: true
    };
  }

  render() {
    return (
      <Container style={styles.container}>
        <StatusBar hidden />
        <Loading loading={this.state.loading} />
        {/* Header Part */}
        <Header style={styles.header}>
          <View style={styles.headerBar}>
            <View style={{ flexDirection: 'row', alignItems: 'center', width: 120 }}>
              <Image style={{ width: 70, height: 30, marginLeft: 10, marginRight: 10, borderRadius: 5 }} source={images.logoDark} />
            </View>
              <TouchableOpacity onPress={() => this.props.navigation.pop()} >
                <Text>CANCEL</Text>
              </TouchableOpacity>
          </View>
        </Header>
        <Content contentContainerStyle={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Image source={images.request} style={{width: 250, height: 150}}/>
          <Text style={{ color: '#727A91', fontWeight: 'bold', marginTop: 20 }}>We don't see any returnable items</Text>
          <Text style={{ color: '#727A91', marginTop: 10, fontSize: 12 }}>Looks like you don't have any returnable items.</Text>
          <TouchableOpacity style={{marginTop: 30, width: wp('40%'), height: 50, backgroundColor: '#3866DF', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: colors.WHITE, fontWeight: 'bold'}}>LEARN MORE</Text>
          </TouchableOpacity>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 5,
    backgroundColor: colors.WHITE,
    borderBottomWidth: 0
  },
  headerBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },
  searchBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: wp('100%') - 150,
    height: 35,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.GREY.SECONDARY,
    paddingLeft: 5,
    paddingRight: 5
  },
});

export default connect(undefined, undefined)(Request);
