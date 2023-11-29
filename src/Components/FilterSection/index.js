
import { useState } from 'react';
import Carousel from '../Carousel';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import './fsection.css';


const FilterSection = ({ title, data, filters, executeFilter }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, value) => {
    setSelectedTab(value);
    executeFilter(filters[value].key);
  };

  return (
    <div className="section">
      <div>
        <h1 className="title"> {title}</h1>
      </div>
      <Tabs
        value={selectedTab}
        onChange={handleTabChange}
        TabIndicatorProps={{
          style: {
            backgroundColor: 'var(--css-primary)',
          },
        }}
      >
        {filters.map((f) => (
          <Tab className="tab" key={f.key} label={f.label} />
        ))}
      </Tabs>

      <Carousel data={data} navId="filter" />
    </div>
  );
};

export default FilterSection;
