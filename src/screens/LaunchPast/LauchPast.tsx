/* eslint-disable prettier/prettier */
import React, {FunctionComponent} from 'react';
import {FlatList} from 'react-native';
import {gql, useQuery} from '@apollo/client';
import * as S from './styled';
import LaunchCard from '../../components/LaunchCard';

type OwnProps = {};

type Props = OwnProps;

const LAUNCH_PAST_QUERY = gql`
  query LaunchesPast($order: String!, $sort: String!) {
    launchesPast(order: $order, sort: $sort) {
      launch_success
      details
      links {
        flickr_images
      }
      launch_date_local
      id
      mission_name
      launch_date_unix
    }
  }
`;

const LauchPast: FunctionComponent<Props> = () => {
  const {data} = useQuery(LAUNCH_PAST_QUERY, {
    variables: {order: 'desc', sort: 'launch_date_local'},
  });
  return (
    <FlatList
      data={data && data.launchesPast}
      renderItem={({item}) => (
        <>
          <LaunchCard
            image={item.links.flickr_images[0]}
            mission_name={item.mission_name}
            launch_success={item.launch_success}
            details={item.details}
            id={item.id}
            launch_date_unix={item.launch_date_unix}
          />
          <S.MarginB />
        </>
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default LauchPast;
