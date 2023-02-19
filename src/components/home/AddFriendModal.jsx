import { Button, Modal, ModalContent, ModalBody, ModalFooter, ModalHeader, ModalOverlay, ModalCloseButton } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import TextField from '../TextField'
import * as Yup from "yup";

const AddFriendModal = ({ friends, setFriends, isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add a friend</ModalHeader>
        <ModalCloseButton onClick={onClose} />
        <Formik
          initialValues={{ friendName: "" }}
          validationSchema={Yup.object({
            friendName: Yup.string()
              .required('Username required')
              .min(6, "Invalid username")
              .max(28, "Invalid username")
          })}
          onSubmit={(values, actions) => {
            setFriends([...friends, 
              { username: values.friendName, connected: false }
            ])
            actions.resetForm()
            onClose()
          }}
        >
          <Form>
            <ModalBody>
              <TextField
                label="Friend's name"
                placeholder="Enter friend's username"
                autoComplete="off"
                name="friendName"></TextField>
            </ModalBody>
            <ModalFooter>
              <Button type="submit">
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