import {
  Button,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Modal,
  Input,
  Textarea,
  Tabs,
  Tab,
} from "@nextui-org/react";
import React from "react";
import DatePicker from "../components/DatePicker";

const ModalContainer = ({ isOpen, onOpenChange }: any) => {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        <ModalHeader>Create an Event</ModalHeader>
        <Tabs className="ml-8" aria-label="Type">
          <Tab key={"Event"} title="Event">
            <ModalBody>
              <Input label="Title" />
              <Textarea label="Description" placeholder="Details about event" />
              <DatePicker />
            </ModalBody>
          </Tab>
          <Tab key={"Appointment"} title="Appointment">
            <ModalBody>
              <Input label="Title" />
              <Textarea
                label="Description"
                placeholder="Details about appointment"
              />
              <DatePicker />
            </ModalBody>
          </Tab>
        </Tabs>

        <ModalFooter>
          <Button
            color="secondary"
            variant="bordered"
            onPress={onOpenChange}
            radius="full"
          >
            Cancel
          </Button>
          <Button
            color="primary"
            variant="solid"
            onPress={onOpenChange}
            radius="full"
          >
            Create Event
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalContainer;
