/* eslint-disable no-shadow */
/* eslint-disable space-infix-ops */
/* eslint-disable keyword-spacing */
/* eslint-disable no-trailing-spaces */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import React, {FunctionComponent} from 'react';
import {Alert, Button, Text} from 'react-native';
import * as S from './styled';
import {gql, useQuery} from '@apollo/client';

type OwnProps = {
  route: any;
};

type Props = OwnProps;

const Get_SINGEL_LAUNCH = gql`
  query Launch($id: Interger!) {
    launch(id: $id) {
      details
      mission_name
      launch_date_unix
      launch_success
      rocket {
        rocket_name
      }
      links {
        flickr_images
      }
    }
  }
`;

export const Detail: FunctionComponent<Props> = ({route}) => {
  const {spacexID} = route.params;
  const {data} = useQuery(Get_SINGEL_LAUNCH, {
    variables: {id: spacexID},
  });

  console.log(data); //try to console log
  return (
    <S.Container>
      <Text>Detail</Text>
      <Text>{spacexID}</Text>
      <Text>{data && data.launch.details}</Text>
      <Button
        title={`likes ${20}`}
        onPress={() => Alert.alert('Simple Button pressed')}
      />
      <Text />
    </S.Container>
  );
};

export default Detail;
