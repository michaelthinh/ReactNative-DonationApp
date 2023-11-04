import React from 'react';
import {useSelector} from 'react-redux';
import {Text, SafeAreaView, View, ScrollView, Image} from 'react-native';

import style from './style';
import globalStyle from '../../assets/styles/globalStyle';

import BackButton from '../../components/BackButton/BackButton';
import Badge from '../../components/Badge/Badge';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';

import {Routes} from '../../navigation/Routes';

const SingleDonationItem = ({navigation, route}) => {
  const donationItemInformation = useSelector(
    state => state.donations.selectedDonationInformation,
  );
  const categoryInformation = route.params.categoryInformation;
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView style={style.container} showsVerticalScrollIndicator={false}>
        <BackButton onPress={() => navigation.goBack()} />
        <Image
          source={{uri: donationItemInformation.image}}
          style={style.image}
        />
        <View style={style.badge}>
          <Badge title={categoryInformation.name} />
        </View>
        <Header title={donationItemInformation.name} type={1} />
        <Text style={style.description}>
          {donationItemInformation.description}
        </Text>
      </ScrollView>
      <View style={style.button}>
        <Button
          title={'Donate'}
          onPress={() => {
            navigation.navigate(Routes.Payment);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default SingleDonationItem;
