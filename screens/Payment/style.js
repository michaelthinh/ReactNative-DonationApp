import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';
import {getFontFamily} from '../../assets/fonts/helper';

const style = StyleSheet.create({
  backButton: {
    marginTop: verticalScale(10),
    marginLeft: horizontalScale(24),
  },
  paymentContainer: {
    marginHorizontal: horizontalScale(24),
    marginTop: verticalScale(15),
  },
  donationAmountDescription: {
    color: '#000000',
    marginTop: verticalScale(12),
    fontFamily: getFontFamily('Inter', '500'),
    fontSize: scaleFontSize(14),
    lineHeight: scaleFontSize(22),
  },
  button: {
    marginHorizontal: horizontalScale(24),
    marginVertical: verticalScale(32),
  },
  cardForm: {
    height: verticalScale(250),
    marginTop: verticalScale(12),
  },
  thankYouText: {
    color: '#022150',
    fontFamily: getFontFamily('Inter', '500'),
    fontSize: scaleFontSize(14),
    lineHeight: scaleFontSize(24),
  },
});

export default style;
