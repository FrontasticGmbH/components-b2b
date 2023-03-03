import React, { useState } from 'react';
import { CalendarIcon } from '@heroicons/react/outline';

const DeliveryScheduleWidget = () => {
  const [days, setDays] = useState({
    mon: { label: 'Mon', isChecked: true },
    tue: { label: 'Tue', isChecked: true },
    wed: { label: 'Wed', isChecked: true },
    thu: { label: 'THU', isChecked: true },
    fri: { label: 'FRI', isChecked: true },
    sat: { label: 'Sat', isChecked: true },
    sun: { label: 'Sun', isChecked: true },
  });

  const handleUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDays({
      ...days,
      [e.target.name]: { ...days[e.target.name], isChecked: e.target.checked },
    });
  };
  return (
    <div className="flex h-full flex-col bg-white px-4 drop-shadow-md">
      <div className="flex items-center border-b-2 py-4 text-sm  font-bold">
        <CalendarIcon className="mr-2 h-4 w-4" />
        <p>Delivery Schedule</p>
      </div>
      <div className="mt-4 flex flex-row justify-between">
        {Object.keys(days).map((day) => (
          <div className="flexl flex-col text-sm" key={day}>
            <p>{days[day].label}</p>
            <input
              type="checkbox"
              className="input input-checkbox"
              readOnly={false}
              name={day}
              onChange={handleUpdate}
              checked={days[day].isChecked}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeliveryScheduleWidget;
