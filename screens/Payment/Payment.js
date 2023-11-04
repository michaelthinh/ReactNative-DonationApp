import React from 'react';
import {SafeAreaView, ScrollView, View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {StripeProvider, CardForm} from '@stripe/stripe-react-native';

import {publishableKey} from '../../utils/publishableKey';

import globalStyle from '../../assets/styles/globalStyle';
import style from './style';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import BackButton from '../../components/BackButton/BackButton';
import {Routes} from '../../navigation/Routes';

const Payment = ({navigation}) => {
  const donationItemInformation = useSelector(
    state => state.donations.selectedDonationInformation,
  );
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <View style={style.backButton}>
        <BackButton
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.paymentContainer}>
        <Header title={'My Card Payment'} type={1} />
        <Text style={style.donationAmountDescription}>
          You are about to donate ${donationItemInformation.price} for charity
        </Text>
        <View>
          <StripeProvider publishableKey={publishableKey}>
            <CardForm style={style.cardForm} />
          </StripeProvider>
        </View>
        <Text style={style.thankYouText}>
          * For education purposes, Payment method is under developed! Thank you
          for your visit!
        </Text>
      </ScrollView>
      <View style={style.button}>
        <Button
          title={'Donate'}
          onPress={() => {
            alert('Thank you for you donation');
            navigation.navigate(Routes.Home);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Payment;
