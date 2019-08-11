import React from "react"
import MyCertification from "../../components/myjuooo/Certification/Certification"

export default class Certification extends React.Component{
    render() {
        return(
            <div>
                <MyCertification {...this.props}></MyCertification>
            </div>
        )
    }
}