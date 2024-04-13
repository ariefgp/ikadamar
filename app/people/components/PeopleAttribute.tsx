import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import * as Icons from '@fortawesome/free-solid-svg-icons';

type IconName = keyof typeof Icons;

interface PeopleAttributeProps {
    fontIcon: IconName;
    label: String;
}

const PeopleAttribute = ({ fontIcon, label }: PeopleAttributeProps) => {
    const icon = (Icons as any)[fontIcon];
    return (
        <>
            <div className="basis-full">
                <div className="flex flex-row gap-2">
                    <div><FontAwesomeIcon icon={icon} style={{ color: '#8EB1E5' }} /></div>
                    <div className="text-xs">{label}</div>
                </div>
            </div>
        </>
    )
}

export default PeopleAttribute