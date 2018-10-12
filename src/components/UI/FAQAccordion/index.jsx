import React, { Fragment } from 'react';

const panelData = [{
  id: 'first',
  title: 'panel 1',
  children: 'boris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in repr',
},
{
  id: 'second',
  title: 'panel 2',
  children: 'boris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolornisi ut aliquip ex ea commodo consequat. Duis aute irure dolornisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in repr',
},
{
  id: 'third',
  title: 'panel 3',
  children: 'boris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in repr',
}];

const FAQAccordion = () => (
      <AccordionNew initialPanelId="second">
        {(accordionProps, { currentPanelId }, setActivePanel) => (
            <Fragment>
              {panelData.map(entry => (
                  <Panel
                      {...entry}
                      isOpen={entry.id === currentPanelId}
                      toggleOpen={setActivePanel}/>))}
            </Fragment>
        )}
            </AccordionNew>
);
export default FAQAccordion;
