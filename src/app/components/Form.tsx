import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  height: 80%;
  max-width: 400px;
  margin: auto;
  padding: 40px 20px;
  
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Select = styled.select`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 4px;
  color: white;
  background-color: #FF99FF;
  cursor: pointer;

  &:hover {
    background-color: #FF99FF;
  }
`;

interface Conversation {
    role: string  
    content: string
}

const TripForm: React.FC = () => {
  const [destination, setDestination] = React.useState<string>("");
  const [interest, setInterest] = React.useState<string>("");
  const [days, setDays] = useState(1);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    if event.key === 'Enter' {
        const chatHistory = [..destination, ..interest, ..days{role: "user", content: value}]
        const response = await fetch('/api/openAIChat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({messages: chatHistory}),
        });



    e.preventDefault();
    console.log(`Destination: ${destination}, Interest: ${interest}, Days: ${days}`);
    // Here you can add the logic for the form submission, like calling an API
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <Label>
        Where are you going?
        <Input type="text" value={destination} onChange={(e) => setDestination(e.target.value)} />
      </Label>

      <Label>
        What are your interests?
        <Select value={interest} onChange={(e) => setInterest(e.target.value)}>
          <option value="beach">Beach</option>
          <option value="city">City</option>
          <option value="mountains">Mountains</option>
          <option value="museums">Museums</option>
        </Select>
      </Label>

      <Label>
        How many days are you there?
        <Input type="number" min="1" max="14" value={days} onChange={(e) => setDays(Number(e.target.value))} />
      </Label>

      <Button type="submit">Plan the trip of my dreams</Button>
    </Form>
  );
};

export default TripForm;
