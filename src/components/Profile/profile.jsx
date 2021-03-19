import React, { createRef } from "react";
import { Component } from "react";
import { connect } from "react-redux";

import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';

import { changeName } from "../../redux/actions/profileActions";
  
class _Profile extends Component {
    textFieldRef = createRef();

    state = {
        name: "", 
    };

    changeName = (newName) => {
        newName && this.props.changeName(newName);

        this.setState({
            name: newName,
        });
    };

    handleKeyDown = (event) => {
        if (event.key === "Enter") {
            this.changeName(this.textFieldRef.current.value);
            this.textFieldRef.current.value = "";
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.changeName(this.textFieldRef.current.value);
        this.textFieldRef.current.value = "";
    };

    render() {
        return <div>
            <TextField id="create-new-chat-text-field" label="Новое имя" inputRef={this.textFieldRef} style={{ width: "60%" }} onKeyDown={this.handleKeyDown} />
            <SaveIcon onClick={this.handleSubmit} />
        </div>;
    }
}

const mapStateToProps = (state) => {
    return {
        name: state.profile.name,
    }
};

const Profile = connect(mapStateToProps, { changeName })(_Profile);

export { Profile };