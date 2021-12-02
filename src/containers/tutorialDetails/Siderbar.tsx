import {Filters, List, ListItem, CheckControl} from './Tutoriral-styled';


const Sidebar = () => {
    return (
        <div className={`col-span-3 space-y-5 w-full mb-5`}>
            <Filters>
                <h4>Last Tutorials</h4>
                <div>
                    <List>
                        <ListItem>
                            <div className={"Img_Control"}>
                                <img src="/assets/images/bg/crypto.jpeg" alt=""/>
                            </div>
                            <span>
                           Lorem ipsum dolor sit amet.
                        </span>
                        </ListItem>
                        <ListItem>
                            <div className={"Img_Control"}>
                                <img src="/assets/images/bg/crypto.jpeg" alt=""/>
                            </div>
                            <span>
                                                      Lorem ipsum dolor sit amet.

                        </span>
                        </ListItem>
                        <ListItem>
                            <div className={"Img_Control"}>
                                <img src="/assets/images/bg/crypto.jpeg" alt=""/>
                            </div>
                            <span>
                                                      Lorem ipsum dolor sit amet.

                        </span>
                        </ListItem>
                        <ListItem>
                            <div className={"Img_Control"}>
                                <img src="/assets/images/bg/crypto.jpeg" alt=""/>
                            </div>
                            <span>
                                                     Lorem ipsum dolor sit amet.

                        </span>
                        </ListItem>
                        <ListItem>
                            <div className={"Img_Control"}>
                                <img src="/assets/images/bg/crypto.jpeg" alt=""/>
                            </div>
                            <span>
                                                    Lorem ipsum dolor sit amet.

                        </span>
                        </ListItem>
                    </List>
                </div>
            </Filters>
            <Filters>
                <h4>Most Visited</h4>
                <div>
                    <List>
                        <ListItem>
                            <div className={"Img_Control"}>
                                <img src="/assets/images/bg/crypto.jpeg" alt=""/>
                            </div>
                            <span>
                           Lorem ipsum dolor sit amet.
                        </span>
                        </ListItem>
                        <ListItem>
                            <div className={"Img_Control"}>
                                <img src="/assets/images/bg/crypto.jpeg" alt=""/>
                            </div>
                            <span>
                             Lorem ipsum dolor sit amet.
                            </span>
                        </ListItem>
                        <ListItem>
                            <div className={"Img_Control"}>
                                <img src="/assets/images/bg/crypto.jpeg" alt=""/>
                            </div>
                            <span>
                                    Lorem ipsum dolor sit amet.
                            </span>
                        </ListItem>
                        <ListItem>
                            <div className={"Img_Control"}>
                                <img src="/assets/images/bg/crypto.jpeg" alt=""/>
                            </div>
                            <span>
                           Lorem ipsum dolor sit amet.
                            </span>
                        </ListItem>
                        <ListItem>
                            <div className={"Img_Control"}>
                                <img src="/assets/images/bg/crypto.jpeg" alt=""/>
                            </div>
                            <span>
                          Lorem ipsum dolor sit amet.
                        </span>
                        </ListItem>
                    </List>
                </div>
            </Filters>
        </div>
    );
};

export default Sidebar;
