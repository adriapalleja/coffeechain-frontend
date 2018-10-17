import React from 'react';
import styled from 'react-emotion';
import { Link } from 'react-router-dom';
import { ListImage } from './images';
import { IPFS_URL } from '../constants/connections';

const Item = styled('div')`
  display: flex;
  flex-direction: column;
  margin: 1em;
`;

const Name = styled('div')`
  color: ${props => props.theme.colors.secondary};
`;

function ItemsListCoffee (props) {
  const url =
    'https://images.unsplash.com/photo-1527018263374-5adb6a54f01e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=76ac2e56cf4887aac218a89543847865&auto=format&fit=crop&w=800&q=60';

  if (props.coffee) {
    const { producer, name, botanical_variety, picture_hash } = props.coffee;
    return (
      <Item>
        <Link to={`/coffee-detail/${props.id}`}>
          <ListImage src={ IPFS_URL + picture_hash } />
          <Name>{name}</Name>
          <div>{botanical_variety || 'Arabica'}</div>
          <div>
            {producer.business_name || 'Some producer'},{' '}
            {producer.country || 'Interesting Country'}
          </div>
        </Link>
      </Item>
    );
  } else return <Item />;
}

export default ItemsListCoffee;
