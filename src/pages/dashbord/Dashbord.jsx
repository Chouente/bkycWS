import React from 'react';
import {CRow, CCol, CWidgetStatsF,} from '@coreui/react'
import {MdOutlineRestaurantMenu, MdOutlineNoFood} from 'react-icons/md'
import {FaUserFriends} from 'react-icons/fa'
import {BsListCheck} from 'react-icons/bs'


const Dashbord = () => {
    return (
        <div className='m-9'>
            <div className='widget'>
                <CRow>
                    <CCol md={3}>
                        <CWidgetStatsF
                            className="mb-3 shadow-md"
                            color="danger"
                            icon={<BsListCheck size={30}/>}
                            padding={false}
                            title="Orders"
                            value="89"
                        />
                    </CCol>
                    <CCol md={3}>
                        <CWidgetStatsF
                            className="mb-3 shadow-md"
                            color="secondary"
                            icon={<MdOutlineRestaurantMenu size={30}/>}
                            padding={false}
                            title="menu"
                            value="10"
                        />
                    </CCol>
                    <CCol md={3}>
                        <CWidgetStatsF
                            className="mb-3 shadow-md"
                            color="warning"
                            icon={<MdOutlineNoFood size={30}/>}
                            padding={false}
                            title="products"
                            value="40"
                        />
                    </CCol>
                    <CCol md={3}>
                        <CWidgetStatsF
                            className="mb-3 shadow-md"
                            color="primary"
                            icon={<FaUserFriends size={30}/>}
                            padding={false}
                            title="Users"
                            value="05"
                        />
                    </CCol>
                </CRow>
            </div>
        </div>
    );
};

export default Dashbord;