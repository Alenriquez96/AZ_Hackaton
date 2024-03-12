"use client";
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
import React, { useState } from "react";
import { DatePicker } from "../components/DatePicker";

interface ModalContainerProps {
  isOpen: boolean;
  onOpenChange: () => void;
  addAnAppointment: (appointment: { title: string; range: string }) => void;
  addAReminder: (r: { title: string }) => void;
  onClose?: () => void;
}

const ModalContainer = ({
  isOpen,
  onOpenChange,
  addAnAppointment,
  addAReminder,
  onClose,
}: ModalContainerProps) => {
  const [eventType, setEventType] = useState<string>();
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>();

  const handleCreateEvent = () => {
    if (eventType === "event") {
      addAReminder({ title });
      onClose && onClose();
    } else {
      addAnAppointment({ title, range: "10:00 - 11:00" });
      onClose && onClose();
    }
  };
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        <ModalHeader>Create an Event</ModalHeader>
        <Tabs
          className="ml-8"
          aria-label="Type"
          onSelectionChange={(k: any) => setEventType(k)}
        >
          <Tab key={"event"} title="Event">
            <ModalBody>
              <Input
                isRequired
                label="Title"
                onChange={(e) => setTitle(e.target.value)}
              />
              <Textarea
                isRequired
                label="Description"
                placeholder="Details about event"
                onChange={(e) => setDescription(e.target.value)}
              />
              <DatePicker />
            </ModalBody>
          </Tab>
          <Tab key={"appointment"} title="Appointment">
            <ModalBody>
              <Input label="Title" onChange={(e) => setTitle(e.target.value)} />
              <Textarea
                label="Description"
                placeholder="Details about appointment"
                onChange={(e) => setDescription(e.target.value)}
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
            onPress={handleCreateEvent}
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
