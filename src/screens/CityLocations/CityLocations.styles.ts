import { lightTheme } from '../../config/theme';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  screen: {
    flex: 1
  },
  header: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: lightTheme.divider.color,
    borderBottomWidth: 0.5,
    paddingBottom: 8
  },
  backButton: {
    marginLeft: 5
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: 'OpenSans-Bold',
    marginLeft: 8,
    paddingBottom: 2,
    color: 'black'
  },
  body: {
    flex: 1
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  list: {
    flex: 1,
  }
});