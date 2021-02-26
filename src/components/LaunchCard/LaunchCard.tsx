/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import React, {FunctionComponent, useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import * as dayjs from 'dayjs';

import * as S from './styled';

type OwnProps = {
  launch_success?: boolean;
  details: string;
  launch_date_local?: string;
  id?: string;
  image: any;
  mission_name: string;
  launch_date_unix?: any;
  upcoming?: boolean;
};

type Props = OwnProps;

const RestaurantCard: FunctionComponent<Props> = ({
  image,
  mission_name,
  launch_success,
  details,
  launch_date_unix,
  id,
  upcoming = false,
}) => {
  const navigation = useNavigation();

  const handleOnPress = useCallback(() => {
    navigation.navigate('Details', {
      spacexID: id,
    });
  }, [id]);

  return (
    <S.Container onPress={handleOnPress}>
      <S.Cover>
        <S.Image source={{uri: image}} resizeMode="cover" />
      </S.Cover>
      <S.Content>
        <S.Title numberOfLines={1}>{mission_name}</S.Title>
        <S.Detail numberOfLines={3}>{details}</S.Detail>
        <S.TimeDate>
          Launch Date/Time:
          {dayjs.unix(launch_date_unix).format('MMMM D, YYYY h:mm A')}
        </S.TimeDate>

        <S.Success>
          {upcoming
            ? 'Up Coming'
            : launch_success
            ? 'Launch Succeed'
            : 'Launch Failed'}
        </S.Success>
      </S.Content>
    </S.Container>
  );
};

export default RestaurantCard;
