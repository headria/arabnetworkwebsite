import {Filters, List, ListItem, CheckControl} from './Tutoriral-styled';

interface ISiderbarProps {
    setTabs: (val: number) => void;
    tabs: number;
    className: string
}


const Sidebar = ({tabs, setTabs, className}: ISiderbarProps) => {
    return (
        <div className={`${className} col-span-3`}>
            <Filters>
                <h4>Filters</h4>
                <div>
                    <h5>Category</h5>
                    <List>
                        <ListItem onClick={() => setTabs(0)} isActive={tabs === 0}>
                            <span>
                            All
                        </span> </ListItem>
                        <ListItem onClick={() => setTabs(1)} isActive={tabs === 1}>
                            <span>
                                Bitcoin
                        </span> </ListItem>
                        <ListItem onClick={() => setTabs(2)} isActive={tabs === 2}>
                            <span>
                            Arab Coin
                        </span> </ListItem>
                        <ListItem onClick={() => setTabs(3)} isActive={tabs === 3}>
                            <span>
                            Pixels
                        </span> </ListItem>
                        <ListItem onClick={() => setTabs(4)} isActive={tabs === 4}>
                            <span>
                            lotem
                        </span> </ListItem>
                        <ListItem onClick={() => setTabs(5)} isActive={tabs === 5}>
                            <span>
                        lotem
                        </span> </ListItem>
                        <ListItem onClick={() => setTabs(6)} isActive={tabs === 6}>
                            <span>
                                lotem
                        </span> </ListItem>
                    </List>
                </div>
                <div>
                    <h5>Price</h5>
                    <div>
                        <CheckControl>
                            <label htmlFor="">
                                <input type="checkbox"/>
                                <span>Free</span>
                            </label>
                        </CheckControl>
                        <CheckControl>
                            <label htmlFor="">
                                <input type="checkbox"/>
                                <span>Premium</span>
                            </label>
                        </CheckControl>
                    </div>
                </div>
                <div>
                    <h5>Level</h5>
                    <List>
                        <CheckControl>
                            <label htmlFor="">
                                <input type="checkbox"/>
                                <span>All</span>
                            </label>
                        </CheckControl>
                        <CheckControl>
                            <label htmlFor="">
                                <input type="checkbox"/>
                                <span>Beginner</span>
                            </label>
                        </CheckControl>
                        <CheckControl>
                            <label htmlFor="">
                                <input type="checkbox"/>
                                <span>Intermediate</span>
                            </label>
                        </CheckControl>
                        <CheckControl>
                            <label htmlFor="">
                                <input type="checkbox"/>
                                <span>Advance</span>
                            </label>
                        </CheckControl>
                    </List>
                </div>
            </Filters>
        </div>
    );
};

export default Sidebar;
