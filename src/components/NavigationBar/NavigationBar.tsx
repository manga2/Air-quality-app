import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useTheme } from '@react-navigation/native';
import { Pressable, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { tabs } from '../../config/screens';
import { darkRipple, lightRipple, subtextDarkTheme } from '../../config/theme';
import CustomText from '../CustomText/CustomText';
import { useStyles } from './NavigationBar.styles';

const CustomNavigationBar: React.FC<BottomTabBarProps> = ({state, navigation}) => {
  const theme = useTheme();
  const styles = useStyles(theme);

  return (
    <View style={styles.container}>
      {
        state.routes.map((item, index) => (
          <View key={item.key} style={styles.wrapper}>
            <Pressable 
              onPress={() => navigation.navigate(tabs[index].id)}
              android_ripple={{color: theme.dark ? darkRipple : lightRipple}}
            >
              <View style={styles.tabItem}>
                <Icon 
                  style={styles.icon} 
                  name={tabs[index].icon} 
                  size={26} 
                  color={state.index === index ? theme.colors.primary : subtextDarkTheme}
                />
                <CustomText 
                  style={[
                    styles.tabText, 
                    {color: state.index === index ? theme.colors.primary : subtextDarkTheme}
                  ]}
                >
                  {tabs[index].name}
                </CustomText>
              </View>
            </Pressable>
          </View>
        ))
      }
    </View>
  );
}
 
export default CustomNavigationBar;