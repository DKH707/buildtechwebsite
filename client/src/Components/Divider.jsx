import React from "react";

export default function Divider(props) {
    return (
      <div className="relative">
        <div aria-hidden="true" className="absolute inset-0 flex items-center">
          <div className={`w-full border-t ${props.borderColor ? props.borderColor : 'border-gray-300'}`} />
        </div>
      </div>
    )
  }
  