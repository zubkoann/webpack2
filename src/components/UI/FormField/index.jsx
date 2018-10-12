import React from 'react';

const FormField = (props, ref) => (
      <div className="FormField">
        <input type="email" name="email" ref={ref}/>
      </div>
);
export default React.forwardRef(FormField);
