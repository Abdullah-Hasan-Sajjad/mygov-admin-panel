import { Dropdown } from 'flowbite-react';

export default function MainDropdown({dropdownSize, label, dropdownItems}) { // dropdownSize can be small or large
  return (
    <div className="flex items-center gap-4">
        {
           dropdownSize === "small" ? 
            <Dropdown label={label} size="sm">
                {
                    dropdownItems.map((item, index) => {
                        return <Dropdown.Item key={index}>{item}</Dropdown.Item>
                    })
                }
            </Dropdown>
           : 
            <Dropdown label={label} size="lg">
                {
                    dropdownItems.map((item, index) => {
                        return(
                            <Dropdown.Item key={index}>
                                {item}
                            </Dropdown.Item>
                        )
                    })
                }
            </Dropdown>
        }

    </div>
  );
}
