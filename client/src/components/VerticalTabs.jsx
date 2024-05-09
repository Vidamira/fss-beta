import styled from 'styled-components';
import React from 'react';

const StyledVerticalTabs = styled.div`
  display: flex; 
  flex-direction: row; 

  @media (max-width: 768px) {
    flex-direction: column; 
  }
`;

const StyledTabList = styled.div`
  display: grid;
  flex-direction: column; 
  width: 200px; 
  padding: 1rem; 
  background-color: #242426; 
  border-radius: 20px; 
  overflow-y: none; 
  margin-right: 2rem;

  @media (max-width: 768px) {
    display: grid; 
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); 
    width: 100%; 
    height: auto;
    gap: 0.5rem;
    margin-bottom: 2rem;
  }
`;

const StyledTab = styled.button`
  background: #0f0f0f; 
  border: none;
  padding: 1rem 2rem; 
  color: #fff; 
  font-weight: semi-bold; 
  cursor: pointer;
  margin-bottom: 0.5rem; 
  transition: background-image 0.3s ease-in-out; 

  
  &.active {
    background-image: linear-gradient(to left, #f80404, #e79800); 
  }

  &:hover {
    
    background-image: linear-gradient(to bottom, #f80404, #e79800); 
  }

  @media (max-width: 768px) {
    height: 5rem; 
  }
`;

const StyledContent = styled.div`
  flex: 1; 
  padding: 1rem; 
  overflow-y: none; 
  padding: 0rem 0rem;
`;

const VerticalTabs = ({ tabs, activeTabIndex, onTabClick }) => {
  return (
    <StyledVerticalTabs>
      <StyledTabList>
        {tabs.map((tab, index) => (
          <StyledTab
            key={tab.id}
            className={activeTabIndex === index ? 'active' : ''} 
            onClick={() => onTabClick(index)} 
          >
            {tab.label}
          </StyledTab>
        ))}
      </StyledTabList>
      <StyledContent>
        {activeTabIndex !== undefined && tabs[activeTabIndex].content}
      </StyledContent>
    </StyledVerticalTabs>
  );
};

export default VerticalTabs;
