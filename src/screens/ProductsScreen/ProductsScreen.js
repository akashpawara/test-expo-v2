import React from 'react';
import {
  Text,
  View,
  Image,
  StatusBar,
  Modal,
  Animated,
  Platform,
} from 'react-native';
import StickyParallaxHeader from 'react-native-sticky-parallax-header';
import { ProductCard} from '../../components/ProductCard/ProductCard';
import { UserModal} from '../../components/UserModal/UserModal';
import { constants, colors, sizes } from '../../styles';
import styles from './ProductsScreen.styles';
import { Akash, Jatin, Amit, Bipin, Fatima, Sheldon } from '../../assets/data/cards';

const { event, ValueXY } = Animated;
class ProductsScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      headerLayout: {
        height: 0,
      },
      contentHeight: {},
      modalVisible: false,
    };
    this.scrollY = new ValueXY();
  }

  componentDidMount() {
    this.scrollY.y.addListener(({ value }) => (this._value = value));
  }

  componentWillUnmount() {
    this.scrollY.y.removeListener();
  }

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  };

  setHeaderSize = (headerLayout) => this.setState({ headerLayout });

  openUserModal = (userSelected) => {
    this.setState({ userSelected }, () => this.setModalVisible(true));
  };

  scrollPosition = (value) => {
    const { headerLayout } = this.state;

    return constants.scrollPosition(headerLayout.height, value);
  };

  renderHeader = () => (
    <View style={[styles.headerWrapper, styles.homeScreenHeader]}>
      <Image
        resizeMode="contain"
        source={require('../../assets/images/logo.png')}
        style={styles.logo}
      />
    </View>
  );

  renderForeground = () => {
    const message = "Electronics!";
    const startSize = constants.responsiveWidth(18);
    const endSize = constants.responsiveWidth(10);
    const [startImgFade, finishImgFade] = [
      this.scrollPosition(22),
      this.scrollPosition(27),
    ];
    const [startImgSize, finishImgSize] = [
      this.scrollPosition(20),
      this.scrollPosition(30),
    ];
    const [startTitleFade, finishTitleFade] = [
      this.scrollPosition(25),
      this.scrollPosition(45),
    ];

    const imageOpacity = this.scrollY.y.interpolate({
      inputRange: [0, startImgFade, finishImgFade],
      outputRange: [1, 1, 0],
      extrapolate: 'clamp',
    });
    const imageSize = this.scrollY.y.interpolate({
      inputRange: [0, startImgSize, finishImgSize],
      outputRange: [startSize, startSize, endSize],
      extrapolate: 'clamp',
    });
    const titleOpacity = this.scrollY.y.interpolate({
      inputRange: [0, startTitleFade, finishTitleFade],
      outputRange: [1, 1, 0],
      extrapolate: 'clamp',
    });

    return (
      <View style={styles.foreground}>
        

        <Animated.View
          style={[styles.messageContainer, { opacity: titleOpacity }]}
        >
          <Text style={styles.message}>{message}</Text>
        </Animated.View>
      </View>
    );
  };

  renderQuizElements = (title) => {
    const users = [Akash, Jatin, Amit, Bipin, Fatima, Sheldon];
    const {
      navigation: { navigate },
    } = this.props;

    return users.map(
      (user) =>
        (title === '' || title === user.type) && (
          <ProductCard
            key={user.id}
            elements={user.cardsAmount}
            authorName={user.author}
            mainText={user.label}
            labelText={user.type}
            imageSource={user.image}
            onPress={() => navigate('Card', { user })}
            pressUser={() => this.openUserModal(user)}
          />
        )
    );
  };

  calcMargin = (title) => {
    const { contentHeight } = this.state;
    let marginBottom = 50;

    if (contentHeight[title]) {
      const padding = 24;
      const isBigContent = constants.deviceHeight - contentHeight[title] < 0;

      if (isBigContent) {
        return marginBottom;
      }

      marginBottom =
        constants.deviceHeight -
        padding * 2 -
        sizes.headerHeight -
        contentHeight[title];

      return marginBottom > 0 ? marginBottom : 0;
    }

    return marginBottom;
  };

  onLayoutContent = (e, title) => {
    const { contentHeight } = this.state;
    const contentHeightTmp = { ...contentHeight };
    contentHeightTmp[title] = e.nativeEvent.layout.height;

    this.setState({
      contentHeight: { ...contentHeightTmp },
    });
  };

  renderContent = (title) => {
    const marginBottom = Platform.select({
      ios: this.calcMargin(title),
      android: 0,
    });

    return (
      <View
        onLayout={(e) => this.onLayoutContent(e, title)}
        style={[styles.content, { marginBottom }]}
      >
        {this.renderModal()}
        <Text style={styles.contentText}>{title}</Text>
        {this.renderQuizElements(title)}
      </View>
    );
  };

  renderModal = () => {
    const { modalVisible, userSelected } = this.state;
    const { navigation } = this.props;

    return (
      <Modal
        animationType="slide"
        transparent
        visible={modalVisible}
        style={styles.modalStyle}
      >
        <View style={styles.modalContentContainer}>
          <UserModal
            setModalVisible={this.setModalVisible}
            navigation={navigation}
            onPressCloseModal={() => this.setModalVisible(false)}
            user={userSelected}
          />
        </View>
      </Modal>
    );
  };

  render() {
    return (
      <React.Fragment>
        <StatusBar
          barStyle="light-content"
          backgroundColor={colors.primaryGreen}
          translucent
        />
        <StickyParallaxHeader
          foreground={this.renderForeground()}
          header={this.renderHeader()}
          tabs={[
            {
              title: 'Mobiles',
              content: this.renderContent('Mobiles'),
            },
            {
              title: 'Headphones',
              content: this.renderContent('Headphones'),
            },
            {
              title: 'Ipad / Tablets',
              content: this.renderContent('Ipad / Tablets'),
            },
            {
              title: 'Laptop / PC',
              content: this.renderContent('Laptop / PC'),
            },
            {
              title: 'TV / Monitor',
              content: this.renderContent('TV / Monitor'),
            },
            {
              title: 'Others',
              content: this.renderContent('Others'),
            },
          ]}
          deviceWidth={constants.deviceWidth}
          parallaxHeight={sizes.homeScreenParallaxHeader}
          scrollEvent={event(
            [{ nativeEvent: { contentOffset: { y: this.scrollY.y } } }],
            { useNativeDriver: false }
          )}
          headerSize={this.setHeaderSize}
          headerHeight={sizes.headerHeight}
          tabTextStyle={styles.tabText}
          tabTextContainerStyle={styles.tabTextContainerStyle}
          tabTextContainerActiveStyle={styles.tabTextContainerActiveStyle}
          tabsContainerBackgroundColor={colors.primaryGreen}
          tabsWrapperStyle={styles.tabsWrapper}
        >
          {this.renderContent('Mobiles')}
        </StickyParallaxHeader>
      </React.Fragment>
    );
  }
}

export default ProductsScreen;
