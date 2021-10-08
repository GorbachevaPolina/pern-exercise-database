import React from "react";

const DashboardFavourite = () => {

    let dishes = [
        {
            id: 0,
            name: 'strawberry cake',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque nisi eget lorem placerat, a pharetra ipsum tempor. Sed viverra metus dolor, vel mattis ante lobortis a. Sed eu quam aliquet, posuere dui id, interdum nibh. Cras placerat sed elit vel efficitur. Duis et sollicitudin eros.',
            img: 'https://images4.alphacoders.com/150/1506.jpg'
        },
        {
            id: 1,
            name: 'strawberry cake',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque nisi eget lorem placerat, a pharetra ipsum tempor. Sed viverra metus dolor, vel mattis ante lobortis a. Sed eu quam aliquet, posuere dui id, interdum nibh. Cras placerat sed elit vel efficitur. Duis et sollicitudin eros.',
            img: 'https://images4.alphacoders.com/150/1506.jpg'
        },
        {
            id: 2,
            name: 'strawberry cake',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque nisi eget lorem placerat, a pharetra ipsum tempor. Sed viverra metus dolor, vel mattis ante lobortis a. Sed eu quam aliquet, posuere dui id, interdum nibh. Cras placerat sed elit vel efficitur. Duis et sollicitudin eros.',
            img: 'https://images4.alphacoders.com/150/1506.jpg'
        },
        {
            id: 3,
            name: 'strawberry cake',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque nisi eget lorem placerat, a pharetra ipsum tempor. Sed viverra metus dolor, vel mattis ante lobortis a. Sed eu quam aliquet, posuere dui id, interdum nibh. Cras placerat sed elit vel efficitur. Duis et sollicitudin eros.',
            img: 'https://images4.alphacoders.com/150/1506.jpg'
        }
    ]

    function displayItems() {
        return (
            <div>
                {dishes.map(function(item) {
                    return (
                        <article>
                            <img src={item.img} className='fav-img'/>
                        </article>
                    )
                })}
            </div>
        )
    }

    return (
        <div className='fav-img-container'>
            {dishes.map(function(item) {
                    return (
                        <article className='fav-menu-item'>
                            <img src={item.img} className='fav-img'/>
                            <div className='fav-item-info'>
                                <h4>{item.name}</h4>
                                <p>{item.description}</p>
                            </div>
                        </article>
                    )
                })}
        </div>
    )
}

export default DashboardFavourite;