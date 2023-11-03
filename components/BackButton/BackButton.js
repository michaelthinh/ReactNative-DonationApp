import React from 'react';
import {Pressable} from 'react-native';

import PropTypes from 'prop-types';

import style from './style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';

const BackButton = props => {
  return (
    <Pressable style={style.container} onPress={() => props.onPress()}>
      <FontAwesomeIcon icon={faArrowLeft} color="#022150" />
    </Pressable>
  );
};

BackButton.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default BackButton;
