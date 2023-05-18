import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ShopByCategory = () => {
    return (
        <div className="container">
            <h1 className="text-center my-5 fw-bold" style={{ color: '#F379A7' }}>Shop By Category</h1>

            <Tabs>
                <TabList>
                    <Tab>Category 1</Tab>
                    <Tab>Category 2</Tab>
                    <Tab>Category 3</Tab>
                </TabList>

                <TabPanel>
                    <h3>Subcategories of Category 1</h3>
                    <ul>
                        <li>Subcategory 1.1</li>
                        <li>Subcategory 1.2</li>
                        <li>Subcategory 1.3</li>
                    </ul>
                </TabPanel>
                
                <TabPanel>
                    <h3>Subcategories of Category 2</h3>
                    <ul>
                        <li>Subcategory 2.1</li>
                        <li>Subcategory 2.2</li>
                        <li>Subcategory 2.3</li>
                    </ul>
                </TabPanel>
                
                <TabPanel>
                    <h3>Subcategories of Category 3</h3>
                    <ul>
                        <li>Subcategory 3.1</li>
                        <li>Subcategory 3.2</li>
                        <li>Subcategory 3.3</li>
                    </ul>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ShopByCategory;