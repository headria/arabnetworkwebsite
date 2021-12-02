import React from 'react';
import {Container, Form, FormContainer, FormControl, BgContact, FormRow} from "./Contact-Styled";
import {Button} from "@components";

const ContactContainer = () => {
    return (
        <BgContact>
            <Container>
                <FormContainer>
                    <Form>
                        <FormRow>
                            <FormControl>
                                <label htmlFor="">First Name</label>
                                <input type="text" placeholder={"Enter your First Name"}/>
                            </FormControl>
                            <FormControl>
                                <label htmlFor="">Last Name</label>
                                <input type="text" placeholder={"Enter your Last Name"}/>
                            </FormControl>
                        </FormRow>
                        <FormRow>
                            <FormControl>
                                <label htmlFor="">Email Adrees</label>
                                <input type="text" placeholder={"Enter your Email Address"}/>
                            </FormControl>
                            <FormControl>
                                <label htmlFor="">Subject</label>
                                <input type="text" placeholder={"Enter your Subject"}/>
                            </FormControl>
                            <FormControl>
                                <label htmlFor="">Country</label>
                                <input type="text" placeholder={"Enter your Country"}/>
                            </FormControl>
                        </FormRow>
                        <div>
                            <FormControl>
                                <label htmlFor="">Message</label>
                                <textarea name="" cols={13} rows={13} id="Message"/>
                            </FormControl>
                        </div>
                        <div className={"flex justify-center"}>
                            <Button>Submit</Button>
                        </div>
                    </Form>
                </FormContainer>
            </Container>
        </BgContact>
    );
};

export default ContactContainer;
