import React, { Component } from 'react';
import ReactDOM from "react-dom";
import axios from "axios";
import { Card, Modal } from 'semantic-ui-react';
import EntryModal from './EntryModal.jsx';


class ContributorEntry extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
      id: "",
      title: "",
      author: "",
      body: "",
      date: "",
      location: ""
    }

    this.toggleModal = this.toggleModal.bind(this);
    this.updateEntry = this.updateEntry.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  componentDidMount() {
    this.updateState();
  }

  updateState() {
    this.setState({
      id: this.props.id,
      title: this.props.title,
      author: this.props.author,
      body: this.props.body,
      date: this.props.date,
      location: this.props.location
    })
  }

  toggleModal() {
    this.setState({
      isEditing: !this.state.isEditing
    })
  }

  updateEntry(title, body) {
    this.setState({
      title: title,
      body: body
    })
  }

  render() {
    return (
      <div>
        {this.state.isEditing ? <EntryModal resetFlag={this.toggleModal} updateEntry={this.updateEntry} /> : ""}
        <Card id={this.state.id} color="teal" className="entry" onClick={this.toggleModal}>
          <Card.Content>
            <Card.Header> 
              {this.state.title}
            </Card.Header>
            <Card.Description>
              {this.state.body}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <span className="author">{this.state.author}</span>
            <span className="date">{this.state.date}</span>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

export default ContributorEntry;