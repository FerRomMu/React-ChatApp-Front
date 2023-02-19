import { Button, Modal, ModalContent, ModalBody, ModalFooter, ModalHeader, ModalOverlay, ModalCloseButton } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import TextField from '../TextField'

const AddFriendModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add a friend</ModalHeader>
        <ModalCloseButton onClick={onClose} />
        <Formik>
          <Form>
            <ModalBody>
              <TextField
                label="Fiend's name"
                placeholder="Enter friend's username"
                autoComplete="off"
                name="friendName"></TextField>
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose} type="submit">
                Submit
              </Button>
            </ModalFooter>
          </Form>
        </Formik>
      </ModalContent>
    </Modal>
  )
};

export default AddFriendModal