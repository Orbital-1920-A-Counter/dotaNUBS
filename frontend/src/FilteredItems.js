import React from 'react'
import ReactTooltip from 'react-tooltip'

const FilteredItems = ( {item_id, items} ) => {
    const filterItem = items.filter(
        (filterItem) => {
            return filterItem.id === item_id
        }    
    )

    return (
        <div>
            {FilteredItems.map(
                (mapItem, index) => {
                    return (
                        <div key={index}>
                            <img src={`https://api.opendota.com${mapItem.img}`} alt='hero' style={{width: 40}} data-for='getContent' data-tip={mapItem.dname} />
                            <ReactTooltip place="bottom" type="dark" effect="solid"
                                id='getContent' 
                                getContent={(dataTip) => <div>{dataTip}</div>}
                            />
                        </div>
                    )
                }
            )}
        </div>
    )    
}

export default FilteredItems