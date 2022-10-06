import c from '../Profileinfo.module.css';
import React from 'react';
import userImg from "../../../../imgs/user-img.png"

class Profilestatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    switchEditMode = () => {
        this.setState({
            editMode:!this.state.editMode
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        let changeStatus = (e) => {
            this.setState({status: e.target.value})
        }
        let onBlur = () =>{
            this.switchEditMode()
            if(this.state.status != '') {
                this.props.updateStatus(this.state.status)
            }
            else {
            }
        }
        return (
            <div>
                {!this.state.editMode ?
                    <div>
                        <span onClick={this.switchEditMode} >{this.props.status?this.props.status:'Status'}</span>
                    </div>
                    :
                    <div>
                        <input autoFocus={true} onBlur={onBlur} onChange={changeStatus} value={this.state.status?this.state.status:''}/>
                    </div>
                }
            </div>
        )
    }
}
export default Profilestatus;