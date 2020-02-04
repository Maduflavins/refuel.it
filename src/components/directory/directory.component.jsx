import React from 'react';
import MenuItem from '../menu-items/menu-item.components';
import './directory.styles.scss'
class Directory extends React.Component{
    constructor(){
        super();
        this.state = {
            sections:[
              {
                title: 'PMS',
                imageUrl: `url(${require('./images/PMS.jpeg')})`,
                id: 1,
                linkUrl: 'shop/pms'
              },
              {
                title: 'LPG',
                imageUrl: `url(${require('./images/LPG.jpg')})`,
                id: 2,
                linkUrl: 'shop/lpg'
              },
              {
                title: 'desel',
                imageUrl: `url(${require('./images/desel.jpeg')})`,
                id: 3,
                linkUrl: 'shop/desel'
              },
              {
                title: 'kerosene',
                imageUrl: `url(${require('./images/Kerosene.jpeg')})`,
                size: 'large',
                id: 4,
                linkUrl: 'shop/kerosene'
              },
              {
                title: 'others',
                imageUrl: `url(${require('./images/accessories.jpeg')})`,
                size: 'large',
                id: 5,
                linkUrl: 'shop/others'
              }
            ]
        }



    }
    render(){
        return (
            <div className="directory-menu">
              {this.state.sections.map(({ title, imageUrl, id, size })=>(
                <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
              ))}
            </div>
        )
    }
}

export default Directory;