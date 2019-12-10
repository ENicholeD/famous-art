import React from 'react';
import ArtItem from './ArtItem';

const ArtList = (props) => {
    const artItems = props.art.map((image) =>{
        return <ArtItem key={image.id} art={image} />
    });
    return (
        <div>{artItems}</div>
    );
};
export default ArtList;