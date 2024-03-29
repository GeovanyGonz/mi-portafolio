import React from 'react';
import "./services.scss";
import ServiceItem from "../../SingleFeatures/service_item";
import SectionTitle from "../section_title";
import serviceIcon_01 from "../../images/icon_1.png";
import serviceIcon_02 from "../../images/icon_2.png";
import serviceIcon_03 from "../../images/icon_3.png";

export default function Index() {
    return (
        <section className="deneb_service service_v1">
            <div className="shape_v2">
                <img src="assets/images/shape/shape_7.png" className="shape_7" alt="" />
            </div>
            <div className="container">
                <SectionTitle
                    title="Our Service"
                    description="When unknow printer took a gallery of type and scramblted it to makea type specimen book"
                />
                <div className="row">
                    <ServiceItem 
                      icon={serviceIcon_01}
                      title="Web Solution"
                      url="#"
                      description="Aliquam sollicitudin consequat commodo. Cras bibendum ipsum eu
                        augue egestas laciniaam eu ornare ipsum, quis tristique ligula."
                    />
                    <ServiceItem
                        icon={serviceIcon_02}
                        title="Strategy & Research"
                        url="#"
                        description="Aliquam sollicitudin consequat commodo. Cras bibendum ipsum eu
                        augue egestas laciniaam eu ornare ipsum, quis tristique ligula."
                    />
                    <ServiceItem
                        icon={serviceIcon_03}
                        title="Web Development"
                        url="#"
                        description="Aliquam sollicitudin consequat commodo. Cras bibendum ipsum eu
                        augue egestas laciniaam eu ornare ipsum, quis tristique ligula."
                    />
                </div>
            </div>
        </section>                 
    )
}
