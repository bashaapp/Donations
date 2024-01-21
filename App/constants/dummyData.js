import {icons,images} from '.'



const donateType = [
    {
        id: 1,
        name: "Food Donation",
        formType:'Food Donation',
        icon: icons.food_icon,
        photo:images.backgroundColor_5,
    },
   
    {
        id: 2,
        name: "Money Donation",
        formType:'Money Donation',
        icon: icons.money_icon,
        photo:images.backgroundColor_2,
       
    },
    {
        id: 3,
        name: "Blood Donation",
        formType:'Blood Donation',
        icon: icons.blood_icon,
        photo:images.backgroundColor_3,
    },
    {
        id: 4,
        name: "Other Donation",
        formType:'Other Donation',
        icon: icons.item_icon,
        photo:images.backgroundColor_4,
       
    },


]

const appPanel = [
    {
        id: 1,
        name: "Forms",
        icon: icons.form,
        photo:images.backgroundColor_2,
        value:'Forms'
    },
   
    {
        id: 2,
        name: "Messages",
        icon: icons.email_icon,
        photo:images.backgroundColor_2,
        value:'Messages'
       
    },
    {
        id: 3,
        name: "Users",
        icon: icons.user,
        photo:images.backgroundColor_2,
        value:'UsersList'
    },
]


export {
    donateType,
    appPanel
}

