import React from 'react'
import "./components/dataTable/datatable.css"
export const userColums = [
    { field: "id", headerName: "ID", width: 70 },
    {
        field: "user", headerName: "User", width: 230,
        renderCell: (params) => {
            return (
                <div className="cellWidthImg">
                    <img className="cellImg" src={params.row.img} />
                    {params.row.username}
                </div>
            );
        },


    },
    {
        field: "email",
        headerName: "Email",
        width: 230
    },
    {
        field: "age",
        headerName: "Age",
        width: 100
    },
    {
        field: "status",
        headerName: "Status",
        width: 160,
        renderCell: (params) => {
            return (
                <div className={`cellWidthStatus ${params.row.status}`}>
                    {params.row.status}
                </div>
            )
        }
    },
];


export const userRows = [
    {
        id: 1,
        username: "snow",
        img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
        status: "active",
        email: "1snow@example",
        age: 35,
    },

    {
        id: 2,
        username: "lolo",
        img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
        status: "passive",
        email: "1snow@example",
        age: 40,
    },
    {
        id: 3,
        username: "esmail",
        img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
        status: "pending",
        email: "1snow@example",
        age: 44,
    },
    {
        id: 4,
        username: "mohamed",
        img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
        status: "active",
        email: "1snow@example",
        age: 60,
    },
    {
        id: 5,
        username: "mena",
        img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
        status: "passive",
        email: "1snow@example",
        age: 24,
    },
    {
        id: 6,
        username: "mohand",
        img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
        status: "active",
        email: "1snow@example",
        age: 24,
    },
    {
        id: 7,
        username: "omar",
        img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
        status: "pending",
        email: "1snow@example",
        age: 24,
    },
    {
        id: 8,
        username: "abdo",
        img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
        status: "passive",
        email: "1snow@example",
        age: 24,
    },
    {
        id: 9,
        username: "mena",
        img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
        status: "active",
        email: "1snow@example",
        age: 24,
    },
    {
        id: 10,
        username: "mena",
        img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
        status: "passive",
        email: "1snow@example",
        age: 24,
    },
    {
        id: 11,
        username: "seka",
        img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
        status: "active",
        email: "1snow@example",
        age: 24,
    },
    {
        id: 12,
        username: "nihal",
        img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
        status: "passive",
        email: "1snow@example",
        age: 24,
    },
    {
        id: 13,
        username: "meha",
        img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
        status: "pending",
        email: "1snow@example",
        age: 24,
    },

];