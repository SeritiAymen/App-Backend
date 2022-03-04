import React, { Component } from "react";
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Input,
    Label

} from "reactstrap";

export default class CustomModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: this.props.activeItem
        };
    }
    handleChange = e => {
        let { name, value } = e.target;
        if (e.target.type === "checkbox") {
            value = e.target.checked;
        }
        const activeItem = { ...this.state.activeItem, [name]: value };
        this.setState({ activeItem });
    };
    render() {
        const { toggle, onSave } = this.props;
        return (
            <Modal isOpen={true} toggle={toggle}>
                <ModalHeader toggle={toggle}>BDC Item</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="radical">radical</Label>
                            <Input
                              type="text"
                              name="radical"
                              value={this.state.activeItem.radical}
                              onChange={this.handleChange}
                              placeholder="Enter BDC radical"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="bpr">bpr</Label>
                            <Input
                            type="text"
                            name="bpr"
                            value={this.state.activeItem.bpr}
                            onChange={this.handleChange}
                            placeholder="Enter BDC bpr"
                            />
                        </FormGroup>
                        <FormGroup check>
                            <Label for="completed">
                                <Input
                                type="checkbox"
                                name="completed"
                                checked={this.state.activeItem.completed}
                                onChange={this.handleChange}
                                />
                                Completed
                            </Label>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="success" onClick={() => onSave(this.state.activeItem)}>
                        Save
                    </Button>
                </ModalFooter>
            </Modal>
        );
    }
}