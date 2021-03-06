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
          id: 1,
          linkUrl: 'pms'
       }
        // {
        //   title: 'kerosene',
        //   imageUrl: 'https://i.ibb.co/qRKSHHn/Kerosene.jpg',
        //   id: 2,
        //   linkUrl: ' '
        // },
        // {
        //   title: 'lpg',
        //   imageUrl: 'https://i.ibb.co/ckJRw27/LPG.jpg',
        //   id: 3,
        //   linkUrl: ' '
        // },
        // {
        //   title: 'diesel',
        //   imageUrl: 'https://i.ibb.co/ssLMNbW/desel.jpg',
        //   size: 'large',
        //   id: 4,
        //   linkUrl: ' '
        // },
        // {
        //   title: 'others',
        //   imageUrl: 'https://i.ibb.co/RDxrnvB/accessories.jpg',
        //   size: 'large',
        //   id: 5,
        //   linkUrl: ' '
        // }
      ]
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...otherSectionProps}) => (
          <MenuItem key={id} {...otherSectionProps}/>
        ))}
      </div>
    );
  }
}

export default Directory;