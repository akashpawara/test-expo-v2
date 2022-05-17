import { StyleSheet } from 'react-native';
import { colors, screenStyles } from '../../styles';

export default StyleSheet.create({
  ...screenStyles,
  logo: {
    height: 64,
    width: 142,
  },
  tabsWrapper: {
    paddingVertical: 12,
  },
  tabTextContainerStyle: {
    backgroundColor: colors.transparent,
    borderRadius: 18,
  },
  tabTextContainerActiveStyle: {
    backgroundColor: colors.coralPink,
  },
  tabText: {
    fontSize: 16,
    lineHeight: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
    color: colors.white,
    fontFamily: 'AvertaStd-Semibold',
  },
  modalStyle: {
    margin: 0,
  },
  modalContentContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  homeScreenHeader: {
    backgroundColor: colors.primaryGreen,
  },
});
