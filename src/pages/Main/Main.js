import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import FilterWrapper from './FilterWrapper/FilterWrapper';
import PetSitterWrapper from './PetSitterWrapper/PetSitterWrapper';
import MainPostModal from './MainPostModal/MainPostModal';
import MainCalendarModal from './MainCalendarModal/MainCalendarModal';
import Loading from '../../Components/Loading/Loading';
import styled from 'styled-components';

const OFFSET_NUMBER = 0;
const INITIAL_LIMIT_NUMBER = 3;
const FOOTER_HEIGHT = 359;

const Main = ({ isDarkMode }) => {
  const [loading, setLoading] = useState(false);
  const [petSitterData, setPetSitterData] = useState([]);
  const [checkedList, setCheckedList] = useState({
    location: null,
    date: { startDate: null, endDate: null },
    filterList: null,
    sortList: 'many_comments',
  });
  const [limit, setLimit] = useState(INITIAL_LIMIT_NUMBER);
  const [address, setAddress] = useState('');
  const [modalVisible, setModalVisible] = useState({
    postModal: false,
    calendarModal: false,
  });
  const navigate = useNavigate();

  const fetchData = async () => {
    setLoading(true);
    const response = await fetch(
      `http://10.58.6.190:8000/petsitters/list?limit=${limit}&offset=${OFFSET_NUMBER}&${makeQueryString()}`
    );
    const json = await response.json();
    setPetSitterData(json.results);
    setLoading(false);
  };

  useEffect(() => {
    const isFetchCondition =
      limit - petSitterData.length > INITIAL_LIMIT_NUMBER;
    if (isFetchCondition) return;
    fetchData();
    navigate(`/petsitters/list?${makeQueryString()}`);
  }, [limit, checkedList]);

  useEffect(() => {
    window.addEventListener('scroll', throttle(handleScroll, 300));

    return window.removeEventListener('scloll', throttle(handleScroll, 300));
  }, []);

  const throttle = (callback, ms) => {
    let timer = null;
    return function (...args) {
      if (timer === null) {
        timer = setTimeout(() => {
          callback.apply(this, args);
          timer = null;
        }, ms);
      }
    };
  };

  const handleScroll = e => {
    window.innerHeight + e.target.documentElement.scrollTop + FOOTER_HEIGHT >=
      e.target.documentElement.scrollHeight && setLimit(prev => prev + 3);
  };

  const updateCheckedList = (type, value) => {
    setLimit(INITIAL_LIMIT_NUMBER);
    if (type === 'filter') {
      setCheckedList(prev =>
        prev.filterList === value
          ? { ...prev, filterList: null }
          : { ...prev, filterList: value }
      );
    } else if (type === 'sort') {
      setCheckedList(prev => ({ ...prev, sortList: value }));
    } else if (type === 'post') {
      setCheckedList(prev => ({ ...prev, location: value }));
    } else if (type === 'calendar') {
      setCheckedList(prev => ({ ...prev, date: { ...value } }));
    }
  };

  const makeQueryString = () => {
    const { location, filterList, sortList } = checkedList;
    let queryString = `sort_by=${sortList}`;

    if (location) {
      queryString = `${queryString}&keyword=${location}`;
    }
    if (filterList) {
      queryString = `${queryString}&type_id=${filterList}`;
    }

    return queryString;
  };

  return (
    <MainBackground isDarkMode={isDarkMode}>
      <MainWrapper>
        <FilterWrapper
          isDarkMode={isDarkMode}
          setAddress={setAddress}
          setModalVisible={setModalVisible}
          updateCheckedList={updateCheckedList}
          address={address}
          reserveDate={checkedList.date}
        />
        <PetSitterWrapper
          isDarkMode={isDarkMode}
          updateCheckedList={updateCheckedList}
          data={petSitterData}
        />
      </MainWrapper>
      {loading && <Loading isDarkMode={isDarkMode} />}
      {modalVisible.postModal && (
        <MainPostModal
          setModalVisible={setModalVisible}
          setAddress={setAddress}
          updateCheckedList={updateCheckedList}
        />
      )}
      {modalVisible.calendarModal && (
        <MainCalendarModal
          setModalVisible={setModalVisible}
          updateCheckedList={updateCheckedList}
        />
      )}
    </MainBackground>
  );
};

export default Main;

const MainBackground = styled.div`
  width: 100%;
  background-color: ${props =>
    props.isDarkMode ? 'rgba(0,0,0,80%)' : 'white;'};
  color: ${props => props.isDarkMode && 'white'};
  transition: background-color 200ms ease-in;
`;

const MainWrapper = styled.div`
  max-width: 1000px;
  margin: auto;
`;
