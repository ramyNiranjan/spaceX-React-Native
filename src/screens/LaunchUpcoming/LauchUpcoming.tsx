/* eslint-disable prettier/prettier */
import React, {FunctionComponent} from 'react';
import {FlatList} from 'react-native';
import {gql, useQuery} from '@apollo/client';
import * as S from './styled';
import LaunchCard from '../../components/LaunchCard';

type OwnProps = {};

type Props = OwnProps;

const LAUNCH_UPCOMING_QUERY = gql`
  query LaunchesUpcoming($order: String!, $sort: String!) {
    launchesUpcoming(order: $order, sort: $sort) {
      details
      id
      links {
        flickr_images
      }
      launch_date_unix
      mission_name
    }
  }
`;

const LauchUpcoming: FunctionComponent<Props> = () => {
  const {data} = useQuery(LAUNCH_UPCOMING_QUERY, {
    variables: {order: 'desc', sort: 'launch_date_unix'},
  });
  return (
    <>
      <FlatList
        data={data && data.launchesUpcoming}
        renderItem={({item}) => (
          <>
            <LaunchCard
              image={item.links.flickr_images[0]}
              mission_name={item.mission_name}
              // launch_success={item.launch_success}
              details={item.details}
              id={item.id}
              launch_date_unix={item.launch_date_unix}
              upcoming
            />
            <S.MarginB />
          </>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </>
  );
};

export default LauchUpcoming;
