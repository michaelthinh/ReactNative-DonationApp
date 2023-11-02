import React, {useRef, useState} from 'react';
import {Pressable, TextInput} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import PropTypes from 'prop-types';

import style from './style';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {scaleFontSize} from '../../assets/styles/scaling';

const Search = props => {
  const textInputRef = useRef(null);
  const [search, setSearch] = useState('');
  const handleSearch = searchValue => {
    setSearch(searchValue);
    props.onSearch(searchValue);
  };
  const handleFocus = () => {
    textInputRef.current.focus();
  };
  return (
    <Pressable onPress={handleFocus} style={style.searchInputContainer}>
      <FontAwesomeIcon
        icon={faSearch}
        color="#25C0FF"
        size={scaleFontSize(22)}
      />
      <TextInput
        value={search}
        onChangeText={value => handleSearch(value)}
        ref={textInputRef}
        style={style.searchInput}
        placeholder="Search"
      />
    </Pressable>
  );
};

Search.defaultProps = {
  onSearch: () => {},
};
Search.propTypes = {
  onSearch: PropTypes.func,
};

export default Search;
