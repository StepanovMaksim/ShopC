import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '..';
import DeviceItem from './DeviceItem';
import { Col, Row } from 'react-bootstrap';

const DeviceList = observer(() => {
    const {device} = useContext(Context)

    return (
        <Row className="d-flex">
            {device.devices.map(device =>
                <DeviceItem   
                    key={device.id}
                    device= {device}
                />        
            )}
        </Row>
    );
});

export default DeviceList;