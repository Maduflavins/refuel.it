import React from 'react';

import MenuItem from '../menu-items/menu-item.components';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'PMS',
          imageUrl: 'https://i.ibb.co/T84MY1K/PMS.jpg',
          id: 1
       },
        {
          title: 'kerosene',
          imageUrl: 'https://i.ibb.co/qRKSHHn/Kerosene.jpg',
          id: 2
        },
        {
          title: 'lpg',
          imageUrl: 'https://i.ibb.co/ckJRw27/LPG.jpg',
          id: 3
        },
        {
          title: 'diesel',
          imageUrl: 'https://i.ibb.co/ssLMNbW/desel.jpg',
          size: 'large',
          id: 4
        },
        {
          title: 'others',
          imageUrl: 'https://i.ibb.co/RDxrnvB/accessories.jpg',
          size: 'large',
          id: 5
        }
      ]
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;