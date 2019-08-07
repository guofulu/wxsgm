//票夹的页面
import React from "react"

import Eticket from "../../components/eticket/Eticket"

export default class Ect extends React.Component{
    render() {
        return(
            <div>
                <Eticket {...this.props}></Eticket>
            </div>
        )
    }
}
